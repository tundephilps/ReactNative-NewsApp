import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const BottomSheet: React.FC = () => {
  return (
    <View
      style={{
        display: "flex",
        paddingHorizontal: 1,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "black", fontSize: 40 }}>Filter</Text>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
        >
          <View style={styles.btnXS}>
            <Feather
              color="#fff"
              name="upload"
              size={13}
              style={{ marginRight: 12 }}
            />
            <Feather
              name="trash"
              color="black"
              size={13}
              style={{ marginRight: 12 }}
            />

            <Text style={styles.btnXSText}>Upload File</Text>
          </View>
          <View></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnXS: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    backgroundColor: "#0569FF",
    borderColor: "#0569FF",
  },
  btnXSText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default BottomSheet;
