import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./style";
import { ModalProfile } from "../../components/ModalProfile/ModalProfile";
import { Entypo, Ionicons, Foundation, FontAwesome, AntDesign } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import ProfileImagem from '../../assets/ProfileImage.png';

export const Profile = ({navigation}) => {

    const [isSelectedModal, setIsSelectedModal] = useState(false);

    const logout = () => {
        navigation.reset({
            index:0,
            routes:[{name: "Login"}]
        })
        
    }

    const home = () => {
        navigation.reset({
            index:0,
            routes:[{name: "Home"}]
        })
        
    }

    return (
        <View style={styles.container}>
            <StatusBar style={'light'} />
            <View style={styles.topotions}>
                <Ionicons style={styles.shareicon} name="ios-share-social" size={24} color="white" />
                <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
            </View>
            <View style={styles.imagemView}>
            <Image style={styles.profileImage} source={ProfileImagem} />
            </View>
            <View style={styles.viewtexts}>
                <Text style={styles.texto1}>Eu</Text>
                <Text style={styles.texto2}>@youruserhere</Text>
                <Text style={styles.texto3}>100 seguidores • 100 seguindo</Text>
            </View>
            <View style={styles.rowprofiletabs}>
                <Text style={styles.texto4}>Criados</Text>
                <Text style={styles.texto5}>Salvos</Text>  
            </View>
            <View style={styles.line} />
            <View style={styles.profilecontent}>
                <Text style={styles.profilecontenttitle}>Inspire com um Idea Pin</Text>
                <TouchableOpacity style={styles.createbutton}><Text style={styles.createbuttontext}>Criar</Text></TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Foundation onPress={() => home()} name="home" size={24} color="white" />
                <FontAwesome name="search" size={24} color="gray" />
                <Entypo style={styles.plus} name="plus" size={36} color="gray" />
                <AntDesign name="message1" size={24} color="gray" />
                <AntDesign name="user" size={24} color="gray" />
            </View>
            <ModalProfile handleLogout={logout}  isSelectedModal={isSelectedModal} setIsSelectedModal={setIsSelectedModal} />
        </View>
    )
}