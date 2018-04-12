import MubanTransitionContentPage from '../../src/lib/page/MubanTransitionContentPage';

export default class App extends MubanTransitionContentPage {
  static displayName: string = 'app-root';

  constructor(element: HTMLElement) {
    MubanTransitionContentPage.setDebugLabel = true;

    super(element);
    // for generic app logic
  }

  public dispose() {
    // clean up stuff when hot reloading
  }
}
