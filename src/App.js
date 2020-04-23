import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ProgressBarContainer from './containers/ProgressBarContainer';

const AppWrapper = styled.div `
  display: flex;
  justify-content: center;
`
const ProgressBarWrapper = styled.div `
  width: 300px;
  margin-top 3rem;
`

const App = () => {
  return (
    <>
      <AppWrapper>
        <Header />
        <ProgressBarWrapper>
          <ProgressBarContainer />
        </ProgressBarWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
