import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function CustomButton({ handlerPress, buttonVal }) {
  const { height: screen_height } = useWindowDimensions();

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

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        buttonVal.value === 2 * screen_height
          ? withSpring(200)
          : withSpring(90),
      height:
        buttonVal.value === 2 * screen_height ? withSpring(80) : withSpring(90),
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        buttonVal.value === 2 * screen_height ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            buttonVal.value === 2 * screen_height
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        buttonVal.value === 2 * screen_height ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            buttonVal.value === 2 * screen_height
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={handlerPress}>
      <Animated.View
        style={[styles.container, animatedColor, buttonAnimationStyle]}
      >
        <View style={styles.textButtonView}>
          <Animated.Text style={[styles.textButton, textAnimationStyle]}>
            Get Started
          </Animated.Text>
        </View>
        <Animated.Image
          source={require("../assets/arrow-11-64.png")}
          style={[styles.imageData, arrowAnimationStyle]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    bottom: 110,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  imageData: {
    height: 30,
    width: 40,
  },

  textButtonView: {
    position: "absolute",
  },

  textButton: {
    color: "#EEEEEE",
    fontWeight: "bold",
    fontSize: 20,
  },
});
