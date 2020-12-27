import React from "react";
import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import { inject, observer } from "mobx-react";

const Home = ({ Store }) => {
  const headerHeight = useHeaderHeight();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const navigation = useNavigation();

  return (
    Store.items[0] != undefined && (
      <View style={{ flex: 1, marginTop: headerHeight }}>
        <SliderBox
          images={[
            Store.items[0].category_img,
            Store.items[1].category_img,
            Store.items[2].category_img,
            Store.items[3].category_img,
          ]}
          sliderBoxHeight={220}
          dotColor="#D95500"
          inactiveDotColor="white"
          onCurrentImagePressed={(index) => {
            navigation.navigate("Shop", { category: parseInt(index) });
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Shop", { category: 0 });
            }}
          >
            <ImageBackground
              source={{ uri: Store.items[0].category_img }}
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
                  {Store.items[0].name}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Shop", { category: 1 });
            }}
          >
            <ImageBackground
              source={{ uri: Store.items[1].category_img }}
              style={{
                flexDirection: "row",
                width: windowWidth / 2.3,
                height: windowHeight / 4,
                marginTop: 10,
                marginRight: 10,
                marginLeft: 2,
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
                  {Store.items[1].name}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        </View>
        {/* <View style={{ marginLeft: 20, marginRight: 20 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Shop");
          }}
        >
          <ImageBackground
            source={require("../assets/pp.png")}
            style={{
              flexDirection: "row",
              width: "100%",
              height: windowHeight / 8,
              marginTop: 10,
            }}
            imageStyle={{ borderRadius: 15 }}
          >
            <View style={{ alignSelf: "center", marginLeft: 10 }}>
              <Text
                style={{
                  color: "black",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 16,
                }}
              >
                Lorem ipsum
              </Text>
            </View>
          </ImageBackground>
        </Pressable>
      </View> */}
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Shop", { category: 2 });
            }}
          >
            <ImageBackground
              source={{ uri: Store.items[2].category_img }}
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
                  {Store.items[2].name}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Shop", { category: 3 });
            }}
          >
            <ImageBackground
              source={{ uri: Store.items[3].category_img }}
              style={{
                flexDirection: "row",
                width: windowWidth / 2.3,
                height: windowHeight / 4,
                marginTop: 10,
                marginRight: 10,
                marginLeft: 2,
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
                  {Store.items[3].name}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        </View>
      </View>
    )
  );
};

export default inject("Store")(observer(Home));
