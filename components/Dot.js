import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function Dot({ index, buttonVal }) {
  const { height: screen_height } = useWindowDimensions();

  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      buttonVal.value,
      [
        (index - 1) * screen_height,
        index * screen_height,
        (index + 1) * screen_height,
      ],
      [10, 30, 10],
      Extrapolation.CLAMP
    );

    const opacityAnimation = interpolate(
      buttonVal.value,
      [
        (index - 1) * screen_height,
        index * screen_height,
        (index + 1) * screen_height,
      ],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      buttonVal.value,
      [0, screen_height, 2 * screen_height],
      ["#686D76", "#9DB2BF", "#31363F"]
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.dot, animatedColor, animatedDotStyle]} />
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
