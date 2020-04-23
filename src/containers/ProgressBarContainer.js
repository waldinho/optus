import React, { Component } from 'react';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';
import Loader from 'react-loader-spinner'

import { getData } from '../api/getData';
import * as style from '../styleVars/variables.js';

const Container = styled.div `
    margin: 3rem 0 2rem 0;
    text-align: center;
    h2 {
        line-height: 0rem;
    }
    button {
        ${style.button}
        font-family: ${style.font};
        &:hover {
            background: ${style.yellow};
            color: ${style.black};
        }
        &:nth-child(4) {
            margin: 0;
        }
    }
    input, select {
        ${style.input}
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
    select {
        ${style.hideArrow}
    }
`;

const Controls = styled.div `
    margin: 2rem 0 0 0;
`;

class ProgressBarContainer extends Component {
    state = {
        bars: [0],
        buttons: [0],
        limit: 0,
        selected: 0,
        loading: true,
        error: false,
    }
    componentDidMount() {
        getData()
        .then((response) => {
            this.setState({
                bars: response.bars,
                buttons: response.buttons,
                limit: response.limit,
                loading: false,

            })
        })
        .catch(() => {
            this.setState({
                error: true,

            })
            console.log('ERROR: Unsuccessful API call...')
        })
    }
    render() {
    const {
        bars,
        buttons,
        limit,
        selected,
        loading,
    } = this.state
    const handleClick = (index, selected) => {
        let temp = [];
        temp = temp.concat(bars);
        temp.map((item, i) => {
            if (i === selected) {
                temp.splice(selected, 1, item + index);
            }
            if (item < 0) {
                temp.splice(selected, 1, 0);
            }
        });
        this.setState({
            bars: temp,
        }, () => {
            if (temp[selected] < 0) {
                temp.splice(selected, 1, 0);
            };
        })
    };
    return (
        <Container>
            {!loading ?
                <>
                <h2>Limit: {limit}</h2>
                <ProgressBar 
                    bars={bars}
                    limit={limit}
                />
                <Controls>
                    {buttons.map((item, i) => {
                        const firstCharacter = item.toString().charAt(0);
                        const itemPercentage = firstCharacter === '-' ? (item / (limit / 100)).toFixed(0) : `+${(item / (limit / 100)).toFixed(0)}`
                        return (
                            <button onClick={() => {handleClick(item, selected)}} key={i}>
                                {itemPercentage}%
                            </button>
                        )
                    }
                    )}
                    <select onChange={e => {
                        this.setState({
                            selected: parseInt(e.target.value),
                        })
                    }}>
                        {bars.map((item, i) => (
                            <option value={i} key={i}>Progress #{i + 1}</option>
                        ))}
                    </select>
                </Controls>
                </>
            : <Loader
                type="Oval"
                color="#00a3ad"
                height={80}
                width={80}
                timeout={1000}
            />
        }
        </Container>
    )}
}

export default ProgressBarContainer;