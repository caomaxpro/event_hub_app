import {
  ImageBackground,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
  View,
  ImageSourcePropType,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSettingContext} from '@src/context/SettingContext';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@src/utils/appInfo';

import Animated, {useAnimatedStyle} from 'react-native-reanimated';

type ScreenComponentProps = ViewProps & {
  children?: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  bgImage?: number | null;
  displayBackgroundImage?: boolean;
  extendContent?: boolean;
};

export default function CustomContainerComponent({
  children,
  customStyle,
  contentStyle,
  bgImage = null,
  displayBackgroundImage = false,
  extendContent = false,
  ...props
}: ScreenComponentProps) {
  const {state} = useSettingContext();
  const theme = state.theme;
  const backgroundImage = bgImage ?? theme.bgImage;

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      position: extendContent ? 'absolute' : 'static',
      height: extendContent ? SCREEN_HEIGHT : 'auto',
      top: 0,
    };
  });

  return (
    <Animated.View
      style={[
        styles.default_container,
        {borderColor: theme.textOnBG},
        customStyle,
        animatedContainerStyle,
      ]}
      {...props}>
      {displayBackgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={styles.background}
          resizeMode="cover">
          <View style={[styles.content, contentStyle]}>{children}</View>
        </ImageBackground>
      ) : (
        <View style={[styles.content, contentStyle]}>{children}</View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  default_container: {
    width: '100%',
    padding: 0,
    overflow: 'scroll',
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },

  background: {
    width: '100%',
    margin: 0,
  },

  content: {
    // paddingHorizontal: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
