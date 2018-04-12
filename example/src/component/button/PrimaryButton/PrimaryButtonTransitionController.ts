import MubanTransitionController from '../../../../../src/lib/util/MubanTransitionController';
import { Expo } from 'gsap';

class PrimaryButtonTransitionController extends MubanTransitionController {
  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   * */
  protected setupTransitionInTimeline(): void {
    this.transitionInTimeline.fromTo(this.parentController.element, 0.4, {
      scale: 0,
      opacity: 0,
    }, { opacity: 1, scale: 1, clearProps: 'all', ease: Expo.easeOut });
  }

  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   * */
  protected setupTransitionOutTimeline(): void {
    this.transitionOutTimeline.to(this.parentController.element, 0.6, { opacity: 0});
  }

  /**
   * @protected
   * @method setupLoopingAnimationTimeline
   * @description Use this method to setup your looping animation timeline
   * */
  protected setupLoopingAnimationTimeline(): void {

  }
}

export default PrimaryButtonTransitionController;
