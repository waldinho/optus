import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ProgressBar from '../components/ProgressBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const bars = [{
    0: 85,
    1: 65,
    2: 39
}];

const limit = 100;

describe('<ProgressBar /> with props', () => {
  const container = shallow(
      <ProgressBar 
        bars={bars}
        limit={limit}
      />
  );
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  })
})
