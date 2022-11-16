import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputChangeEventData} from "react-native";
import { styles } from "./styles";
import imagem from '../../assets/imagem.png';
import facebookicon from '../../assets/facebookicon.png';
import googleicon from '../../assets/googleicon.png';
import icon from '../../assets/icon.png';
import { LinearGradient } from "expo-linear-gradient"
import { Feather } from '@expo/vector-icons'; 
import { StatusBar } from "expo-status-bar";


export const Login = ({navigation}) => {

    const [textInput, setTextInput] = useState('')
    const onChangeText = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setTextInput(value);
      }

    const entrar = () => {
        navigation.reset({
            index:0,
            routes:[{name: "LoginComSenha"}]
        })
        
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar style={'light'} />
            <View style={styles.divimagem}>
                <Image style={styles.imagem} source={imagem} />
                <LinearGradient
                    colors={['#00000052', '#000000ac','#000000ca']}
                    style={styles.gradient}
                    start={{x:0.5,y:0}}
                    end={{x:0.5,y:1}}>
                </LinearGradient>
            </View>
            <Image style={styles.icon} source={icon} />
            <View style={styles.textbox}>
                <Text style={styles.titulo}>Bem-vindo(a) ao Pinterest</Text>
            </View>
            <View style={styles.buttons}>

                <TextInput value={textInput} onChange={onChangeText} style={styles.emailbox} selectionColor={'#e60022'} placeholder="Endereço de e-mail" placeholderTextColor={'gray'} />
                <Feather onPress={() => setTextInput('')}  style={styles.eraseemail} name="x-circle" size={24} color="gray" />
                
                <TouchableOpacity onPress={() => entrar()} style={styles.continuebutton}>
                    <Text style={styles.continuebuttontext}>Continuar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebookbutton}>
                    <Image style={styles.facebookbuttonimage} source={facebookicon} />
                    <Text style={styles.facebookbuttontext}>Continuar com o Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.googlebutton}>
                    <Image style={styles.googlebuttonimage} source={googleicon} />
                    <Text style={styles.facebookbuttontext}>Continuar com o Google</Text></TouchableOpacity>

                <Text style={styles.textfooter}>Ao continuar, você concorda com os <Text style={styles.textoazul}>Termos de Serviço</Text> do Pinterest e confirma que leu a nossa <Text style={styles.textoazul}>Politica de Privacidade.</Text></Text>

            </View>
            </ScrollView>
        
    )
}