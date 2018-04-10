import { MubanTransitionComponent } from 'muban-transition-component';
import {{name_pc}}TransitionController from './{{name_pc}}TransitionController';

export default class {{name_pc}} extends abstractComponent(MubanTransitionComponent) {
  public static displayName:string = '{{name_sc}}';
  public transitionController:{{name_pc}}TransitionController;

  constructor(el:HTMLElement) {
    super(el);
    this.transitionController = new {{name_pc}}TransitionController(this);
  }

  /**
   * @public
   * @method startLoopingAnimations
   */
  public startLoopingAnimations():void {
      super.startLoopingAnimations();
  }

  /**
   * @public
   * @method stopLoopingAnimations
   */
   public stopLoopingAnimations():void {
      super.stopLoopingAnimations();
   }
}
