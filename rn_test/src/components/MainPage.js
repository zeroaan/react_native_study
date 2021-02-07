import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button name={'로그인'} onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;
