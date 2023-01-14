import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridTextElementProps = {
  title: string;
  description: string;
};

export type GridTextProps = {
  title: string;
  description: string;
  sectionId?: string;
  component?: string;
  grid: GridTextElementProps[];
  background?: boolean;
};

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridTextProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el, index) => (
            <Styled.GridElement key={`${el.title}-${index}`}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
