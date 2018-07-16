import EventDispatcher from 'seng-event';
import DisposableHelper from '../event/DisposableHelper';
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
    public disposable: DisposableHelper = new DisposableHelper();
    public dispatcher: EventDispatcher = new EventDispatcher();

    constructor(...args: any[]) {
      super(...args);

      this.eventNamespace = '.' + ++MubanTransitionCoreMixin.eventNamespaceCount;
      this.componentId = this.displayName + this.eventNamespace;
    }

    public get displayName() {
      return this.element.getAttribute(MubanTransitionVariable.componentAttribute);
    }

    public dispose() {
      if (this.disposable) {
        this.disposable.dispose();
        this.disposable = null;
      }

      super.dispose();
    }
  };
}

export default mubanTransitionCoreMixin;
