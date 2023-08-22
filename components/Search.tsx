import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.searchbox}>
      <View
      //style={styles.search}
      >
        <TextInput
          placeholder="Search"
          placeholderTextColor="#9695b0"
          style={styles.searchInput}
        />
        <View style={styles.searchFloating}>
          <TouchableOpacity>
            <View style={styles.searchButton}>
              <Feather name="search" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}
      >
        <Feather color="#1a2525" name="bell" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchInput: {
    height: 56,
    backgroundColor: "#f3f3f6",
    paddingHorizontal: 16,
    color: "#1a2525",
    fontSize: 18,
    borderRadius: 9999,
    width: "60%",
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
    backgroundColor: "#5bd2bc",
    justifyContent: "center",
    alignItems: "center",
  },
});
