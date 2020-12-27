import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Image,
  useWindowDimensions,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Tab, TabView } from "react-native-easy-tabs";

const Shop = ({ route, Store }) => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const { category } = route.params;
  const items = Store.items[category].products;
  const [currentTab, setCurrentTab] = useState(0);

  const scene = () => <View></View>;

  return (
    <ImageBackground
      source={require("../assets/steak.png")}
      style={{ width: "100%", justifyContent: "space-evenly" }}
      imageStyle={{ height: "40%" }}
    >
      <View
        style={{
          marginTop: windowHeight / 2.5,
        }}
      >
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
              <ImageBackground
                source={{ uri: item.product_img }}
                style={{
                  flexDirection: "row",
                  width: windowWidth / 2.3,
                  height: windowHeight / 4,
                  marginTop: 10,
                  marginLeft: 10,
                }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View style={{ alignSelf: "flex-end", marginLeft: 10 }}>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Poppins_400Regular",
                      fontSize: 25,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    </ImageBackground>
  );
};

export default inject("Store")(observer(Shop));
