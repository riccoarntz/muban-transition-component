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
   * @public
   * @method transitionIn
   * @description The main transitionIn method for the component
   * @param forceTransition Add this flag if you want to overwrite any active transitions
   * @returns A promise that will be resolved when the transition in timeline is completed
   */
  transitionIn(forceTransition?: boolean): Promise<void>;

  /**
   * @public
   * @method transitionOut
   * @description The main transitionOut method for the component
   * @param forceTransition Add this flag if you want to overwrite any active transitions
   * @returns A promise that will be resolved when the transition in timeline is completed
   */
  transitionOut(forceTransition?: boolean): Promise<void>;

  /**
   * @public
   * @method startLoopingAnimation
   * @description Starts the loopingAnimation timeline for the component
   */
  startLoopingAnimation(): void;

  /**
   * @public
   * @method stopLoopingAnimation
   * @description Stops the loopingAnimation timeline for the component
   */
  stopLoopingAnimation(): void;

  /**
   * @description: PropertyName of the component that contains a number between 0 - 1.
   * Setting this number to for example 0.5 will trigger the enterView method when the component is already visible for 50% within your viewport.
   */
  enterViewThreshold: number;
}
