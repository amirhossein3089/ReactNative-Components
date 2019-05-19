/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from "react-native";

import Nav from "./Nav/nav";
import Generator from "./Generator/generator";
import ListItem from "./Generator/listItem";
import Input from "./Input/input";
import Picker from "./Picker/picker";
import Metro from "./assets/images/metro.jpg"
import ModalComponent from "./Modal/modal"
 
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    nameOfapplication: "My Awsome App",
    random: [20, 13],
    loading:false,
  };
  onAddRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      };
    });
  };
  onItemDelete = index => {
    const newArray = this.state.random.filter((item, i) => {
      return index !== i;
    });
    this.setState({
      random: newArray
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Nav nameofapp={this.state.nameOfapplication} />
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.wrapper}>
            <Generator add={this.onAddRandom} />
            <ListItem
              items={this.state.random}
              onDeleteItem={this.onItemDelete}
            />
            {/* <Input /> */}
            {/* <Picker/>
            <ActivityIndicator size="large" color="red" animating={this.state.loading}/> */}

            <Image source={Metro} style={styles.metro} resizeMode="contain"/>
            <Image source={{uri:'https://picsum.photos/id/767/400/400'}} style={styles.metro} resizeMode="contain"/>

            <ModalComponent/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  wrapper:{
    flex:1,
    width:'100%',
    padding:20,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  metro:{
    width:'100%',
    height:300,
    marginTop: 20,
  }
});
