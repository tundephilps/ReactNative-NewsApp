import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Results from "../components/Results";
import Tabs2 from "../components/Tabs2";
import { useNavigation } from "@react-navigation/native";
import RandomNews from "../components/RandomNews";

const Filter = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View
          // style={styles.search}
          >
            <TextInput
              placeholder="Search"
              placeholderTextColor="#9695b0"
              style={styles.searchInput}
            />
            <View style={styles.searchFloating}>
              <Pressable>
                <View>
                  <Feather name="search" size={20} color="white" />
                </View>
              </Pressable>
            </View>
          </View>

          <Pressable>
            <View style={styles.searchButton}>
              <Feather color="white" name="bell" size={24} />
            </View>
          </Pressable>
        </View>
      </View>

      <Tabs2 />

      <Results />
      <RandomNews />
    </SafeAreaView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  top: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  greeting: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.15)",
    marginBottom: 12,
  },
  greetingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a2525",
  },
  greetingText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1a2525",
    marginTop: 8,
  },
  searchInput: {
    height: 56,
    backgroundColor: "#f3f3f6",
    paddingHorizontal: 16,
    color: "#1a2525",
    fontSize: 18,
    borderRadius: 9999,
    width: 300,
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
});
