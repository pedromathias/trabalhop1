import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#000000",
        zIndex: 0

    },

    imagem: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        zIndex: 10

    },

    divimagem: {
        backgroundColor: 'black',
        width: 434,
        height: 380,
        marginLeft: -17


    },

    icon: {
        resizeMode: 'contain',
        width: 120,
        height: 120,
        marginHorizontal: 150,
        marginVertical: -45

    },

    titulo: {
        zIndex: 99,
        resizeMode: 'contain',
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 30
    },

    textbox: {
        width: '80%',
        marginHorizontal: 45

    },

    eraseemail:{
        position:'absolute',
        right:60,
        top:12
    },

    emailbox: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: "#292929",
        width: 320,
        height: 50,
        borderRadius: 30,
        paddingLeft: 28,
        fontSize: 16
    },

    buttons: {
        alignItems: 'center',
        marginTop: 25
    },

    continuebutton: {
        backgroundColor: '#e60022',
        width: 320,
        height: 50,
        borderRadius: 30,
        marginTop: 30,
        paddingTop: 12
    },

    continuebuttontext: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

    facebookbutton: {
        backgroundColor: '#1777f4',
        width: 320,
        height: 50,
        borderRadius: 30,
        marginTop: 30,
        paddingTop: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },

    facebookbuttonimage: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginBottom: 12,
        marginRight: 20
    },

    facebookbuttontext: {
        paddingBottom: 15,
        color: 'white',
        fontWeight: 'bold'
    },

    googlebutton: {
        backgroundColor: '#4b4b4b',
        width: 320,
        height: 50,
        borderRadius: 30,
        marginTop: 10,
        paddingTop: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },

    googlebuttonimage: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginBottom: 12,
        marginRight: 25
    },

    textfooter: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: 50,
        resizeMode: 'contain',
        marginTop: 20
    },

    textoazul:{
        color:'#0073e9'
    },

    gradient:{
        marginTop:-50,
        height:50,
        zIndex:9999

    }


})

