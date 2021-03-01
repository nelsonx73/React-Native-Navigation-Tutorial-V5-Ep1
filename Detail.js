import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import BackIcon from "./BackIcon";
import Icon from "./Icon";
import { DATA } from "./Travel";
import { SPACING, ICON_SIZE, width } from "theme";

export default function Detail() {
  const item = DATA[0];
  const ref = React.useRef();
  const selectedItemIndex = DATA.findIndex((i) => i.id === item.id);

  function renderItem({ item, index }) {
    return (
      <ScrollView
        style={{
          width: width - SPACING * 2,
          margin: SPACING,
          backgroundColor: "rgba(0,0,0,0.05)",
          borderRadius: 16,
        }}
      >
        <View>
          <Text></Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackIcon onPress={() => {}} />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          marginVertical: 20,
        }}
      >
        {DATA.map((item) => {
          return (
            <TouchableOpacity key={item.id} style={{ padding: SPACING }}>
              <Icon uri={item.imageUri} />
            </TouchableOpacity>
          );
        })}
      </View>
      <FlatList
        ref={ref}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        paddingEnabled
        initialScrollIndex={selectedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
