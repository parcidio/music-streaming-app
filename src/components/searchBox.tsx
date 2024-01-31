import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export function SearchBox({ search, setSearch }: any) {
    return (<View style={styles.header}>
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput
            value={search}
            placeholder="What do you want to listen to?"
            placeholderTextColor="gray"
            onChangeText={setSearch}
            style={styles.input}
        />
        {search.length > 0 && (
            <Text onPress={() => setSearch('')} style={styles.cancelText}>
                Cancel
            </Text>
        )}
    </View>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    input: {
        // flex: 1,
        marginHorizontal: 10,
        fontSize: 16,
        paddingVertical: 8,
        color: 'black',
    },
    cancelText: {
        color: 'blue',
        marginLeft: 10,
    },
});
