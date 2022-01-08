import React from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native';

function WorkAssigned() {
    return (
        <View style={{ flexDirection: 'coloumn', justifyContent: 'space-between', marginTop: 20 }}>

            <View style={styles.Card}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/garbage.png')} style={{ width: 100, height: 100 }}
                    />
                    <Text style={{ marginLeft: 50, marginTop: 0 }}> <li>Location at which Work is to be done 1 : </li>
                    </Text>

                </View>


            </View>

            <View style={styles.Card}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/garbage.png')} style={{ width: 100, height: 100, marginBottom: 0 }}
                    />
                    <Text style={{ marginLeft: 50, marginTop: 0 }}> <li>Location at which Work is to be done 2 : </li>
                    </Text>

                </View>

            </View>
            <View style={styles.Card}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/garbage.png')} style={{ width: 100, height: 100, marginBottom: 0 }}
                    />
                    <Text style={{ marginLeft: 50, marginTop: 0 }}> <li> Location at which Work is to be done 3 : </li>
                    </Text>

                </View>
            </View>

        </View>

    );
}

export default WorkAssigned;

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


});