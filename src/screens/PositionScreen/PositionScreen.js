import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function PositionScreen(navigation) {
    
    
    const onCitizenPress = () => {
        navigation.navigate('Citizen')
    }

    const onSupervisorPress = () => {
        navigation.navigate('SuperVisor')
    }

    const onWorkerPress = () => {
        navigation.navigate('Worker')
    }


    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
            <TouchableOpacity
                    style={styles.button}
                    onPress={onCitizenPress}
                    <Text style={styles.buttonTitle}>Citizen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button}
                    onPress={onCitizenPress}
                    <Text style={styles.buttonTitle}>Citizen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button}
                    onPress={onCitizenPress}
                    <Text style={styles.buttonTitle}>Citizen</Text>
            </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}