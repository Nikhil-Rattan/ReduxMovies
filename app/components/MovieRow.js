import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function MovieRow({ movie }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
            <Text style={styles.title}>{movie.Title}</Text>
            <View style={styles.iconContainer}>
                <Icon name='heart-o' size={34} color='red' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: '4%',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    poster: {
        width: 70,
        height: 100,
        resizeMode: 'contain'
    },
    title: {
        marginLeft: '3%',
        flex: 2,
        fontSize: 20,
        fontWeight: '800'
    },
    iconContainer: {
        alignItems: 'center',
    }

});