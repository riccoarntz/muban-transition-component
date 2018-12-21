import MubanTransitionController from '../../../../src/lib/util/MubanTransitionController';
import { Expo, Back, TimelineMax } from 'gsap';
import DummyFooPopup from './DummyFooPopup';

class DummyFooPopupTransitionController extends MubanTransitionController {
  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   * */
  protected setupTransitionInTimeline(
    timeline:TimelineMax,
    parent:DummyFooPopup
  ): void {
    const title: HTMLElement = parent.getElement('.js-title');

    timeline.fromTo(this.parentController.element, 0.2, {
      scale: 0,
      opacity: 0,
      pointerEvents: 'none'
    }, { opacity: 1, scale: 1, pointerEvents: 'all', clearProps: 'all', ease: Back.easeOut });
    timeline.from(title, 0.8, { opacity: 0 }, 0.4);
    timeline.from(title, 0.8, { y: 30, ease: Expo.easeOut, clearProps: 'all' }, 0.4);
  }

  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   * */
  protected setupTransitionOutTimeline(
    timeline:TimelineMax,
    parent:DummyFooPopup
  ): void {
    timeline.to(parent.element, 0.2, {
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
  protected setupLoopingAnimationTimeline(): void {}
}

export default DummyFooPopupTransitionController;
