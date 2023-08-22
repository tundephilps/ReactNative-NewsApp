import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const BottomNavigator = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <View style={styles.stats}>
          <View style={styles.statsItem}>
            <Ionicons name="home-outline" size={24} color="#ff3a44" />
            <Text style={styles.statsItemValue}>Home</Text>
          </View>
          <View style={styles.statsItem}>
            <View style={styles.separator}></View>
            <Ionicons name="heart-outline" size={24} color="gray" />
            <Text style={styles.statsItemValue}>Favourite </Text>
          </View>
          <View style={styles.statsItem}>
            <FontAwesome name="smile-o" size={24} color="gray" />
            <Text style={styles.statsItemValue}>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 40,
    zIndex: 10,
    left: "10%",
  },
  stats: {
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    shadowColor: "#90a0ca",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 1,
    gap: 60,
  },
  statsItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: "rgba(189, 189, 189, 0.32)",
  },
  statsItemValue: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 20,
    color: "gray",
  },
  separator: {
    height: 6,
    width: 40,
    backgroundColor: "gray",
    position: "absolute",
    top: -17,
  },
});
