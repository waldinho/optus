import React from 'react';
import styled from 'styled-components';

import * as style from '../styleVars/variables.js';

const Header = () => (
    <Heading>
        <img className='logo' src='https://1.cdn.optusdigital.com/content/dam/optus/images/about-us/media-centre/multimedia/logos/OPTUS_Yellow_sRGB_RELEASE_03_310316.png/renditions/version-1506405814053/original.png' alt='Optus' title='Optus'/>
    </Heading>
) 

const Heading = styled.div`
    background-color: ${style.black};
    min-height: 6vh;
    ${style.column}
    align-items: center;
    justify-content: center;
    font-size: calc(${style.sm} + 2vmin);
    color: ${style.yellow};
    min-width: 335px;
    position: fixed;
    top: 0;
    width: -webkit-fill-available;
    z-index: 2;
    border-bottom: 1px solid ${style.black};
    .logo {
        width: 80px;
    }
`

export default Header