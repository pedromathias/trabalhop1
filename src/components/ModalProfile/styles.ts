import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    modalContentView: {
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 1,
        borderColor: '#292929',
        backgroundColor: '#292929',
        paddingHorizontal: 14,
        paddingVertical: 20,
        height: '100%',
        marginTop: 'auto'

    },

    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    firstLineModal: {

        flexDirection: 'row',
        marginTop:-15
    },

    textshare: {
        paddingTop: 2,
        color: 'white',
        fontSize: 16,
        marginLeft: 95
    },

    infoaccount:{
        color:'lightgray',
        marginBottom:15
    },

    optionsbuttons:{
        flexDirection:'row',
        alignItems:'center'
    },

    settingsView: {
    },

    socialNetworkText: {
        marginTop: 10,
        color: 'white',
        position: 'absolute',
        paddingVertical: 65
    },

    lineModal: {
        backgroundColor: 'gray',
        height: 1,
        marginTop: 30,
        left: 0,
        right: 0,
        opacity: 0.5
    },
    boxTextContentModal: {
        marginTop: 30,
        marginLeft: 10,
    },

    textContentModal: {
        fontSize: 22,
        color: 'white',
        marginBottom: 13
    },

    subTextContentModal: {
        color: 'white',
        fontSize: 14,
        marginTop: -10
    },

    bottomText: {
        color: 'white',
        marginTop: 17,
        marginLeft: 10
    },

    



})