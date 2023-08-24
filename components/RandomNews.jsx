import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchEverything, selectEverythingData } from "../Redux/newSlice"; // Correct paths

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
      vertical
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RandomNews;

const styles = StyleSheet.create({
  touch: {
    height: 150,
    marginTop: 6,
    position: "relative",
    paddingHorizontal: 8,
  },
  item: {
    alignItems: "center",
    position: "relative",
    gap: 8,
  },
  image: {
    width: "100%",
    height: 150,
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
