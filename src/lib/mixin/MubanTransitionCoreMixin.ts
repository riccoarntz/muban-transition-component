import EventDispatcher from 'seng-event';
import MubanTransitionVariable from '../data/MubanTransitionVariable';
import ICoreComponent from 'muban-core/lib/interface/ICoreComponent';

function mubanTransitionCoreMixin<TBase extends Constructor<ICoreComponent>>(Base: TBase) {
  return class MubanTransitionCoreMixin extends Base {
    public componentId: string;
    /**
     * @description Namespace counter base
     */
    static eventNamespaceCount: number = 10000000;
    public eventNamespace: string = '';
    public dispatcher: EventDispatcher = new EventDispatcher();

    constructor(...args: any[]) {
      super(...args);

      this.eventNamespace = '.' + ++MubanTransitionCoreMixin.eventNamespaceCount;
      this.componentId = this.displayName + this.eventNamespace;
    }

    public get displayName() {
      return this.element.getAttribute(MubanTransitionVariable.componentAttribute);
    }
  };
}

export default mubanTransitionCoreMixin;
