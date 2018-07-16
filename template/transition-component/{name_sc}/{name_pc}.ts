import AbstractTransitionComponent from 'app/component/AbstractTransitionComponent';
import {{name_pc}}TransitionController from './{{name_pc}}TransitionController';

export default class {{name_pc}} extends AbstractTransitionComponent {
  public static displayName:string = '{{name_sc}}';
  public transitionController:{{name_pc}}TransitionController;

  constructor(el:HTMLElement) {
    super(el);
    this.transitionController = new {{name_pc}}TransitionController(this);
  }
}
