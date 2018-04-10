import AbstractTransitionController, { TransitionDirection } from 'transition-controller';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import isElement from 'lodash/isElement';
import { TimelineLite, TimelineMax } from 'gsap';
import IMubanTransitionComponent from 'lib/interface/IMubanTransitionComponent';

export default abstract class MubanTransitionController extends AbstractTransitionController<
  IMubanTransitionComponent
> {
  /**
   * @protected
   * @method getSubTimelineByComponent
   * @param {string | HTMLElement | T} component
   * @param {TransitionDirection} direction
   * @returns {gsap.TimelineLite | gsap.TimelineMax}
   */
  protected getSubTimelineByComponent(
    component: HTMLElement | IMubanTransitionComponent,
    direction: TransitionDirection,
  ): TimelineLite | TimelineMax {
    let instance: IMubanTransitionComponent;

    if (isElement(component)) {
      instance = <IMubanTransitionComponent>getComponentForElement(<HTMLElement>component);
    } else {
      instance = <IMubanTransitionComponent>component;
    }

    // Return the correct timeline
    if (direction === TransitionDirection.IN) {
      return (<any>instance.transitionController).transitionInTimeline;
    }
    return (<any>instance.transitionController).transitionOutTimeline;
  }
}
