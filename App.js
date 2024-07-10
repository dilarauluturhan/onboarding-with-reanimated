import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import data from "./data/data";
import RenderItem from "./components/RenderItem";
import CustomButton from "./components/CustomButton";
import { useSharedValue, withTiming } from "react-native-reanimated";
import Pagination from "./components/Pagination";

export default function App() {
  const { height: screen_height } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonVal = useSharedValue(0);

  const handlerPress = () => {
    if (currentIndex === data.length - 1) {
      console.log("Enddd");
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    buttonVal.value = withTiming(buttonVal.value + screen_height);
  };

  return (
    <View style={styles.container}>
      <View>
        {data.map((item, i) => {
          return currentIndex === i && <RenderItem item={item} key={i} />;
        })}
      </View>

      <CustomButton handlerPress={handlerPress} buttonVal={buttonVal} />
      <Pagination data={data} buttonVal={buttonVal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
