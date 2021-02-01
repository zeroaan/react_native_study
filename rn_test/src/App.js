import React from 'react';

import Loading from '~/components/Loading';

const App = () => {
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
  return <Loading />;
};

export default App;
