import React, { useLayoutEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Animated,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRoute } from "@react-navigation/native"; // Import useRoute

const SECTION_TOP_OFFSET = 200;
const SECTION_BORDER_RADIUS = 40;

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  author: string;
  content: string;
  source: {
    name: string;
  };
}

export default function NewsDetails() {
  const route = useRoute<any>(); // Get the route object
  const { article } = route.params; // Extract the article parameter

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const scrollY = useRef(new Animated.Value(0)).current;
  const animatedBackgroundScale = scrollY.interpolate({
    inputRange: [
      -SECTION_TOP_OFFSET - 100,
      -SECTION_TOP_OFFSET,
      0,
      SECTION_TOP_OFFSET,
      SECTION_TOP_OFFSET + 50,
      SECTION_TOP_OFFSET + 100,
    ],
    outputRange: [1.5, 1.05, 1.1, 1, 0, 0],
  });

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Animated.View
        style={{
          transform: [
            {
              scaleX: animatedBackgroundScale,
            },
            {
              scaleY: animatedBackgroundScale,
            },
          ],
        }}
      >
        <Pressable
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: "green",
            zIndex: 20,
            marginLeft: 50,
            marginTop: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <BlurView
            style={{
              borderRadius: 20,
              width: 35,
              height: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
            tint="light"
            intensity={500}
          >
            <Ionicons name="chevron-back" size={24} color="green" />
          </BlurView>
        </Pressable>
        <Image
          style={styles.backdrop}
          source={{ uri: article.urlToImage }}
          resizeMode="cover"
        />
      </Animated.View>
      <ScrollView
        style={styles.container}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={1}
      >
        <BlurView
          style={{
            borderRadius: 10,
            height: 150,
            width: "70%",
            margin: "auto",
            position: "absolute",
            top: 220,
            left: 55,
            zIndex: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
          tint="light"
          intensity={200}
        >
          <View>
            <Text style={{ fontSize: 9 }}>{article.publishedAt}</Text>
            <Text style={{ paddingBottom: 8, paddingTop: 8 }}>
              {article.title}
            </Text>
            <Text style={{ fontSize: 9 }}>Published by {article.author}</Text>
          </View>
        </BlurView>
        <View style={styles.content}>
          <ScrollView>
            <Text style={styles.text}>{article.content}</Text>
          </ScrollView>
          <View style={styles.stats}>
            <View style={styles.statsItem}>
              <Feather name="clock" color="#185aca" size={16} />
              <Text style={styles.statsItemText}>3 hours 32 minutes</Text>
            </View>
            <View style={styles.statsItem}>
              <Feather name="grid" color="#185aca" size={16} />
              <Text style={styles.statsItemText}>{article.source.name}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    zIndex: 2,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 400,
  },
  content: {
    flex: 1,
    marginTop: 300,
    backgroundColor: "white",
    borderTopLeftRadius: SECTION_BORDER_RADIUS,
    borderTopRightRadius: SECTION_BORDER_RADIUS,
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c2c2c",
  },
  headerBadge: {
    backgroundColor: "#0066ff",
    width: 46,
    height: 46,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 16,
    fontSize: 15,
    fontWeight: "500",
    color: "#3c3c3c",
    lineHeight: 24,
  },
  stats: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statsItemText: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "600",
    color: "#185aca",
  },
  lessonsOverlay: {
    backgroundColor: "#d3e0fe",
  },
  lessons: {
    backgroundColor: "white",
    borderTopLeftRadius: SECTION_BORDER_RADIUS,
    borderTopRightRadius: SECTION_BORDER_RADIUS,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  lessonsTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "#2c2c2c",
    marginBottom: 12,
  },
  card: {
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardIcon: {
    fontSize: 17,
    fontWeight: "700",
    color: "#185aca",
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#2c2c2c",
    marginBottom: 4,
  },
  cardDuration: {
    fontSize: 13,
    fontWeight: "500",
    color: "#94b1f0",
  },
  cardAction: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a4c2f5",
  },
});
