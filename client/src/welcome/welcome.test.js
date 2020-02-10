import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import Welcome from './welcome';
import Login from './login';

it('Test to see if it reroute to Login correctly', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/Login']}>
      <Welcome />
    </MemoryRouter>
  );
  expect(wrapper.find(Login));
});
