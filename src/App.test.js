import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';
import Count from './count';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without error', () => {
  const wrapper = shallow(<App />);
   expect(wrapper.find("[data-test='component-app']").length).toEqual(1);
});

it('renders inc button', () => {
  const wrapper = shallow(<Count />);
   expect(wrapper.find("[data-test='inc-button']").length).toEqual(1);
});

it('renders decrement button', () => {
  const wrapper = shallow(<Count />);
   expect(wrapper.find("[data-test='dec-button']").length).toEqual(1);
});

it('displays counter', () => {
  const wrapper = shallow(<Count />);
   expect(wrapper.find("[data-test='counter-display']").length).toEqual(1);
});

it('initial state is 0', () => {
  const wrapper = shallow(<Count />)
  const initialState = wrapper.state('count');
  expect(initialState).toBe(0)
});
