import React from 'react';
import { View} from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default Assign = () => {
    const [pickerValue, setPickerValue] = useState('Assign to')

    return (
        <View>
            <Picker
                selectedValue = {pickerValue}
                onValueChange = { (itemValue) => setPickerValue(itemValue)}>
                <Picker.Item label = "Assign To" value='Assign To' />
                <Picker.Item label = "Worker 1" value='Worker 1' />
                <Picker.Item label = "Worker 2" value='Worker 2' />
                <Picker.Item label = "Worker 3" value='Worker 3' />
            </Picker>
        </View>
    )
}

