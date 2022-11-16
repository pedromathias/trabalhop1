import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#000000",
        zIndex: 0,

    },

    threedots:{
    },

    shareicon:{
        marginRight:35
    },

    topotions:{
        flexDirection:'row',
        position:'absolute',
        right:10,
        top:45,
        alignItems:'center',
    },

    imagemView:{
        alignItems:'center',
        marginVertical:120,
    },

    profileImage:{
        height:150,
        width:150,
        borderRadius:100
    },

    viewtexts:{
        marginTop:-110,
        alignItems:'center',
        marginRight:10
    },

    texto1:{
        fontSize:28,
        color:'white'
    },
    texto2:{
        fontSize:14,
        color:'gray'
    },
    texto3:{
        fontSize:12,
        color:'white',
        marginTop:5
    },

    rowprofiletabs:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30

    },

    texto4:{
        fontSize:18,
        color:'white',
        marginRight:30
    },

    texto5:{
        fontSize:18,
        color:'white'
    },

    line:{
        height:4,
        width:70,
        borderRadius:10,
        backgroundColor:'white',
        marginHorizontal:126,
        marginTop:5

    },

    profilecontent:{
        alignItems:'center',
        marginTop:50
    },

    profilecontenttitle:{
        color:'white',
        fontSize:22,
        marginBottom:10
    },

    createbutton:{
        backgroundColor:'#e60022',
        width:60,
        height:40,
        alignItems:'center',
        borderRadius:30,
        paddingVertical:8
    },

    createbuttontext:{
        color:'white'
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