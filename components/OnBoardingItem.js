import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import SvgUri from 'expo-svg-uri';

const OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <SvgUri
        width={width - 100}
        height={width - 100}
        source={item.image}
        style={[styles.image]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
