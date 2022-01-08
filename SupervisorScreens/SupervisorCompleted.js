import React from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native';

function SupervisorCompleted() {
    return (
        <View style={styles.Card}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../assets/Garbage cleaned.png')} style={{ width: 100, height: 100, marginBottom: 0 }}
                />
                <Text style={{ marginLeft: 50, marginTop: 0, fontSize: 15 }}> <li>Name : User 1</li>
                    <li>Location 1</li>
                    <li>Worker Completed the Work</li>
                </Text>


            </View>
            <View style={styles.button}>
                <Button
                    title='Notify the User'
                />
            </View>
        </View>
    );
}

export default SupervisorCompleted;

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