import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.blueView} />
        <View style={styles.greenView} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  greenView: {
    flex: 2,
    backgroundColor: 'green',
  },
});

export default App;
