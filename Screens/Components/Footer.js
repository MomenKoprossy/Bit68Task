import React from "react";
import { View, useWindowDimensions, Image } from "react-native";

import Button from "./Button";

const Footer = ({
  type,
  leftButtonPress = false,
  rightButtonPress = false,
}) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  if (type == 1) {
    return (
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          height: HEIGHT,
          alignItems: "center",
          paddingHorizontal: FOOTER_PADDING,
        }}
      >
        <View style={{ width: 45 }}></View>
        <Image source={require("../../assets/first.png")} />
        <Button type="right" onPress={rightButtonPress} />
      </View>
    );
  } else if (type == 2) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: HEIGHT,
          alignItems: "center",
          paddingHorizontal: FOOTER_PADDING,
        }}
      >
        <Button type="left" onPress={leftButtonPress} />
        <Image source={require("../../assets/mid.png")} />
        <Button type="right" onPress={rightButtonPress} />
      </View>
    );
  } else if (type == 3) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: HEIGHT,
          alignItems: "center",
          paddingHorizontal: FOOTER_PADDING,
        }}
      >
        <Button type="left" onPress={leftButtonPress} />
        <View style={{ width: 50 }} />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={require("../../assets/last.png")} />
        </View>
        <Button type="last" onPress={rightButtonPress} />
      </View>
    );
  }
};

export default Footer;
