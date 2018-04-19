import MubanTransitionController from '../../../../src/lib/util/MubanTransitionController';
import { Expo, Back } from 'gsap';
import DummyFooPopup from './DummyFooPopup';

class DummyFooPopupTransitionController extends MubanTransitionController<DummyFooPopup> {
  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   * */
  protected setupTransitionInTimeline(): void {
    const title: HTMLElement = this.parentController.element.querySelector('.js-title');

    this.transitionInTimeline.fromTo(this.parentController.element, 0.2, {
      scale: 0,
      opacity: 0,
      pointerEvents: 'none'
    }, { opacity: 1, scale: 1, pointerEvents: 'all', clearProps: 'all', ease: Back.easeOut });
    this.transitionInTimeline.from(title, 0.8, { opacity: 0 }, 0.4);
    this.transitionInTimeline.from(title, 0.8, { y: 30, ease: Expo.easeOut, clearProps: 'all' }, 0.4);
  }

  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   * */
  protected setupTransitionOutTimeline(): void {
    this.transitionOutTimeline.to(this.parentController.element, 0.2, {
      scale: 0,
      opacity: 0,
      pointerEvents: 'none',
      clearProps: 'scale',
      ease: Back.easeIn
    });
  }

  /**
   * @protected
   * @method setupLoopingAnimationTimeline
   * @description Use this method to setup your looping animation timeline
   * */
  protected setupLoopingAnimationTimeline(): void {

  }
}

export default DummyFooPopupTransitionController;
