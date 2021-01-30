import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>React Native Test1</Text>
        <Text>First RN App</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
