import chai, { expect } from 'chai';
import sinon from 'sinon';
import 'chai/register-should';
import sinonChai from 'sinon-chai';
import { render, getComponent } from './util/index.spec';
import { TransitionId } from '../test/util/component/ChildComponentA/ChildComponentATransitionController';
import { TransitionDirection } from 'transition-controller';
chai.use(sinonChai);

describe('MubanTransitionMixin.spec', () => {
  let component;

  before(function () {
    render();
    component = getComponent('child-component-a');
  });

  describe('transitionOut', function () {
    it('should transitionOut the component forced', function () {
      const force = true;
      const reset = false;
      const label = TransitionId[TransitionDirection.OUT].TRANSITION_ID_1;

      const spy = sinon.spy(component.transitionController, 'transitionOut');
      expect(component.transitionOut(force, label, reset)).to.be.a('promise');
      expect(spy).to.be.calledWithExactly(force, label, reset);
      spy.restore();
    });
  });

  describe('transitionOut', function () {
    it('should transitionOut the component', function () {
      expect(component.transitionOut()).to.be.a('promise');
    });
  });

  describe('transitionIn', function () {
    it('should transitionIn the component', function () {
      expect(component.transitionIn()).to.be.a('promise');
    });
  });

  describe('transitionIn', function () {
    it('should force the transitionIn', function () {
      const force = true;
      const spy = sinon.spy(component.transitionController, 'transitionIn');

      expect(component.transitionIn(force)).to.be.a('promise');
      expect(spy).to.be.calledWithExactly(force);
      spy.restore();
    });
  });

  describe('enterView', function () {
    it('should enterView the component', function () {
      const spy = sinon.spy(component, 'transitionIn');
      expect(component.enterView()).to.be.undefined;
      expect(spy).to.be.calledOnce;
      spy.restore();
    });
  });

  describe('leaveView', function () {
    it('should leaveView the component', function () {
      expect(component.leaveView()).to.be.undefined;
    });
  });

  describe('beyondView', function () {
    it('should beyondView the component 1 ', function () {
      const spy = sinon.spy(component, 'transitionIn');
      component.hasEntered = false;
      expect(component.beyondView()).to.be.undefined;
      expect(spy).to.be.calledOnce;
      spy.restore();
    });

    it('should beyondView the component 2', function () {
      const spy = sinon.spy(component, 'transitionIn');
      component.hasEntered = true;
      expect(component.beyondView()).to.be.undefined;
      expect(spy).to.be.not.called;
      spy.restore();
    });
  });

  describe('startLoopingAnimation', function () {
    it('should startLoopingAnimation the component', () => {
      expect(component.startLoopingAnimation()).to.be.undefined;
    });
  });

  // describe('startLoopingAnimation', function () {
  //   it('should startLoopingAnimation the component for specific label', () => {
  //     expect(component.startLoopingAnimation(component, TransitionId.LOOP_1, true)).to.be.undefined;
  //   });
  // });

  describe('stopLoopingAnimation',  () => {
    it('should stopLoopingAnimation the component', () => {
      expect(component.stopLoopingAnimation()).to.be.undefined;
    });
  });

  describe('enterViewThreshold', function () {
    it('enterViewThreshold should be a number', () => {
      expect(component.enterViewThreshold).to.be.a('number');
    });
  });

  describe('hasEntered', function () {
    it('hasEntered should be a boolean', () => {
      expect(component.hasEntered).to.be.a('boolean');
    });
  });
});
