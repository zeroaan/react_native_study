import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import MainPage from '~/components/MainPage';
import LoginPage from '~/components/LoginPage';
import RegisterPage from '~/components/RegisterPage';

const Stack = createStackNavigator({
  Home: {
    screen: MainPage,
    navigationOptions: {
      header: null,
    },
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  /*
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

  return (
    <>
      {isLoading ? <Loading /> : null}
    </>
  );
  */
};

export default App;
