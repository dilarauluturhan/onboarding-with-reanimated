import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Dot from "./Dot";

export default function Pagination({ data, buttonVal }) {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <Dot index={index} buttonVal={buttonVal} key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    position: "absolute",
    bottom: 80,
    flexDirection: "row",
  },
});
