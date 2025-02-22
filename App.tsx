/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {defaultStyle} from './src/styles/defaultStyles';

function App(): React.JSX.Element {
  return (
    <View style={[defaultStyle.container, defaultStyle.col]}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
