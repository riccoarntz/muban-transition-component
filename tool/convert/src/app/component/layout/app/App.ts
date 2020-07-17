import { IMubanTransitionMixin, MubanTransitionVariable } from 'muban-transition-component';
import { ScrollTrackerComponentManager } from 'scroll-tracker-component-manager';
import AbstractComponent from 'app/component/AbstractComponent';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';

export default class App extends AbstractComponent {
  public static readonly displayName: string = 'app-root';

  public scrollTrackerComponentManager: ScrollTrackerComponentManager<IMubanTransitionMixin> = new ScrollTrackerComponentManager<IMubanTransitionMixin>({
    inViewProgressEnabled: false,
    setDebugLabel: true,
    debugBorderColor: 'red',
    scrollThrottle: 100,
    resizeDebounce: 100,

    enableSmoothScroll: false,
    smoothScrollOptions: {
      damping: 0.1,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true,
      wheelEventTarget: null,
      plugins: {},
    },
  });

  constructor(element: HTMLElement) {
    super(element);
    // for generic app logic
  }

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
    }
  }
}
