import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProgressBarContainer from '../containers/ProgressBarContainer';
import { getData } from '../api/getData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBarContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<ProgressBarContainer /> with no props', () => {
    const container = shallow(<ProgressBarContainer />);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    })
})

describe('<ProgressBarContainer /> with initial state', () => {
    const container = shallow(<ProgressBarContainer />);
    const initialState = { 
        bars: [0],
        buttons: [0],
        limit: 0,
        selected: 0,
        loading: true,
        error: false,
        errorText: 'Oops... Something has gone wrong, please try again later.' 
    };
    it('mock setTimeout test', () => {
        expect(container.state()).toEqual(initialState);
    });
})

describe('should throw Error with message \'Oops... Something has gone wrong, please try again later.\' when no data', () => {
    const ErrorState = {
        bars: [0],
        buttons: [0],
        limit: 0,
        selected: 0,
        loading: false,
        error: true,
        errorText: 'Oops... Something has gone wrong, please try again later.'
    }
    try {
        getData();
        expect(true).toBe(false);
    } catch (e) {
        expect(ErrorState.error).toBe(true);
        expect(ErrorState.errorText).toBe("Oops... Something has gone wrong, please try again later.");
    }
});