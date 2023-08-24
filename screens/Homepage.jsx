import React, { useLayoutEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Explore from "../components/Explore";
import Tabs from "../components/Tabs";

import { useNavigation } from "@react-navigation/native";
import BottomNavigator from "../components/BottomNavigator";
import LatestNews from "../components/LatestNews";
import RandomNews from "../components/RandomNews";
import { StatusBar } from "expo-status-bar";

const Homepage = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="white" />
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={{ width: "70%" }}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#9695b0"
              style={styles.searchInput}
            />
            <View style={styles.searchFloating}>
              <TouchableOpacity>
                <View>
                  <Feather name="search" size={20} color="gray" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("HotUpdates")}>
            <View style={styles.searchButton}>
              <Feather color="white" name="bell" size={24} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/*Explore*/}
      <Explore />
      <View>
        <LatestNews />
      </View>
      <Tabs />
      <BottomNavigator />
      <RandomNews />
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: 22,
    //paddingHorizontal: 8,
  },
  top: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  searchInput: {
    height: 56,
    backgroundColor: "#f3f3f6",
    paddingHorizontal: 16,
    color: "#1a2525",
    fontSize: 18,
    borderRadius: 9999,
    maxWidth: 400,
  },
  searchFloating: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  searchButton: {
    alignSelf: "center",
    width: 44,
    height: 44,
    borderRadius: 9999,
    backgroundColor: "#ff3a44",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 22,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1a2525",
  },
  contentLink: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a2525",
  },
  contentPlaceholder: {
    borderStyle: "dashed",
    borderWidth: 4,
    borderColor: "#e5e7eb",
    flex: 1,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerImg: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
});
