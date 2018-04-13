import ScrollTrackerEvent from 'seng-scroll-tracker/lib/event/ScrollTrackerEvent';
import ScrollTracker from 'seng-scroll-tracker/lib/ScrollTracker';
import NativeEventListener from '../event/NativeEventListener';
import ScrollUtils from '../util/ScrollUtils';
import debounce from 'lodash/debounce';
import CommonEvent from 'seng-event/lib/event/CommonEvent';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import CoreComponent from 'muban-core/lib/CoreComponent';
import mubanTransitionCoreMixin from '../mixin/MubanTransitionCoreMixin';
import IMubanTransitionComponent from '../interface/IMubanTransitionComponent';
import MubanTransitionVariable from '../data/MubanTransitionVariable';
import bows from 'bows';
import IMubanTransitionCoreComponent from 'lib/interface/IMubanTransitionCoreComponent';

export const base: Constructor<IMubanTransitionCoreComponent> &
  typeof CoreComponent = mubanTransitionCoreMixin(CoreComponent);
export default class MubanTransitionContentPage extends base {
  /**
   * @description Logger for displaying messages
   */
  private log: bows = new bows('MubanTransitionContentPage');

  public static setDebugLabel: boolean = false;
  /**
   * @description The collection of scroll components
   */
  private scrollComponents = {};
  /**
   * @public
   * @property scrollTracker
   * @description Here initiate the scrollTracker, the scrollTracker manages when a component is in view or
   * when it's not!
   */
  private scrollTracker = new ScrollTracker();
  /**
   * @public
   * @property scrollTrackerPoints
   * @description Here we keep track of the scrollTracker points on this page
   * @type {{}}
   */
  private scrollTrackerPoints = {};

  /**
   * @public
   * @method allComponentsConstructed
   */
  public adopted(): void {
    this.disposable.add(
      new NativeEventListener(window, 'resize', debounce(this.handleResize.bind(this), 100)),
    );
    this.getElements(`[${MubanTransitionVariable.componentAttribute}]`).forEach(element => {
      const component = <IMubanTransitionComponent>getComponentForElement(element);

      if (component && component.dispatcher) {
        this.disposable.add(
          new NativeEventListener(
            component.dispatcher,
            CommonEvent.RESIZE,
            this.handleResize.bind(this),
          ),
        );

        if (element.hasAttribute(MubanTransitionVariable.scrollComponentAttribute)) {
          this.scrollComponents[
            component.constructor['displayName'] + component.eventNamespace
          ] = component;
        }
      }
    });

    // Add al the components to the scroll tracker
    this.addComponentsToScrollTracker(this.scrollComponents);
  }

  /**
   * @public
   * @method addComponentsToScrollTracker
   */
  public addComponentsToScrollTracker(components): void {
    Object.keys(components).forEach(componentId => {
      // Check if it's not already added!
      if (!this.scrollTrackerPoints[componentId]) {
        // Store the ref
        this.scrollComponents[componentId] = components[componentId];
        // Get the correct data
        const scrollTrackerData = this.getScrollTrackerData(components[componentId]);
        // console.log('addComponentsToScrollTracker', componentId, scrollTrackerData);
        const scrollTrackerPoint = this.scrollTracker.addPoint(
          scrollTrackerData.yPosition,
          scrollTrackerData.height,
        );

        // Store the reference
        this.scrollTrackerPoints[componentId] = {
          point: scrollTrackerPoint,
          enterViewListener: this.handleComponentEnterView.bind(this, componentId),
          leaveViewListener: this.handleComponentLeaveView.bind(this, componentId),
          beyondViewListener: this.handleComponentBeyondView.bind(this, componentId),
        };

        scrollTrackerPoint.addEventListener(
          ScrollTrackerEvent.ENTER_VIEW,
          this.scrollTrackerPoints[componentId].enterViewListener,
        );
        scrollTrackerPoint.addEventListener(
          ScrollTrackerEvent.LEAVE_VIEW,
          this.scrollTrackerPoints[componentId].leaveViewListener,
        );
        scrollTrackerPoint.addEventListener(
          ScrollTrackerEvent.SCROLLED_BEYOND,
          this.scrollTrackerPoints[componentId].beyondViewListener,
        );

        // Check for the position on init
        if (scrollTrackerPoint.isInBounds) {
          this.handleComponentEnterView(componentId);
        }

        // Add a debug label
        setTimeout(() => this.setDebugLabel(componentId), 100);
      }
    });
  }

  /**
   * @private
   * @method setDebugLabel
   */
  private setDebugLabel(componentId: string): void {
    if (MubanTransitionContentPage.setDebugLabel) {
      const scrollTrackerPoint = this.scrollTrackerPoints[componentId];

      if (!scrollTrackerPoint.debugLabel) {
        scrollTrackerPoint.debugLabel = document.createElement('div');
        scrollTrackerPoint.debugLabel.classList.add('scroll-tracker-point');
        scrollTrackerPoint.debugLabel.classList.add(`scroll-${componentId.replace('.', '-')}`);

        const label = document.createElement('p');
        label.innerHTML = `scroll-tracker-point:${componentId}`;
        scrollTrackerPoint.debugLabel.appendChild(label);

        document.body.appendChild(scrollTrackerPoint.debugLabel);
      }

      scrollTrackerPoint.debugLabel.style.height = `${scrollTrackerPoint.point.height}px`;
      scrollTrackerPoint.debugLabel.style.top = `${scrollTrackerPoint.point.position}px`;
    }
  }

