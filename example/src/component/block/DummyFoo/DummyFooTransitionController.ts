import MubanTransitionController from '../../../../../src/lib/util/MubanTransitionController';
import { Expo, TimelineMax } from 'gsap';
import TransitionDirection from 'transition-controller/lib/enum/TransitionDirection';
import DummyFoo from './DummyFoo';

class DummyFooTransitionController extends MubanTransitionController<DummyFoo> {

  /**
   * Use this method to setup your transition in timeline
   *
   * @protected
   * @method setupTransitionInTimeline
   * @param {TimelineMax} timeline The transition in timeline
   * @param {IMubanTransitionMixin} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionInTimeline(
    timeline:TimelineMax,
    parent:DummyFoo
  ): void {
    parent.test();

    const textContent:HTMLElement = parent.getElement('.js-text-content');
    const primaryButton:HTMLElement = parent.getElement('.js-button-open');
    const loopingTitle:HTMLElement = parent.getElement('.js-looping-title');
    const loopingAnimation:HTMLElement = parent.getElement('.js-loop-animation');

    timeline.from(parent.getElement('.js-background'), 1.2, {width: 0, ease: Expo.easeInOut, clearProps: 'width'});
    timeline.addLabel('afterBg', '-=0.6');

    timeline.from(textContent, 0.8, {opacity: 0}, 'afterBg');
    timeline.from(textContent, 0.8, {y: 30, ease: Expo.easeOut, clearProps: 'all'}, 'afterBg');

    timeline.add(this.getTimeline(primaryButton, TransitionDirection.IN), 'afterBg+=0.2');

    timeline.from(loopingTitle, 0.8, {opacity: 0}, 'afterBg+=0.4');
    timeline.from(loopingTitle, 0.8, {y: 20, ease: Expo.easeOut}, 'afterBg+=0.4');

    timeline.from(loopingAnimation, 0.8, {opacity: 0}, 'afterBg+=0.8');
    timeline.from(loopingAnimation, 0.8, {y: 20, ease: Expo.easeOut}, 'afterBg+=0.8');
  }

  /**
   * Use this method to setup your transition out timeline
   *
   * @protected
   * @method setupTransitionOutTimeline
   * @param {TimelineMax} timeline The transition in timeline
   * @param {IMubanTransitionMixin} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionOutTimeline(
    timeline:TimelineMax,
    parent:DummyFoo
  ): void {
    timeline.to(parent.element, 0.8, {opacity: 0});
  }

  /**
   * Use this method to setup your looping timeline
   *
   * @protected
   * @method setupLoopingAnimationTimeline
   * @param {TimelineMax} timeline The transition in timeline
   * @param {IMubanTransitionMixin} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupLoopingAnimationTimeline(
    timeline:TimelineMax,
    parent:DummyFoo
  ): void {
    timeline.yoyo(true);

    timeline.to(parent.getElement('.js-loop-animation'), 1, {scale: .9, yPercent: 50, ease: Expo.easeInOut});
    timeline.to(parent.getElement('.js-loop-animation'), .5, {xPercent: 50, ease: Expo.easeInOut});
    timeline.to(parent.getElement('.js-loop-animation'), .5, {xPercent: -50, ease: Expo.easeInOut});

  }
}

export default DummyFooTransitionController;
