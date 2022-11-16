import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { styles } from "./styles";
import facebookicon from '../../assets/facebookicon.png';
import googleicon from '../../assets/googleicon.png';
import botaoFechar from '../../assets/botaoFechar.png';
import { StatusBar } from "expo-status-bar";
import { Entypo, Feather } from '@expo/vector-icons';

export const LoginComSenha = ({ navigation }) => {
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true)
    const [textInput, setTextInput] = useState('')
    const onChangeText = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setTextInput(value);
    }

    const voltar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" }]
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar style={'light'} />
            <View style={styles.textbox}>
                <TouchableOpacity onPress={() => voltar()}>
                    <Image style={styles.botaofechar} source={botaoFechar} />
                </TouchableOpacity>
                <Text style={styles.texto}>Entrar</Text>
            </View>
            <TouchableOpacity style={styles.facebookbutton}>
                <Image style={styles.facebookbuttonimage} source={facebookicon} />
                <Text style={styles.facebookbuttontext}>Continuar com o Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googlebutton}>
                <Image style={styles.googlebuttonimage} source={googleicon} />
                <Text style={styles.facebookbuttontext}>Continuar com o Google</Text></TouchableOpacity>
            <View style={styles.oubox}>
                <Text style={styles.textou}>Ou</Text>
            </View>
            <TextInput value={textInput} onChange={onChangeText} style={styles.emailbox} placeholder="Insira seu e-mail" selectionColor={'#e60022'} placeholderTextColor={'gray'} />
            <Feather onPress={() => setTextInput('')}  style={styles.eraseemail} name="x-circle" size={24} color="gray" />
            <View style={styles.passwordview}>
                <TextInput style={styles.passwordbox} secureTextEntry={hidePass} placeholder="Insira sua senha" selectionColor={'#e60022'} placeholderTextColor={'gray'} />
                <TouchableOpacity style={styles.eyevisible} onPress={() => setHidePass(!hidePass)} >
                    {hidePass ?
                        <Entypo name="eye" size={24} color="white" />
                        :
                        <Entypo name="eye-with-line" size={24} color="white" />
                    }

                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.continuebutton} onPress={() => entrar()}>
                <Text style={styles.continuebuttontext}>Continuar</Text>
            </TouchableOpacity>
            <View style={styles.passwordforgetbox}>
                <Text style={styles.passwordforgettext}>Esqueceu a senha?</Text>
            </View>
        </View>

    )
}