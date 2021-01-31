import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(0, 153, 188)',
    paddingVertical: 100,
  },
  text: {
    color: 'rgb(230,230,230)',
    fontSize: 38,
  },
});

export default Loading;
