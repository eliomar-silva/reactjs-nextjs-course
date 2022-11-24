import { useEffect, useRef, useState } from 'react';

const isObjEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }
    if (!isObjEqual(options, optionRef.current)) {
      optionRef.current = options;
      changed = true;
    }

    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    // console.log('Effect', new Date().toLocaleString());
    // console.log(optionRef.current.Headers);

    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000));

      try {
        const response = await fetch(urlRef.current, optionRef.current);
        const jsonResult = await response.json();

        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          setLoading(false);
        }
        throw e;
      }
    };

    fetchData();
    return () => {
      wait = true;
    };
  }, [shouldLoad]);

  return [result, loading];
};

function App() {
  const [postId, setPostId] = useState('');

  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      Headers: {
        abc: '1' + postId,
      },
    },
  );

  if (loading) {
    return <p>Loading ...</p>;
  }

  const handlerClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={`post_${p.id}`} onClick={() => handlerClick(p.id)}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handlerClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
}

export default App;
