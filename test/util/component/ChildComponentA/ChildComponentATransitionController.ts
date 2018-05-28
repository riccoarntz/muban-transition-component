import MubanTransitionController from '../../../../src/lib/util/MubanTransitionController';
import ChildComponentA from './ChildComponentA';

class ChildComponentATransitionController extends MubanTransitionController<ChildComponentA> {
  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   * */
  protected setupTransitionInTimeline(): void {
    this.transitionInTimeline.fromTo(this.parentController.element, 0.2, { opacity: 0, }, { opacity: 1});
  }

  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   * */
  protected setupTransitionOutTimeline(): void {
    this.transitionOutTimeline.to(this.parentController.element, 1, { opacity: 0});
  }

  /**
   * @protected
   * @method setupLoopingAnimationTimeline
   * @description Use this method to setup your looping animation timeline
   * */
  protected setupLoopingAnimationTimeline(): void {

  }
}

export default ChildComponentATransitionController;
