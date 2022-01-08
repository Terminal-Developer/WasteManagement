import React,{useState} from 'react';
import { StyleSheet, View, Picker,Button, Alert,Text ,Image} from 'react-native';
function UserReport() {

    const [selectedValue, setSelectedValue] = useState("null");
    return (


        <View>
            <View style={styles.container}>
                <Text>User Report</Text>
                <Button style={styles.btn} title="New Report">
                    
                </Button>
                <View style={styles.row}>
                    <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={{width: 100, height: 100}} />
                        <View style={styles.column}>
                            <Text style={styles.text}>Location</Text>
                            <Text style={styles.text}>Worker Name</Text>
                            <Text style={styles.text}>Citizen Name</Text>
                        </View>
                </View>
                <View style={styles.timeline}>
                
                </View>
            </View>
        </View>

    );
}
export default UserReport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        margin: 8,
        padding:10,
        backgroundColor: "aliceblue",
      },

      row: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10
      },

      columm:{
        flexDirection:"column",
        flexWrap: "wrap",
        marginLeft: 10

      },
      text:{
            padding: 3,
            marginLeft:10,
      },
      btn:{
        padding:10
      }

});