  /**
   * @public
   * @method removeComponentsFromScrollTracker
   */
  public removeComponentsFromScrollTracker(components): void {
    Object.keys(components).forEach(componentId => {
      const scrollTrackerPoint = this.scrollTrackerPoints[componentId];

      if (scrollTrackerPoint) {
        scrollTrackerPoint.point.removeEventListener(
          ScrollTrackerEvent.ENTER_VIEW,
          scrollTrackerPoint.enterViewListener,
        );
        scrollTrackerPoint.point.removeEventListener(
          ScrollTrackerEvent.LEAVE_VIEW,
          scrollTrackerPoint.leaveViewListener,
        );
        scrollTrackerPoint.point.removeEventListener(
          ScrollTrackerEvent.SCROLLED_BEYOND,
          scrollTrackerPoint.beyondViewListener,
        );
        // Remove the debug label
        if (MubanTransitionContentPage.setDebugLabel) {
          document.body.removeChild(
            document.body.querySelector('.scroll-' + componentId.replace('.', '-')),
          );
        }
        // Remove the point from the scroll tracker
        this.scrollTracker.removePoint(scrollTrackerPoint.point);
        // Remove the point from the object
        delete this.scrollTrackerPoints[componentId];
        // Reset the transition state
        this.scrollComponents[componentId].transitionOut(true);
        // Remove the block reference
        delete this.scrollComponents[componentId];
      } else {
        this.log(
          `[MubanTransitionContentPage] Component with id: [${componentId}] does not exist, unable to remove it`,
        );
      }
    });
  }

  /**
   * @private
   * @description Recalculate the scrollTrackerPoints so the transitionIn happens on the right moment!
   * @method updateScrollTrackerPoints
   */
  private updateScrollTrackerPoints(): void {
    Object.keys(this.scrollTrackerPoints).forEach(componentId => {
      // Get the correct data
      const scrollTrackerPoint = this.scrollTrackerPoints[componentId].point;
      const scrollComponent = this.scrollComponents[componentId];

      // Fetch the new dimensions
      const scrollTrackerData = this.getScrollTrackerData(scrollComponent);

      scrollTrackerPoint.position = scrollTrackerData.yPosition;
      scrollTrackerPoint.height = scrollTrackerData.height;

      this.setDebugLabel(componentId);
    });
  }

  /**
   * @private
   * @method handleResize
   * @description When the window resize event is triggered  we need to recalculate the scrollTrackerPoints so the
   * transitionIn happens on the right moments!
   * @returns void
   */
  private handleResize(): void {
    this.updateScrollTrackerPoints();
  }

  /**
   * @private
   * @method getScrollTrackerData
   */
  private getScrollTrackerData(
    component: IMubanTransitionComponent,
  ): { height: number; yPosition: number } {
    let threshold = 0;
    let yPosition = Math.round(component.element.getBoundingClientRect().top);

    if (getComputedStyle(component.element).position !== 'fixed') {
      yPosition += ScrollUtils.scrollTop;
      threshold = window.innerHeight * component.transitionInThreshold;
    }

    return {
      yPosition: Math.max(yPosition + threshold, 0),
      height: component.element.offsetHeight - threshold,
    };
  }

  /**
   * @private
   * @method handleComponentEnterView
   * @param componentId
   * @description When a scrollComponent enters the view we want to trigger the transition in method and mark the block
   * as inView
   * @returns void
   */
  private handleComponentEnterView(componentId): void {
    if (this.scrollComponents[componentId]) {
      this.scrollComponents[componentId].inView = true;

      // Start Looping Animations
      if (!this.scrollComponents[componentId].loopingAnimationsStarted) {
        this.scrollComponents[componentId].startLoopingAnimation();
      }

      this.scrollComponents[componentId].transitionIn();
    }
  }

  /**
   * @private
   * @method handleComponentLeaveView
   * @description When a scrollComponent leaves the view we set the inView flag to false
   * @param componentId
   * @returns void
   */
  private handleComponentLeaveView(componentId): void {
    this.scrollComponents[componentId].inView = false;

    // Stop looping animations
    this.scrollComponents[componentId].stopLoopingAnimation();
  }

  /**
   * @private
   * @method handleComponentBeyondView
   * @param componentId
   * @description When the scrollbar is dragged down super fast the default enter view event might not be
   * triggered therefor we have a beyondView event! If it's already transitioned in it will do nothing! But if
   * it's not transitioned in it will still try to transitionIn
   * @returns void
   */
  private handleComponentBeyondView(componentId): void {
    if (this.scrollComponents[componentId]) {
      this.scrollComponents[componentId].inView = true;
      // todo maybe seek to progress(1) to avoid (unnecessary) performance issue's
      this.scrollComponents[componentId].transitionIn();
    }
  }

  public dispose() {
    if (this.scrollComponents) {
      this.removeComponentsFromScrollTracker(this.scrollComponents);
      this.scrollComponents = null;
    }

    if (this.scrollTracker) {
      this.scrollTracker.dispose();
      this.scrollTracker = null;
    }

    super.dispose();
  }
}
