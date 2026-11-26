import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { datasource } from './Data.js';

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key);

    const getIndexNum = (type) => {
        return type === "Vowels" ? 0 : 1;
    };

    const handleSave = () => {
        const indexnum = getIndexNum(route.params.type);
        datasource[indexnum].data[route.params.index].key = letter;
        navigation.navigate("Home");
    };

    const handleDelete = () => {
        const indexnum = getIndexNum(route.params.type);

        Alert.alert("Are you sure?", "", [
            {
                text: "Yes",
                onPress: () => {
                    datasource[indexnum].data.splice(route.params.index, 1);
                    navigation.navigate("Home");
                },
            },
            { text: "No" },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Letter:</Text>
            <TextInput
                style={styles.input}
                maxLength={1}
                value={letter}
                onChangeText={(text) => setLetter(text)}
            />

            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button title="SAVE" onPress={handleSave} />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button title="DELETE" onPress={handleDelete} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 40,
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonWrapper: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default Edit;

