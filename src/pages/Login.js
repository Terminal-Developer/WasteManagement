import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

const Login = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>

      {/* <Text>Name</Text> */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name"
        keyboardType="text"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Passward"
        keyboardType="numeric"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;