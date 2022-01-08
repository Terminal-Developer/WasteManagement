import React, { useState } from 'react';
import { StyleSheet, View, Picker, Button, Alert,Image,Text } from 'react-native';

function SupervisorNew() {
    const [selectedValue, setSelectedValue] = useState("Assign To");
    const [selectedValue2, setSelectedValue2] = useState("Assign To");
    const [selectedValue3, setSelectedValue3] = useState("Assign To");


    return (


        <View style={{flexDirection:'coloumn', justifyContent:'space-between', marginTop:20}}>

            <View style={styles.Card}>
                <View style={{flexDirection:'row'}}>
                <Image
        source={require('../assets/garbage.png')} style={{width: 100, height:100}}
      /> 
            <Text style={{marginLeft:50, marginTop:0}}> <li>Name : User 1</li>
            <li>Location 1</li>
            </Text>
            
      </View>
      
                <View style={styles.button}>
                    <Button
                        title="Delete"
                        onPress={() => Alert.alert('Right button pressed')}
                    />


                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 40, width: 90, backgroundColor: '#2196F3', color: 'white' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Assign To" value="Assign To" />
                        <Picker.Item label="Worker 1" value="Worker 1" />
                        <Picker.Item label="Worker 2" value="Worker 2" />
                        <Picker.Item label="Worker 3" value="Worker 3" />
                    </Picker>
                </View>
            </View>

            <View style={styles.Card}>
            <View style={{flexDirection:'row'}}>
                <Image
        source={require('../assets/garbage.png')} style={{width: 100, height: 100, marginBottom:0}}
      /> 
            <Text style={{marginLeft:50, marginTop:0}}> <li>Name : User 2</li>
            <li>Location 2</li>
            </Text>
            
      </View>
                <View style={styles.button}>
                    <Button
                        title="Delete"

                        onPress={ () => Alert.alert('Delete 2 is pressed',[
                            {text : "Are you sure", onPress:() => console.log('alert closed')}
                        ])}
                    />
                    <Picker

                        selectedValue2={selectedValue2}
                        style={{ height: 40, width: 90, backgroundColor: '#2196F3', color: 'white' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                    >
                        <Picker.Item label="Assign To" value="Assign To" />
                        <Picker.Item label="Worker 1" value="Worker 1" />
                        <Picker.Item label="Worker 2" value="Worker 2" />
                        <Picker.Item label="Worker 3" value="Worker 3" />
                    </Picker>
                </View>
            </View>
            <View style={styles.Card}>
            <View style={{flexDirection:'row'}}>
                <Image
        source={require('../assets/garbage.png')} style={{width: 100, height: 100, marginBottom:0}}
      /> 
            <Text style={{marginLeft:50, marginTop:0}}> <li>Name : User 3</li>
            <li>Location 3</li>
            </Text>
            
      </View>
                <View style={styles.button}>
                    <Button
                        title="Delete"

                        onPress={ () => Alert.alert('Delete 2 is pressed',[
                            {text : "Are you sure", onPress:() => console.log('alert closed')}
                        ])}
                    />
                    <Picker
                        selectedValue3={selectedValue3}
                        style={{ height: 40, width: 90, backgroundColor: '#2196F3', color: 'white' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
                    >
                        <Picker.Item label="Assign To" value="Assign To" />
                        <Picker.Item label="Worker 1" value="Worker 1" />
                        <Picker.Item label="Worker 2" value="Worker 2" />
                        <Picker.Item label="Worker 3" value="Worker 3" />
                    </Picker>
                </View>
            </View>

        </View>

    );
}
export default SupervisorNew;

const styles = StyleSheet.create({
    Card: {
        padding: 10,
        borderRadius: 6,
        marginBottom: 25,
        marginHorizontal: 6,
        marginVertical: 6,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowRadius: 2,
        backgroundColor: '#dee2e6',
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        height: 30,
        alignItems: 'center',

    },

});