import AbstractTransitionController from 'transition-controller';
import { IMubanTransitionCoreMixin } from './IMubanTransitionCoreMixin';

export interface IMubanTransitionMixin extends IMubanTransitionCoreMixin {
  /**
   * @public
   * @property transitionController
   * @description The transition controller for the component
   */
  transitionController: AbstractTransitionController<IMubanTransitionMixin>;

  /**
   * @public
   * @method leaveView
   * @description When a scrollComponent leaves the view.
   */
  leaveView(): void;

  /**
   * @public
   * @method enterView
   * @description When a scrollComponent enters the view.
   */
  enterView(): void;

  /**
   * @public
   * @method beyondView
   * @description When the scrollbar is dragged down super fast the default enter view event might not be
   * triggered therefor we have a beyondView event! If it's already transitioned in it will do nothing! But if
   * it's not transitioned in it will still try to transitionIn */
  beyondView(): void;

  /**
   * Calling transition in will trigger transitionIn on your transition controller and
   * start the desired timeline.
   *
   * @public
   * @param {boolean} forceTransition Add this flag if you want to overwrite any active transitions
   * @returns {Promise<void>} A promise that will be resolved when the transition in is completed
   */
  transitionIn(forceTransition?: boolean): Promise<void>;

  /**
   * Calling transition out will trigger transitionOut on your transition controller and
   * start the desired timeline.
   *
   * @public
   * @method transitionOut
   * @param {boolean} forceTransition Add this flag if you want to overwrite any active transitions
   * @param {boolean} id This is the id of the transition out timeline that you want to play
   * @param {boolean} reset If the reset flag is set to true it will re-initialize the current timeline
   * @returns {Promise<void>} A promise that will be resolved when the transition out is completed
   */
  transitionOut(forceTransition?: boolean, id?: string, reset?: boolean): Promise<void>;

  /**
   * Start the looping animations on the current component
   *
   * @public
   * @param {boolean} id This is the id of the transition out timeline that you want to play
   * @param {boolean} reset If the reset flag is set to true it will re-initialize the current timeline
   */
  startLoopingAnimation(id?: string, reset?: boolean): void;

  /**
   * This will stop the current looping animation, keep in mind it will not reset it just stop at the current state.
   *
   * @public
   */
  stopLoopingAnimation(): void;

  /**
   * @description: PropertyName of the component that contains a number between 0 - 1.
   * Setting this number to for example 0.5 will trigger the enterView method when the component is already visible for 50% within your viewport.
   */
  enterViewThreshold: number;
}
