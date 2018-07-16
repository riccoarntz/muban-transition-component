import MubanTransitionController from '../../../../../src/lib/util/MubanTransitionController';
import { Expo, TimelineMax } from 'gsap';
import PrimaryButton from './PrimaryButton';

class PrimaryButtonTransitionController extends MubanTransitionController<PrimaryButton> {
  /**
   * Use this method to setup your transition in timeline
   *
   * @protected
   * @method setupTransitionInTimeline
   * @param {TimelineMax} timeline The transition in timeline
   * @param {PrimaryButton} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionInTimeline(
    timeline:TimelineMax,
    parent:PrimaryButton): void {
    timeline.fromTo(parent.element, 0.4, {
      scale: 0,
      opacity: 0,
    }, { opacity: 1, scale: 1, clearProps: 'all', ease: Expo.easeOut });
  }

  /**
   * Use this method to setup your transition out timeline
   *
   * @protected
   * @method setupTransitionOutTimeline
   * @param {TimelineMax} timeline The transition in timeline
   * @param {PrimaryButton} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionOutTimeline(
    timeline:TimelineMax,
    parent:PrimaryButton): void {
    timeline.to(parent.element, 0.6, { opacity: 0});
  }

  /**
   * Use this method to setup your looping timeline
   *
   * @protected
   * @method setupLoopingAnimationTimeline
   * @param {TimelineMax} timeline The transition in timeline
   * @param {PrimaryButton} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupLoopingAnimationTimeline(): void {}
}

export default PrimaryButtonTransitionController;
