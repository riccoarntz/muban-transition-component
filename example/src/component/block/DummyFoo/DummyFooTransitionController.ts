import MubanTransitionController from '../../../../../src/lib/util/MubanTransitionController';
import { Expo } from 'gsap';
import TransitionDirection from 'transition-controller/lib/enum/TransitionDirection';
import DummyFoo from './DummyFoo';

class DummyFooTransitionController extends MubanTransitionController<DummyFoo> {

  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   * */
  protected setupTransitionInTimeline(): void {
    this.parentController.test();

    const textContent:HTMLElement = this.parentController.getElement('.js-text-content');
    const primaryButton:HTMLElement = this.parentController.getElement('.js-button-open');
    const loopingTitle:HTMLElement = this.parentController.getElement('.js-looping-title');
    const loopingAnimation:HTMLElement = this.parentController.getElement('.js-loop-animation');

    this.transitionInTimeline.from(this.parentController.getElement('.js-background'), 1.2, {width: 0, ease: Expo.easeInOut, clearProps: 'width'});
    this.transitionInTimeline.addLabel('afterBg', '-=0.6');

    this.transitionInTimeline.from(textContent, 0.8, {opacity: 0}, 'afterBg');
    this.transitionInTimeline.from(textContent, 0.8, {y: 30, ease: Expo.easeOut, clearProps: 'all'}, 'afterBg');

    this.transitionInTimeline.add(this.getTimeline(primaryButton, TransitionDirection.IN), 'afterBg+=0.2');

    this.transitionInTimeline.from(loopingTitle, 0.8, {opacity: 0}, 'afterBg+=0.4');
    this.transitionInTimeline.from(loopingTitle, 0.8, {y: 20, ease: Expo.easeOut}, 'afterBg+=0.4');

    this.transitionInTimeline.from(loopingAnimation, 0.8, {opacity: 0}, 'afterBg+=0.8');
    this.transitionInTimeline.from(loopingAnimation, 0.8, {y: 20, ease: Expo.easeOut}, 'afterBg+=0.8');
  }

  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   * */
  protected setupTransitionOutTimeline(): void {
    this.transitionOutTimeline.to(this.parentController.element, 0.8, {opacity: 0});
  }

  /**
   * @protected
   * @method setupLoopingAnimationTimeline
   * @description Use this method to setup your looping animation timeline
   * */
  protected setupLoopingAnimationTimeline(): void {
    this.loopingAnimationTimeline.yoyo(true);

    this.loopingAnimationTimeline.to(this.parentController.element.querySelector('.js-loop-animation'), 1, {scale: .9, yPercent: 50, ease: Expo.easeInOut});
    this.loopingAnimationTimeline.to(this.parentController.element.querySelector('.js-loop-animation'), .5, {xPercent: 50, ease: Expo.easeInOut});
    this.loopingAnimationTimeline.to(this.parentController.element.querySelector('.js-loop-animation'), .5, {xPercent: -50, ease: Expo.easeInOut});

  }
}

export default DummyFooTransitionController;
