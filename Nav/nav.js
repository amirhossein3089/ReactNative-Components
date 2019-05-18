import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const Nav = (props) => (
  <View style={styles.nav}>
    <Text>{props.nameofapp}</Text>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#eaeaea",
    alignItems: "center",
    padding: 10,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#dddddd",
  }
});

export default Nav;
