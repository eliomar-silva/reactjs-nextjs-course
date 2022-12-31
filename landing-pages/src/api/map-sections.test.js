import {
  mapImageGrid,
  mapSections,
  mapSectionsContent,
  mapSectionsTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData.data[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withoutTextEndImg = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const noComponent = mapSections([{}]);

    expect(withoutTextEndImg).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);
    expect(noComponent).toEqual([{}]);
  });

  it('should render sections when grid image for empty', () => {
    const data = mapSections(pagesFakeData.data[0].attributes.sections);
    expect(data[3].component).toBe('section.section-grid-image');
  });
  it('should test with no text', () => {
    const data = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(data.length).toBe(1);
  });

  it('should map section two columns if data is empty', () => {
    const data = mapSectionsTwoColumns();
    expect(data.background).toBe(false);
    expect(data.title).toBe('');
    expect(data.component).toBe('');
    expect(data.text).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
  });
  it('should map section two columns', () => {
    const data = mapSectionsTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      image: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
      metadata: {
        section_id: 'home',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content with no data', () => {
    const section = mapSectionsContent();
    expect(section.background).toBe(false);
    expect(section.title).toBe('');
    expect(section.component).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.html).toBe('');
  });
  it('should map section content', () => {
    const section = mapSectionsContent({
      __component: 'section.section-content',
      title: 'title',
      content: 'abc',
      metadata: {
        section_id: 'intro',
        background: false,
      },
    });

    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-content');
    expect(section.sectionId).toBe('intro');
    expect(section.title).toBe('title');
    expect(section.html).toBe('abc');
  });
  it('should map grid text', () => {
    const section = mapTextGrid({
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'description',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'abc',
        },
        {
          title: 'Teste 2',
          description: 'Lorem ',
        },
      ],
      image_grid: [],
      metadata: {
        section_id: 'grid-one',
        background: true,
      },
    });

    expect(section.background).toBe(true);
    expect(section.component).toBe('section.section-grid-text');
    expect(section.sectionId).toBe('grid-one');
    expect(section.title).toBe('MY GRID');
    expect(section.description).toBe('description');
    expect(section.grid[0].title).toBe('Teste 1');
    expect(section.grid[0].description).toBe('abc');
  });
  it('should map grid text if data is empty', () => {
    const section = mapTextGrid(undefined);

    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-grid-text');
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
  });
  it('should map grid image if data is empty', () => {
    const section = mapImageGrid(undefined);
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-grid-image');
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
  });
  it('should map grid image with data', () => {
    const section = mapImageGrid({
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'teste',
      text_grid: [],
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  alternativeText: 'abc',
                  url: 'a.svg',
                },
              },
            ],
          },
        },
      ],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(section.background).toBe(true);
    expect(section.component).toBe('section.section-grid-image');
    expect(section.sectionId).toBe('grid-one');
    expect(section.title).toBe('MY GRID');
    expect(section.description).toBe('teste');
    expect(section.grid[0].srcImg).toBe('a.svg');
    expect(section.grid[0].altText).toBe('abc');
  });
});
