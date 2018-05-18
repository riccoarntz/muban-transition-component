import EventDispatcher from 'seng-event';
import DisposableHelper from '../event/DisposableHelper';
import MubanTransitionVariable from '../data/MubanTransitionVariable';
import ICoreComponent from 'muban-core/lib/interface/ICoreComponent';

function mubanTransitionCoreMixin<TBase extends Constructor<ICoreComponent>>(Base: TBase) {
  return class MubanTransitionCoreMixin extends Base {
    /**
     * @description unique componentId
     */
    public componentId: string;
    /**
     * @description Namespace counter base
     */
    static eventNamespaceCount: number = 10000000;
    /**
     * @description Unique namespace for the components
     */
    public eventNamespace: string = '';
    /**
     * @description Helper class for disposing of disposable instances
     */
    public disposable: DisposableHelper = new DisposableHelper();

    /**
     * @description: EventDispatcher instance for dispatching/listening to events.
     */
    public dispatcher: EventDispatcher = new EventDispatcher();

    constructor(...args: any[]) {
      super(...args);

      this.eventNamespace = '.' + ++MubanTransitionCoreMixin.eventNamespaceCount;
      this.componentId = this.displayName + this.eventNamespace;
    }

    /**
     * @public
     * @method get displayName
     */
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
