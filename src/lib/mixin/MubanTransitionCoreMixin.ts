import EventDispatcher from 'seng-event';
import DisposableHelper from 'lib/event/DisposableHelper';
import CoreComponent from 'muban-core/lib/CoreComponent';
import MubanTransitionVariable from 'lib/data/MubanTransitionVariable';

function mubanTransitionCoreMixin<TBase extends Constructor<CoreComponent>>(Base: TBase) {
  return class MubanTransitionCoreMixin extends Base {
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
    protected disposable: DisposableHelper = new DisposableHelper();

    /**
     * @description: EventDispatcher instance for dispatching/listening to events.
     */
    public dispatcher: EventDispatcher = new EventDispatcher();

    constructor(...args: any[]) {
      super(...args);
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
