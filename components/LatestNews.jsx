import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
//import { fetchTopHeadlines, selectTopHeadlinesData } from "../Redux/newSlice"; // Correct paths

import { fetchTopHeadlines, selectTopHeadlinesData } from "../Redux/newSlice"; // Correct paths

const LatestNews = () => {
  const dispatch = useDispatch();
  const topHeadlinesData = useSelector(selectTopHeadlinesData);
  useEffect(() => {
    dispatch(fetchTopHeadlines());
  }, []);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.touch}
      onPress={() => navigation.navigate("NewsDetails", { article: item })}
      //  onPress={() => navigation.navigate("NewsDetails")}
    >
      <View style={styles.item}>
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
        <Text style={styles.author}>by {item.author}</Text>

        <Text style={styles.textbold}>{item.title}</Text>
        <Text style={styles.textsmall}>{item.description}</Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={topHeadlinesData}
      keyExtractor={(item, index) => `${item.publishedAt}-${index}`}
      //  keyExtractor={(item) => item.publishedAt}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default LatestNews;

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
    width: 320,
    height: 200,
    borderRadius: 10,
  },
  author: {
    fontWeight: "bold",
    position: "absolute",
    top: 30,
    color: "white",
    left: 30,
    fontSize: 10,
  },
  textbold: {
    fontWeight: "bold",
    position: "absolute",
    top: 60,
    color: "white",
    fontSize: 14,
    width: "80%",
  },
  textsmall: {
    marginTop: 5,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    color: "white",
    fontSize: 10,
    width: "80%",
  },
});
