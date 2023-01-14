import P from 'prop-types';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Index({ data = [] }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  // const raw = await fetch(config.url);

  // const json = await raw.json();
  // const { attributes } = json.data[0];
  // const data = mapData([attributes]);

  let data;

  try {
    data = await loadPages('landing-pages');
  } catch (e) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
