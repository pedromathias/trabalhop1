import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#000000",
        zIndex: 0,
        alignItems:'center',
        paddingHorizontal:15

    },

    texto:{
        color:'#ffffff',
        textAlign:'center',
        marginTop:70,
        fontWeight:'bold',
        fontSize:16
    },

    textbox:{
        height:120,
        width:'100%',
        borderBottomWidth:0.2,
        borderBottomColor:'gray',
        flexDirection:'row'
    },

    botaofechar:{
        marginTop:70,
        height:13,
        width:13,
        marginRight:150
    },
    
    facebookbutton: {
        backgroundColor: '#1777f4',
        width: 300,
        height: 50,
        borderRadius: 30,
        marginTop: 10,
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
        width: 300,
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

    textou:{
        color:'white',
    },

    oubox:{
        paddingTop:30,
        height:100,
        alignItems:'center',
        paddingBottom:30
    },
    emailbox: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: "#292929",
        width: 320,
        height: 50,
        borderRadius: 30,
        paddingLeft: 34,
        fontSize: 16
    },

    eraseemail:{

        right:-135,
        top:-38
    },

   passwordbox: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: "#292929",
        width: 320,
        height: 50,
        borderRadius: 30,
        paddingLeft: 34,
        fontSize: 16,
        marginTop:10
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

    passwordforgettext:{
        color:'gray',
        fontWeight:'bold',
        fontSize:14
    },

    passwordforgetbox:{
        marginTop:15

    },
    eyevisible:{
        position:'absolute',
        marginHorizontal:280,
        marginVertical:20
    },

    passwordview:{
        flexDirection:'row'
    }
})