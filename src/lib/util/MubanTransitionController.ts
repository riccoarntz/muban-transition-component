import AbstractTransitionController, { TransitionDirection } from 'transition-controller';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import isElement from 'lodash/isElement';
import { TimelineLite, TimelineMax } from 'gsap';
import IMubanTransitionMixin from '../interface/IMubanTransitionMixin';

export default abstract class MubanTransitionController extends AbstractTransitionController<
  IMubanTransitionMixin
> {
  /**
   * @protected
   * @method getSubTimelineByComponent
   * @param {string | HTMLElement | T} component
   * @param {TransitionDirection} direction
   * @returns {gsap.TimelineLite | gsap.TimelineMax}
   */
  protected getSubTimelineByComponent(
    component: HTMLElement | IMubanTransitionMixin,
    direction: TransitionDirection,
  ): TimelineLite | TimelineMax {
    let instance: IMubanTransitionMixin;

    if (isElement(component)) {
      instance = getComponentForElement<IMubanTransitionMixin>(<HTMLElement>component);
    } else {
      instance = <IMubanTransitionMixin>component;
    }

    // Return the correct timeline
    if (direction === TransitionDirection.IN) {
      return (<any>instance.transitionController).transitionInTimeline;
    }
    return (<any>instance.transitionController).transitionOutTimeline;
  }
}
