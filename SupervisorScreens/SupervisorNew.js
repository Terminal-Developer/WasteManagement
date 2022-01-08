import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';


function SupervisorNew() {
    return (


        <View>
            <View style={styles.Card}>  The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
                <View style={styles.button}>
                    <Button
                        title="Delete"
                        onPress={() => Alert.alert('Right button pressed')}
                    />

                    <Button
                        title="Assign To"
                    />
                </View>
            </View>

            <View style={styles.Card}> TAsk 2
                <View style={styles.button}>
                    <Button
                        title="Delete"
                    />
                    <Button
                        title="Assign To"
                    />
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
        marginBottom: 6,
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