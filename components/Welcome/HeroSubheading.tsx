import React from 'react';
import styled from 'styled-components';
import Colors from '../../theme/Colors';

export interface IHeroSubheading {}

const StyledH2 = styled.h2`
    font-size: 2em;
    width: 100%;
    text-align: left;
`;

const StyledSpan = styled.span`
    color: ${Colors.Green};
`;

const HeroSubheading: React.FC<IHeroSubheading> = () => {
    return (
        <StyledH2>
            Your go-to <StyledSpan>education</StyledSpan> platform
        </StyledH2>
    );
};

export default HeroSubheading;
