import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import { slides } from '../data/slides';
import OnBoardingItem from './OnBoardingItem';
import SvgUri from 'expo-svg-uri';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        bounces={false}
        key={(item) => item.id}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
