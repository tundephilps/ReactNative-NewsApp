import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Results = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldItalicText}>
        <Text style={styles.bold}>about </Text>
        <Text style={styles.italic}>11,000,000</Text>
        <Text style={styles.bold}> results for </Text>
        <Text style={styles.italic}>covid new variant</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boldItalicText: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
});

export default Results;
