import React from "react";
import { View, Text, Image } from "react-native";

const Page = ({ img, title, text }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={img}/>
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          marginTop: "20%",
          textAlign: "left",
          //fontWeight: "500",
          fontSize: 30,
          color: "#2E2E2E",
          lineHeight: 46,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          marginHorizontal: 50,
          marginTop: 20,
          //fontWeight: "400",
          fontSize: 15,
          color: "#2E2E2E",
          lineHeight: 23,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Page;
