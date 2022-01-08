import React,{useState} from 'react';
import { StyleSheet, View, Picker,Button, Alert } from 'react-native';

function SupervisorNew() {

    const [selectedValue, setSelectedValue] = useState("null");
    return (


        <View>
            <View style={styles.Card}>  The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
                <View style={styles.button}>
                    <Button
                        title="Delete"
                        onPress={() => Alert.alert('Right button pressed')}
                    />

<Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Worker1" value="Worker3" />
            <Picker.Item label="Worker2" value="Worker2" />
      </Picker>
                </View>
            </View>

            <View style={styles.Card}> TAsk 2
                <View style={styles.button}>
                    <Button
                        title="Delete"
                    />
                    <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Worker3" value="Worke3" />
            <Picker.Item label="JWorker4" value="Worker4" />
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