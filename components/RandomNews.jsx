import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchEverything, selectEverythingData } from "../Redux/newSlice"; // Correct paths

//import { useRoute } from "@react-navigation/native"; // Import useRoute

const RandomNews = () => {
  const dispatch = useDispatch();
  const everythingData = useSelector(selectEverythingData);

  useEffect(() => {
    dispatch(fetchEverything());
  }, []);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.touch}
      onPress={() => navigation.navigate("NewsDetails", { article: item })}
    >
      <View style={styles.item}>
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
        <Text style={styles.author}>{item.author}</Text>

        <Text style={styles.textbold}>{item.title}</Text>
        <Text style={styles.date}>{item.publishedAt}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={everythingData}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.publishedAt}-${index}`}
      //  keyExtractor={(item) => item.id}
      vertical
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RandomNews;

const styles = StyleSheet.create({
  touch: {
    height: 200,

    marginTop: 10,
    position: "relative",
    paddingHorizontal: 10,
  },
  item: {
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: 370,
    height: 200,
    borderRadius: 10,
  },
  author: {
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    color: "white",
    left: 20,
  },
  textbold: {
    fontWeight: "bold",
    position: "absolute",
    top: 60,
    color: "white",
    fontSize: 16,
    width: "90%",
  },
  date: {
    marginTop: 5,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    color: "white",
    fontSize: 12,
    right: 20,
  },
});
