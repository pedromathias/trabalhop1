import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#000000",
        zIndex: 0,

    },

    caixatexto:{
        width:70
    },

    linha:{
        backgroundColor:'white',
        width:45,
        height:4,
        marginLeft:15,
        marginTop:5,
        borderRadius:5
    },

    aba: {
        color: 'white',
        paddingTop: 25,
        marginLeft: 15,
        fontSize: 18,
    },

    scrollview:{
        marginTop:10,
        marginLeft:3
    },

    columnimage:{
        flexDirection:'column'
    },

    columnimage2:{
        flexDirection:'column',
        marginLeft:5
    },

    duocolumn:{
        flexDirection:'row'
    },

    boximage:{
        height:400,
        width:200,
        marginBottom:10
    },

    image:{
        height:380,
        width:200,
        borderRadius:20
    },

    threedots:{
        marginLeft:170
    },

    footer: {
        backgroundColor:'black',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 45,
        zIndex: 10,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingTop:5
    },

    plus:{
        marginTop:-5
    }
})