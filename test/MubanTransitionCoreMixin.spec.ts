import { expect } from 'chai';
import { render, getComponent } from './util/index.spec';
import EventDispatcher from 'seng-event/lib/EventDispatcher';
import DisposableHelper from 'src/lib/event/DisposableHelper';

describe('MubanTransitionCoreMixin.spec', () => {
  render();

  const component = getComponent('child-component-a');

  describe('displayName', () => {
    it('should return the displayName', () => {
      expect(component.displayName).to.equal('child-component-a');
    });
  });

  describe('dispose', () => {
    it('should dispose the component', () => {
      expect(component.dispose).to.be.a('function');
    });
  });

  describe('dispatcher', () => {
    it('should be an instance of  EventDispatcher', () => {
      expect(component.dispatcher).to.be.an.instanceof(EventDispatcher);
    });
  });

  describe('componentId', () => {
    it('should be an string', () => {
      expect(component.componentId).to.be.a('string');
    });
  });

  describe('eventNamespaceCount', () => {
    it('should be a number', () => {
      expect(component.eventNamespaceCount).to.be.a('number');
    });
  });

  describe('eventNamespace', () => {
    it('should be a string', () => {
      expect(component.componentId).to.be.a('string');
    });
  });

  describe('disposable', () => {
    it('should be an instance of  disposableHelper', () => {
      expect(component.disposable).to.be.an.instanceof(DisposableHelper);
    });
  });


});
