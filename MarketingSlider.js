import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function MarketingSlider() {
  function renderItem({ item, index }) {
    return (
      <View style={[styles.container, { backgroundColor: item.color }]}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
      horizontal
      snapToInterval={ITEM_WIDTH * SPACING * 2}
      contentContainerStyle={{ paddingRight: width - ITEM_WIDTH - SPACING * 2 }}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({});
