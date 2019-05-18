import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from "react-native";

const Generator = (props) => (
  <TouchableWithoutFeedback onPress={()=>{props.add()}}>
    <View style={styles.generator}>
      <Text>Add number</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  generator: {
    backgroundColor: "#00bcd4",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginTop: 20
  }
});

export default Generator;
