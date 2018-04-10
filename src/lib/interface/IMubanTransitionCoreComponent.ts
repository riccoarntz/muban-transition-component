import DisposableHelper from '../event/DisposableHelper';
import EventDispatcher from 'seng-event/lib/EventDispatcher';
import ICoreComponent from 'lib/interface/ICoreComponent';

interface IMubanTransitionCoreComponent extends ICoreComponent {
  eventNamespace: string;
  disposable: DisposableHelper;
  dispatcher: EventDispatcher;
  displayName: string;
}

export default IMubanTransitionCoreComponent;
