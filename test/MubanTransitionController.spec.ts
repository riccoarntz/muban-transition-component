import { expect } from 'chai';
import { render, getComponent, getApp } from './util/index.spec';
import TransitionDirection from 'transition-controller/lib/enum/TransitionDirection';

describe('MubanTransitionController.spec', function () {
  let component;
  let app;

  before(function () {
    render();
    app = getApp();
    component = getComponent('child-component-a');
  });

  // describe('getTimelineForComponent', () => {
  it('should try to get a component by string', function () {
    expect(app.transitionController.getComponent('[data-component="child-component-a"]')).to.be.a('object');
  });

  it('should try to get a  component by Component', function () {
    expect(component.transitionController.getComponent(component)).to.be.a('object');
  });

  it('should try to get a  component by Element', function () {
    expect(component.transitionController.getComponent(component.element)).to.be.a('object');
  });

  it('should trhow error for getComponent ', function () {
    expect(component.transitionController.getComponent.bind(component.transitionController)).to.throw('The requested component [undefined]' +
      ' does not exist');
  });

  // describe('getTimelineForComponent', () => {
  it('should try to get a transitionOUT timeline by Component', function () {
    expect(component.transitionController.getTimeline(component, TransitionDirection.OUT)).to.be.a('object');
  });

  it('should try to get a transitionIN timeline by Component', function () {
    expect(component.transitionController.getTimeline(component, TransitionDirection.IN)).to.be.a('object');
  });

  it('should try to get a transition timeline by Element', function () {
    expect(component.transitionController.getTimeline(component.element)).to.be.a('object');
  });

});
