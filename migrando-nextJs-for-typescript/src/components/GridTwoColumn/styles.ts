import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.sizes.large};

    @media ${theme.media.ltmedia} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.sizes.xxlarge};
    }

  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.ltmedia} {
      margin-bottom: ${theme.spacings.sizes.large};
    }
  `}
`;
export const ImageContainer = styled.div`
`;
export const image = styled.img`
 width: 100%;
`;
