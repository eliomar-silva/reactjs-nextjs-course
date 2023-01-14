/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../config';
import { mapData } from './map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug
    ? `filters[slug]=${slug.replace(/[^a-z0-9-_]/gi, '')}`
    : '';
  const url = `${config.url}${cleanSlug}`;

  const raw = await fetch(url);
  const json = await raw.json();

  let { attributes }: any = {};
  if (json?.data?.length) {
    attributes = json.data[0].attributes;
  }
  const pageData = mapData([attributes]);
  const data = pageData;
  return data;
};
