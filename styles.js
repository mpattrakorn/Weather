import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    wrapForecast: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },

    card: {
        height: 125,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },

    button: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        margin: 10
    },

    textButton: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
    },

    inputText: {
        width: 200,
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1
    }


});