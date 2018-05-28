import CoreComponent from 'muban-core/lib/CoreComponent';
import ChildComponentBTransitionController from './ChildComponentBTransitionController';
import mubanTransitionMixin from '../../../../src/lib/mixin/MubanTransitionMixin';
import mubanTransitionCoreMixin from '../../../../src/lib/mixin/MubanTransitionCoreMixin';

export default class ChildComponentB extends mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)) {
  static displayName: string = 'child-component-b';
  public transitionController: ChildComponentBTransitionController;

  constructor(public element: HTMLElement) {
    super(element);

    this.transitionController = new ChildComponentBTransitionController(this);
  }
}
