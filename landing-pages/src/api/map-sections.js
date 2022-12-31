export const mapSections = (sections = []) => {
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

export const mapSectionsTwoColumns = (section = {}) => {
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
export const mapSectionsContent = (section = {}) => {
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
export const mapTextGrid = (section = {}) => {
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
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;

      return {
        title,
        description,
      };
    }),
  };
};
export const mapImageGrid = (section = {}) => {
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
    grid: grid.map((img) => {
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
