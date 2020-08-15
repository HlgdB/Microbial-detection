import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import NormalLoginForm from './Login/Login.js'
// import Post from './Post/post.js'
// import App from './App';
// import MainPage from './Main/main.js'
// import PageUpload from './Main/MainPage_Upload'
// import PageResult from './Main/MianPage_showResult/index.js'
// import PageTag from './Main/MainPage_SourceTag/PageTag.js'
// import PagePTagList from './Main/MainPublicTagList/index.js'
import PagePrTagList from './Main/MainPrivateTag/index.js'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    {/* <PagePrTagList/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
