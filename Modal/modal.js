import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

class ModalComponent extends Component {
  state = {
    modal: false
  };
  handelModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <View style={{ width: "100%" }}>
        <Button title="Open Modal" onPress={this.handelModal} />

        <Modal visible={this.state.modal} animationType="slide">
          <View style={{ backgroundColor: "red", marginTop: 20 }}>
            <Text>Modal Component</Text>
          </View>
          <Button title="close modal" onPress={this.handelModal} />
        </Modal>
      </View>
    );
  }
}

export default ModalComponent;
