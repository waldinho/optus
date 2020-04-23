import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<Header /> with no props', () => {
    const container = shallow(<Header />);
    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
      expect(container.find('img').prop('src')).toEqual('https://1.cdn.optusdigital.com/content/dam/optus/images/about-us/media-centre/multimedia/logos/OPTUS_Yellow_sRGB_RELEASE_03_310316.png/renditions/version-1506405814053/original.png');
      expect(container.find('img').prop('alt')).toEqual('Optus');
      expect(container.find('img').prop('title')).toEqual('Optus');
      expect(container.find('img').prop('className')).toEqual('logo');
    })
})
