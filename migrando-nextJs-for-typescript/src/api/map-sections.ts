/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridContentProps } from '../components/GridContent';
import { GridImageElementProps, GridImageProps } from '../components/GridImage';
import { GridTextElementProps, GridTextProps } from '../components/GridText';
import { GridTwoColumnProps } from '../components/GridTwoColumn';
import { SectionProps } from '../templates/Home';

export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionsTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionsContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
    return section;
  });
};

export const mapSectionsTwoColumns = (
  section = {} as any,
): GridTwoColumnProps => {
  const {
    __component: component = '',
    description: text = '',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  const srcImg = section?.image?.data?.attributes?.url || '';
  return {
    component,
    title,
    text,
    sectionId,
    background,
    srcImg,
  };
};
export const mapSectionsContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    content: html = '',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    sectionId,
    background,
  };
};
export const mapTextGrid = (section = {} as any): GridTextProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text: any): GridTextElementProps => {
      const { title = '', description = '' } = text;

      return {
        title,
        description,
      };
    }),
  };
};
export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img: any): GridImageElementProps => {
      const data = img.image.data[0] || {};
      const {
        attributes: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = data;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
