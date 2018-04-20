import AbstractTransitionController, { TransitionDirection } from 'transition-controller';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import isElement from 'lodash/isElement';
import { TimelineLite, TimelineMax } from 'gsap';
import { IMubanTransitionMixin } from '../interface/IMubanTransitionMixin';

export default abstract class MubanTransitionController<
  T extends IMubanTransitionMixin
> extends AbstractTransitionController<T> {
  /**
   * @protected
   * @method getTimelineForComponent
   * @param {string | HTMLElement | T} component
   * @param {TransitionDirection} direction
   * @returns {gsap.TimelineLite | gsap.TimelineMax}
   */
  protected getTimelineForComponent(
    component: HTMLElement | T,
    direction: TransitionDirection,
  ): TimelineLite | TimelineMax {
    let instance: T;

    if (isElement(component)) {
      instance = getComponentForElement<T>(<HTMLElement>component);
    } else {
      instance = <T>component;
    }

    // Return the correct timeline
    if (direction === TransitionDirection.IN) {
      return (<any>instance.transitionController).transitionInTimeline;
    }
    return (<any>instance.transitionController).transitionOutTimeline;
  }
}
