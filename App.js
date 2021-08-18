import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import SplashScreen from  "react-native-splash-screen";

import { Provider } from 'react-redux';
import Store from './Src/config/store';

import AppNavContainer from './Src/navigations';

const App = () =>{

  useEffect (() => {
    SplashScreen.hide();
  }, [])
  
  return (
      <Provider store={Store}>
        <AppNavContainer></AppNavContainer>
      </Provider>
  );
  
};

export default App;
