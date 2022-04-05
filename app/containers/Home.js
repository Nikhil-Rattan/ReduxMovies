import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import MovieRow from '../components/MovieRow'
import { connect } from 'react-redux'


class Home extends Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
        const { addMovies } = this.props
        const response = await fetch('https://www.omdbapi.com/?s=Batman&page=2&apikey=6e142b94')
        const data = await response.json()
        addMovies(data.Search)
    }
    render() {
        const { movies } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={movies}
                    renderItem={({ item: movie }) => <MovieRow movie={movie} />}
                    keyExtractor={(movie) => movie.imdbID}
                />
                <View style={styles.addBtnContainer}>
                    <TouchableOpacity style={styles.addBtn} onPress={() => mapDispatchToProps()}>
                        <Text style={{ fontSize: 30 }}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    addBtnContainer: {
        alignSelf: 'flex-end',
        bottom: 30,
        position: 'absolute',
        paddingRight: '4%',
    },
    addBtn: {
        height: 60,
        width: 60,
        backgroundColor: 'orange',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function mapStateToProps(state) {
    return {
        movies: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addMovies: (movies) => dispatch({
            type: 'ADD_MOVIES',
            payload: { movies }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)