import React, {useState} from "react";

import { SafeAreaView, StyleSheet,Button,Picker, TextInput, View, Text } from "react-native";
import {Dropdown} from 'react-native-element-dropdown';
// import {
//     Dropdown }
//     from 'react-native-material-dropdown';

const data = [
    {value: '1'},
    {value: '2'},
    {value: '3'}
];


const SignUp = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const[selectedValue, setSelectedValue] = useState("Java");

  return (
    <View>
    <Text>SignUp Form</Text>
      <Text style={styles.text}>Name</Text>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Name"
        keyboardType="text"
      />

      <Text style={styles.text}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Username"
        keyboardType="text"
      />

<Text style={styles.text}>E-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="xyz123@gmail.com"
        keyboardType="text"
      />

      <Text style={styles.text}>Passward</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Passward"
        keyboardType="text"
      />
      <Text style={styles.text}>Confirm Passward</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Confirm Passward"
        keyboardType="numeric"
      />

<Text style={styles.text}>Position:</Text>
<Picker
        selectedValue={selectedValue}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Citizen" value="Citizen" />
        <Picker.Item label="Worker" value="Worker" />
        <Picker.Item label="Superwiser" value="Superwiser" />
      </Picker>

<Button
        title="SignUp"
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