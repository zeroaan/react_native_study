import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from './Loading';

const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );
  };

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return <>{isLoading ? <Loading /> : null}</>;
};

export default App;
