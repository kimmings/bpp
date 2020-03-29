import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  background-color: #3C3C3B;
  padding: 10px 30px;
`;

const Logo = styled.img.attrs({
  src: 'BPPLogo.png',
  alt: 'BPP logo'
})`
  height: 30px;
`;

export default () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}
