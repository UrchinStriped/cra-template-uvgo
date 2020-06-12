import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';

describe('App component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should be rendered without errors', () => {
    expect(wrapper).toHaveLength(1);
  });
});
