import { MubanTransitionController, IMubanTransitionMixin } from 'muban-transition-component';
import { TimelineLite, TimelineMax } from 'gsap';
import {{name_pc}} from './{{name_pc}}';

class {{name_pc}}TransitionController extends MubanTransitionController<{{name_pc}}>
{
  /**
   * Use this method to setup your transition in timeline
   *
   * @protected
   * @method setupTransitionInTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionInTimeline(
    timeline:TimelineLite|TimelineMax,
    parent:IMubanTransitionMixin,
    id:string): void {}

  /**
   * Use this method to setup your transition out timeline
   *
   * @protected
   * @method setupTransitionOutTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionOutTimeline(
    timeline:TimelineLite|TimelineMax,
    parent:IMubanTransitionMixin,
    id:string): void {}

  /**
   * Use this method to setup your looping timeline
   *
   * @protected
   * @method setupLoopingAnimationTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupLoopingAnimationTimeline(
    timeline:TimelineMax,
    parent:IMubanTransitionMixin,
    id:string): void {}

}

export default {{name_pc}}TransitionController;
