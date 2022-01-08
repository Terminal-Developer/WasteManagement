import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";

const SignUp = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
    <Text>SignUp Form</Text>
      <Text style={styles.text}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name"
        keyboardType="text"
      />

      <Text style={styles.text}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
        keyboardType="text"
      />

<Text style={styles.text}>E-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="xyz123@gmail.com"
        keyboardType="text"
      />

      <Text style={styles.text}>Passward</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Passward"
        keyboardType="numeric"
      />
      <Text style={styles.text}>Confirm Passward</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Confirm Passward"
        keyboardType="numeric"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 12,
    borderWidth: 1,
    padding: 10,
  },

  text:{
    marginLeft: 12,

  }
});

export default SignUp;