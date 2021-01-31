import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import * as Location from 'expo-location';

import Loading from './Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        await Location.requestPermissionsAsync();
        const {
          coords: {latitude, longitude},
        } = await Location.getCurrentPositionAsync();
        setIsLoading(false);
      } catch (error) {
        Alert.alert("Can't find you.", 'So sad');
      }
    };
    getLocation();
  }, []);

  return <>{isLoading ? <Loading /> : null}</>;
};

export default App;
