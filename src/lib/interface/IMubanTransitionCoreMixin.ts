import DisposableHelper from '../event/DisposableHelper';
import EventDispatcher from 'seng-event/lib/EventDispatcher';
import ICoreComponent from 'muban-core/lib/interface/ICoreComponent';

export interface IMubanTransitionCoreMixin extends ICoreComponent {
  /**
   * @description Unique namespace for the components
   */
  eventNamespace: string;
  /**
   * @description Helper class for disposing of disposable instances
   */
  disposable: DisposableHelper;
  /**
   * @description: EventDispatcher instance for dispatching/listening to events.
   */
  dispatcher: EventDispatcher;
  /**
   * @description unique componentId
   */
  displayName: string;
  /**
   * @description namespaced componentId
   */
  componentId: string;
}
