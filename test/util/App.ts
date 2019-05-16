import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import MubanTransitionVariable from '../../src/lib/data/MubanTransitionVariable';
import { IMubanTransitionMixin } from '../../src/lib/interface/IMubanTransitionMixin';
import { ScrollTrackerComponentManager } from 'scroll-tracker-component-manager';
import CoreComponent from 'muban-core/lib/CoreComponent';
import AppTransitionController from './AppTransitionController';
import mubanTransitionCoreMixin from '../../src/lib/mixin/MubanTransitionCoreMixin';
import mubanTransitionMixin from '../../src/lib/mixin/MubanTransitionMixin';

export default class App extends mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)) {
  static displayName: string = 'app-root';
  public transitionController: AppTransitionController;

  public scrollTrackerComponentManager: ScrollTrackerComponentManager<IMubanTransitionMixin> = new ScrollTrackerComponentManager<IMubanTransitionMixin>({
    setDebugLabel: true,
    debugBorderColor: 'red',
    resizeDebounce: 100,
  });

  constructor(element: HTMLElement) {
    super(element);
    this.transitionController = new AppTransitionController(this);

    // for generic app logic
  }

  /**
   * @public
   * @method allComponentsConstructed
   */
  public adopted(): void {
    this.getElements(`[${MubanTransitionVariable.scrollComponentAttribute}]`).forEach(
      (element: HTMLElement) => {
        this.scrollTrackerComponentManager.addComponentToScrollTracker(<IMubanTransitionMixin>getComponentForElement(element));
      },
    );
  }

  public dispose() {
    // clean up stuff when hot reloading
    if (this.scrollTrackerComponentManager) {
      this.scrollTrackerComponentManager.dispose();
      this.scrollTrackerComponentManager = null;
    }

    super.dispose();
  }
}
