import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons"; // Import the Feather icon library

const tabs = [
  { name: "Filter", icon: "filter" },
  { name: "Health" },
  { name: "Technology" },
  { name: "Finance" },
  { name: "Art" },
  { name: "Sports" }, // Add the filter tab with an icon
];

const Tabs = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);

  const renderItem = ({ item, index }) => {
    const isActive = index === value;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setValue(index);
        }}
      >
        <View style={[styles.item, isActive && { backgroundColor: "#ff3a44" }]}>
          {item.icon && (
            <Feather
              name={item.icon}
              size={18}
              color={isActive ? "white" : "#6b7280"}
              style={styles.icon}
              onPress={() => navigation.navigate("Filter")}
            />
          )}
          <Text style={[styles.text, isActive && { color: "white" }]}>
            {item.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 24,
  },
  item: {
    flexDirection: "row", // Align icon and text horizontally
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    borderRadius: 30,
    marginHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6b7280",
  },
});
