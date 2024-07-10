import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";

export default function RenderItem({ item }) {
  const { width: screen_width, height: screen_height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: screen_width,
          height: screen_height,
          backgroundColor: item.backgroundColor,
        },
      ]}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text
        style={[
          styles.itemText,
          {
            color: item.textColor,
          },
        ]}
      >
        {item.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },

  itemImage: {
    height: 400,
    width: 400,
  },

  itemText: {
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
    marginHorizontal: 20
  }
});
