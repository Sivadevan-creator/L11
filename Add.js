import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {datasource} from './Data.js';

const Add = ({ navigation }) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('Vowels');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Letter:</Text>
            <TextInput
                style={styles.input}
                maxLength={1}
                onChangeText={(text) => setLetter(text)}
            />

            <RNPickerSelect
                value={type}
                onValueChange={(value) => setType(value)}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' },
                ]}
            />

            <Button title="Add" onPress={() => {
                let item = {key:letter};
                let indexnum = 1;
                if(type==="Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home");
            }} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 5,
    },
});

export default Add;


