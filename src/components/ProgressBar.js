import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as style from '../styleVars/variables.js';

const Track = styled.div `
    ${style.width}
    height: 40px;
    background: ${style.yellow};
    border: 2px solid ${style.black};
`;

const Thumb = styled.div `
    width: ${props => props.percentage}%;
    max-width: 300px;
    height: 100%;
    background: ${props => props.limitColor};
    transition: width 0.3s ease-in-out;
`

const Percentage = styled.div `
    ${style.center}
    ${style.width}
    p {
        ${style.paragraph}
        font-weight: bold;
    }
`

const ProgressBar = ({bars, limit}) => {
    return (
        bars.map((item, i) => {
            const barPercentage = item < 0 ? 0 : item;
            const barPercentageLimit = barPercentage / (limit / 100);
            const limitColor = barPercentageLimit >= 100 ? `${style.red}` : `${style.green}`;
            return (
                <div key={i}>
                    <Percentage>
                        <p aria-label={`${barPercentageLimit.toFixed(0)}%`}>{barPercentageLimit.toFixed(0)}%</p>
                    </Percentage>
                    <Track>
                        <Thumb
                            percentage={barPercentageLimit}
                            limitColor={limitColor}
                        />
                    </Track>
                </div>
            )
        })
    )
}

ProgressBar.propTypes = {
    bars: PropTypes.array,
    limit: PropTypes.number.isRequired, 
}

ProgressBar.defaultProps = {
    bars: [],
    limit: 0, 
}

export default ProgressBar;