import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class Input extends Component {
  state = {
    myInput: "",
    users:["Jone","Joe"]
  };

  onChangeText = value => {
    this.setState({ myInput: value });
  };
  onAddUsers = ()=>{
      this.setState(prevState => {
          return{
              myInput:"",
              users:[...prevState.users,prevState.myInput]
          }

      })
  }
  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          value={this.state.myInput}
          style={styles.input}
          onChangeText={this.onChangeText}
        />
        <Button title="Add User" onPress={this.onAddUsers}/>

        {
            this.state.users.map((item,index)=>(
                <Text style={styles.users} key={index}>{item}</Text>
            ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    inputWrapper:{
        width:"100%"
    },
  input: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    marginTop: 20,
    fontSize:20,
    padding:10
  },
  users:{
    fontSize:40,
    borderWidth: 1,
    borderColor: "#cecece",
    padding:10,
    marginBottom:20
  }
});

export default Input;
