import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/resume.css';

// import withRedux from 'next-redux-wrapper'; // this replaces all calls to it in containers
// import App from 'next/app';
import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from '../reducers';

const store = createStore(allReducers);

export default function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  ); 
}

// export default withRedux(createStore, { debug: shouldShowDebugLogs })(class MyApp extends App {

//   render() {
//     const { Component, pageProps, store } = this.props;
//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
  
// });