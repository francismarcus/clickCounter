import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';
import Count from './count';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const Attr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

it('renders without error', () => {
  const wrapper = shallow(<App />);
   expect(Attr(wrapper, 'component-app').length).toEqual(1);
});

it('renders inc button', () => {
  const wrapper = shallow(<Count />);
   expect(Attr(wrapper, 'inc-button').length).toEqual(1);
});

it('renders decrement button', () => {
  const wrapper = shallow(<Count />);
   expect(Attr(wrapper, 'dec-button').length).toEqual(1);
});

it('displays counter', () => {
  const wrapper = shallow(<Count />);
   expect(Attr(wrapper, 'counter-display').length).toEqual(1);
});

it('initial state is 0', () => {
  const wrapper = shallow(<Count />)
  const initialState = wrapper.state('count');
  expect(initialState).toBe(0)
});
