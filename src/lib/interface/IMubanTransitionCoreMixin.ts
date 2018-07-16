import EventDispatcher from 'seng-event/lib/EventDispatcher';
import ICoreComponent from 'muban-core/lib/interface/ICoreComponent';

export interface IMubanTransitionCoreMixin extends ICoreComponent {
  /**
   * @description Unique namespace for the components
   */
  eventNamespace: string;
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
