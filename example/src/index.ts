// import initComponents from 'muban-core/lib/utils/initComponents';
import sortby from 'lodash/sortby';
import DummyFoo from './component/block/DummyFoo/DummyFoo';
import App from './App';
import { setComponentInstance } from 'muban-core/lib/utils/componentStore';
import DummyFooPopup from './component/DummyFooPopup/DummyFooPopup';
import PrimaryButton from './component/button/PrimaryButton/PrimaryButton';

const componentList = [
  App,
  DummyFoo,
  DummyFooPopup,
  PrimaryButton,
];

function getComponentDepth(element) {
  let depth = 0;
  let el = element;

  while (el.parentElement) {
    ++depth;
    el = el.parentElement;
  }

  return depth;
}

function initComponents(rootElement) {
  const list = [];

  componentList.forEach((component) => {
    const BlockConstructor = component;
    const displayName = BlockConstructor.displayName;

    if (rootElement.getAttribute('data-component') === displayName) {
      list.push({
        component: component,
        element: rootElement,
        depth: getComponentDepth(rootElement)
      });
    } // find all DOM elements that belong the this block

    Array.from(rootElement.querySelectorAll(`[data-component="${displayName}"]`)).forEach((element) => {
      list.push({
        component: component,
        element: element,
        depth: getComponentDepth(element)
      });
    });
  });

  // sort list by deepest element first
  // this will make sure that child components are constructed
  // before any parents, allowing the parents to directly reference them
  const sortedList = sortby(list, ['depth']).reverse();
  const newInstances = []; // create all corresponding classes

  sortedList.forEach((_ref) => {
    const component = _ref.component,
      element = _ref.element;
    const BlockConstructor = component;
    const displayName = BlockConstructor.displayName; // we don't want an error in one component to stop creating all
    // other components

    try {
      const instance = new BlockConstructor(element);
      setComponentInstance(displayName, {
        instance: instance,
        element: element
      });
      newInstances.push(instance);
    } catch (e) {
      // tslint:disable-next-line no-console
      console.error(e);
    }
  });
  newInstances.forEach(function (instance) {
    if (typeof instance.adopted === 'function') {
      instance.adopted();
    }
  });
}

const render = () => {
  const div = document.getElementById('app');
  initComponents(div);
};

document.addEventListener('DOMContentLoaded', () => {
  render();
});
