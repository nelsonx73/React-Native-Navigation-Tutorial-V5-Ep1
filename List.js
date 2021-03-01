import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import MarketingSlider from "./MarketingSlider";
import { DATA } from "./Travel";

export default function List() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MarketingSlider />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        {DATA.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{ padding: SPACING }}
              onPress={() => {}}
            >
              <Icon uri={item.imageUri} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
