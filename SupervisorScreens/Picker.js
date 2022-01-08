import React,{useState} from 'react';
import { View,Picker} from 'react-native';

export default Assign = () => {
    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
        </View>
    )
}

