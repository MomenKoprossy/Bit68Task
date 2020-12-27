import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ menu = false, title = "", titleColor = "white" }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Pressable
        style={{ position: "absolute", left: 5 }}
        onPress={
          menu
            ? () => {}
            : () => {
                navigation.goBack();
              }
        }
      >
        <Image
          source={
            menu
              ? require("../../assets/menu.png")
              : titleColor == "white"
              ? require("../../assets/left.png")
              : require("../../assets/left2.png")
          }
        />
      </Pressable>
      <Text
        style={{
          fontFamily: "Poppins_300Light",
          color: titleColor,
          fontSize: 24,
        }}
      >
        {title}
      </Text>
      <Pressable
        style={{ position: "absolute", right: 5 }}
        onPress={() => {
          console.log("sup");
        }}
      >
        <Image
          source={
            titleColor == "white"
              ? require("../../assets/cart2.png")
              : require("../../assets/cart.png")
          }
        />
      </Pressable>
      <Pressable style={{ position: "absolute", right: 40 }}>
        <Image
          source={
            titleColor == "white"
              ? require("../../assets/search2.png")
              : require("../../assets/search.png")
          }
        />
      </Pressable>
    </View>
  );
};

export default Header;
