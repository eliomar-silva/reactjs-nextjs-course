import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: absolute ;
    bottom: 2rem;
    right: 2rem;
    background:${theme.colors.primaryColor};
    color:${theme.colors.white};
    position: fixed;
    width: 4rem;
    height: 4rem;
    display: flex;
    text-align: center;
    justify-content: center;
    opacity: 0.7;
  `}
`;
