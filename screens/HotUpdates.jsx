import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchTopHeadlines, selectTopHeadlinesData } from "../Redux/newSlice";

const HotUpdates = () => {
  const dispatch = useDispatch();
  const topHeadlinesData = useSelector(selectTopHeadlinesData);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchTopHeadlines());
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("NewsDetails", { article: item })}
    >
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Image
            alt=""
            style={styles.cardImg}
            source={{ uri: item.urlToImage }}
            resizeMode="cover"
          />
        </View>

        <View style={styles.cardBody}>
          <Text style={{ fontSize: 10, paddingBottom: 8 }}>
            {item.publishedAt}
          </Text>
          <Text style={{ fontSize: 14, paddingBottom: 8 }}>{item.title}</Text>

          <Text style={{ fontSize: 12, paddingBottom: 8 }}>
            {item.description}
          </Text>

          <Text style={{ fontSize: 10, paddingBottom: 8 }}>
            Published by{item.author}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
          <FlatList
            data={topHeadlinesData}
            keyExtractor={(item, index) => `${item.publishedAt}-${index}`}
            //  keyExtractor={(item) => item.publishedAt}
            renderItem={renderItem}
            vertical
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HotUpdates;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  card: {
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: 24,
    elevation: 4,
  },
  cardTop: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardImg: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardBody: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#2d2d2d",
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444",
  },
  cardStats: {
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: -12,
  },
  cardStatsItem: {
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  cardStatsItemText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#48496c",
    marginLeft: 4,
  },
  cardFooter: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: "#e9e9e9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardFooterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#909090",
  },
});
