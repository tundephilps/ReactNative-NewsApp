import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Explore = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 8,
        paddingBottom: 8,
      }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 20,
          display: "flex",
          alignItems: "flex-start",
          fontWeight: "600",
        }}
      >
        Latest News
      </Text>
      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
        onPress={() => navigation.navigate("HotUpdates")}
      >
        <Text style={{ color: "blue" }}>See all</Text>
        <FontAwesome name="long-arrow-right" size={24} color="blue" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Explore;
