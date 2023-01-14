import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleColor = (colorDark, theme) => css`
color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
`;

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.ltmedia}{
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<
  Pick<HeadingProps, 'colorDark' | 'size' | 'uppercase'>
>`
  ${({ theme, colorDark, size, uppercase }) => css`
    ${titleColor(colorDark, theme)};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
