import { expect } from 'chai';
import { render, getComponent } from './util/index.spec';
import TransitionDirection from 'transition-controller/lib/enum/TransitionDirection';

describe('MubanTransitionController.spec', () => {
  render();
  const component = getComponent('child-component-a');

  describe('getTimelineForComponent', () => {
    it('should try to get a transitionOUT timeline by Component', () => {
      expect(component.transitionController.getTimelineForComponent(component, TransitionDirection.OUT)).to.be.a('object')
    });

    it('should try to get a transitionIN timeline by Component', () => {
      expect(component.transitionController.getTimelineForComponent(component, TransitionDirection.IN)).to.be.a('object')
    });

    it('should try to get a transition timeline by Element', () => {
      expect(component.transitionController.getTimelineForComponent(component.element)).to.be.a('object')
    });
  });
});
