import React from 'react';
import styled from 'styled-components';
import Colors from '../../theme/Colors';

export interface IHeroTitleProps {}

const StyledH1 = styled.h1`
    font-size: 4em;
    width: 100%;
    text-align: left;
    line-height: 1.2em;
`;

const StyledSpan = styled.span`
    color: ${Colors.Green};
`;

const HeroTitle: React.FC<IHeroTitleProps> = () => {
    return (
        <StyledH1>
            Welcome <br />
            to <StyledSpan>mindle</StyledSpan>.
        </StyledH1>
    );
};

export default HeroTitle;
