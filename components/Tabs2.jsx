import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";
import { Feather } from "@expo/vector-icons";

const tabs = [
  { name: "Filter", icon: "filter" },
  { name: "Health" },
  { name: "Technology" },
  { name: "Finance" },
  { name: "Art" },
  { name: "Sports" },
];

const Tabs2 = () => {
  const [value, setValue] = useState(0);
  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const renderItem = ({ item, index }) => {
    const isActive = index === value;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (index === 0) {
            openBottomSheet();
          } else {
            setValue(index);
          }
        }}
      >
        <View style={[styles.item, isActive && { backgroundColor: "#ff3a44" }]}>
          {item.icon && (
            <Feather
              name={item.icon}
              size={18}
              color={isActive ? "white" : "#6b7280"}
              style={styles.icon}
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

      <BottomSheet
        ref={bottomSheetRef}
        animationType="slide"
        closeOnDragDown={true}
      >
        <View style={styles.bottomSheetContent}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: 500, fontSize: 30 }}>Filter</Text>
            <View>
              <View style={styles.btnXS}>
                <Feather
                  name="trash"
                  color="black"
                  size={13}
                  style={{ marginRight: 12 }}
                />

                <Text style={styles.btnXSText}>Reset</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ color: "black", marginTop: 20 }}>Sort By</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btnXS}>
                <Text style={styles.btnXSText}>Recommended</Text>
              </View>
            </TouchableOpacity>{" "}
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btnXS}>
                <Text style={styles.btnXSText}>Latest</Text>
              </View>
            </TouchableOpacity>{" "}
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btnXS}>
                <Text style={styles.btnXSText}>Most Viewed</Text>
              </View>
            </TouchableOpacity>{" "}
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btnXS}>
                <Text style={styles.btnXSText}>Channel</Text>
              </View>
            </TouchableOpacity>{" "}
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btnXS}>
                <Text style={styles.btnXSText}>Following</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 30, margin: "auto" }}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.btnXL}>
              <Text style={styles.btnXLText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Tabs2;

const styles = StyleSheet.create({
  btnXL: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: 12,
    width: 350,
    borderWidth: 1,
    backgroundColor: "#ff3a44",
  },
  btnXLText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    color: "#fff",
  },
  btnXS: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,

    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#d1d5db",
  },
  btnXSText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    color: "black",
  },
  container: {
    backgroundColor: "white",
    paddingVertical: 24,
  },
  item: {
    flexDirection: "row",
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
  bottomSheetContent: {
    padding: 10,
  },
});
