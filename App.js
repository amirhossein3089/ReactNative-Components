/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Nav from "./Nav/nav";
import Generator from "./Generator/generator"
import ListItem from "./Generator/listItem"

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    nameOfapplication:'My Awsome App',
    random:[20,13]
  } 
  onAddRandom = ()=>{
    const random = Math.floor(Math.random()*100) +1;
    this.setState(prevState=>{
      return {
        random:[...prevState.random, random]
      }
    })
  }
  onItemDelete=(index)=>{
    const newArray = this.state.random.filter((item,i)=>{
      return index !== i;
    })
    this.setState({
      random:newArray
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Nav nameofapp={this.state.nameOfapplication}/>
        <Generator add={this.onAddRandom} />
        <ListItem items={this.state.random} onDeleteItem={this.onItemDelete}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",

  }
});
