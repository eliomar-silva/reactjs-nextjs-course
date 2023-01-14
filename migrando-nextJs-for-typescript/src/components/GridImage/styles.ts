import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacings.sizes.xhuge};
    };
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.sizes.large};

    @media ${theme.media.ltmedia} {
      grid-template-columns: 1fr));
    }
  `}
`;
export const GridElement = styled.div`
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  transition: all 300ms ease;
  &:hover{
    transform: scale(1.2) rotate(10deg);
  }
`;
