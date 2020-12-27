import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = ({ type, onPress }) => {
  if (type == "right") {
    return (
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={onPress}
      >
        <ImageBackground
          source={require("../../assets/smallrect.png")}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={require("../../assets/right.png")}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  } else if (type == "left") {
    return (
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={onPress}
      >
        <ImageBackground
          source={require("../../assets/smallrect.png")}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={require("../../assets/left.png")}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  } else if (type == "last") {
    return (
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={onPress}
      >
        <ImageBackground
          source={require("../../assets/bigrect.png")}
          style={{ width: 100, height: 50 }}
          resizeMode="contain"
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "white" }}>Get Started</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
};

export default Button;
