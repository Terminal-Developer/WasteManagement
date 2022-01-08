import React from "react";
import {Button, View, Text } from "react-native";

const UserNew = () => {
  return (
    <View>
      <Text>Complaint Form</Text>
      <Text style={styles.text}>Image</Text>
      <Text style={styles.text}>Location</Text>
      <Button
        title="Submit"
      />

    </View>
    
  );
};

const styles = StyleSheet.create({
  text:{
    marginLeft: 12,

  }
});

export default UserNew;