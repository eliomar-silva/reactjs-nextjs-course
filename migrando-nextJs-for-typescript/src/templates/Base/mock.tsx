import linksMock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';
import { BaseProps } from '.';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Test de footer</p>',
} as BaseProps;
