import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, SectionList } from 'react-native';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: '#33A5FF',
        padding: 10,

        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => {
                    navigation.navigate('Edit', {
                        index: index,
                        type: section.title,
                        key: item.key,
                    });
                }}
            >
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar />

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Add')}
            >
                <Text style={styles.buttonText}>ADD LETTERS</Text>
            </TouchableOpacity>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.key + index}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;