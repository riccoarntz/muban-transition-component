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
   * @description Starts the main loopingAnimation for the component
   */
  startLoopingAnimation(): void;

  /**
   * @public
   * @method stopLoopingAnimation
   * @description Stops the main loopingAnimation for the component
   */
  stopLoopingAnimation(): void;

  transitionInThreshold: number;

  /**
   * @public
   * @property inView
   * @description A flag that keeps track if a scrollComponent is in the view
   */
  inView: boolean;
}
