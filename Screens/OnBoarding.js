import React, { useRef, useEffect } from "react";
import { Text, View } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Page from "./Components/Page";
import Footer from "./Components/Footer";
import { useHeaderHeight } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { inject, observer } from "mobx-react";

const OnBoarding = ({ Store }) => {
  pagerRef = useRef(null);
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  useEffect(() => {
    Store.setItems();
  }, [Store.items]);

  return (
    <View style={{ flex: 1, marginTop: headerHeight }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            img={require("../assets/Group633.png")}
            title={"Lorem ipsum"}
            text={
              "Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
            }
          />
          <Footer
            type={1}
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            img={require("../assets/Group643.png")}
            title={"Lorem ipsum"}
            text={
              "Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
            }
          />
          <Footer
            type={2}
            leftButtonPress={() => {
              handlePageChange(0);
            }}
            rightButtonPress={() => {
              handlePageChange(2);
            }}
          />
        </View>
        <View key="3">
          <Page
            img={require("../assets/Group648.png")}
            title={"Lorem ipsum"}
            text={
              "Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
            }
          />
          <Footer
            type={3}
            leftButtonPress={() => {
              handlePageChange(1);
            }}
            rightButtonPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default inject("Store")(observer(OnBoarding));
