import Article from "./component/Article";

function App(){
  return (
    <div>
      <Article
        title={'新・日本一わかりやすいReact入門基礎編4'}
        content={'今日のトピックスはpropsについて'}
      />
      <Article
        title={'新・日本一わかりやすいReact入門基礎編5'}
        content={'今日のトピックスはuseStateの受け渡しについて'}
      />
      <Article
        title={'新・日本一わかりやすいReact入門基礎編6'}
        content={'今日のトピックスはuseEffectについて'}
      />
    </div>
  );
}

export default App;