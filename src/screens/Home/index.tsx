import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, Modal, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { Entypo, Foundation, FontAwesome, AntDesign } from '@expo/vector-icons';
import { ModalOptions } from "../../components/ModalOptions/ModalOptions";
import imagem1 from '../../assets/imagem1.jpeg';
import imagem2 from '../../assets/imagem2.jpeg';
import imagem3 from '../../assets/imagem3.jpeg';
import imagem4 from '../../assets/imagem4.jpeg';
import imagem5 from '../../assets/imagem5.jpeg';
import imagem6 from '../../assets/imagem6.jpeg';
import imagem7 from '../../assets/imagem7.jpeg';
import imagem8 from '../../assets/imagem8.jpeg';
import imagem9 from '../../assets/imagem9.jpeg';
import imagem10 from '../../assets/imagem10.jpeg';
import { StatusBar } from "expo-status-bar";


export const Home = ({navigation}) => {
    const [isSelectedModal, setIsSelectedModal] = useState(false);

    const goToProfile = () => {
        navigation.reset({
            index:0,
            routes:[{name: "Profile"}]
        })
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={'light'} />
            <View style={styles.caixatexto}>
                <Text style={styles.aba}>Tudo</Text>
            </View>
            <View style={styles.linha}></View>
            <ScrollView style={styles.scrollview}>
                <View style={styles.duocolumn}>
                    <View style={styles.columnimage}>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem1} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem2} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem3} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem4} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem9} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                    </View>
                    <View style={styles.columnimage2}>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem5} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem6} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem7} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem8} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                        <View style={styles.boximage}>
                            <Image style={styles.image} source={imagem10} />
                            <Entypo onPress={() => setIsSelectedModal(true)} style={styles.threedots} name="dots-three-horizontal" size={20} color="white" />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Foundation name="home" size={24} color="white" />
                <FontAwesome name="search" size={24} color="gray" />
                <Entypo style={styles.plus} name="plus" size={36} color="gray" />
                <AntDesign name="message1" size={24} color="gray" />
                <AntDesign onPress={() => goToProfile()} name="user" size={24} color="gray" />
            </View>
            <ModalOptions isSelectedModal={isSelectedModal} setIsSelectedModal={setIsSelectedModal} />
        </SafeAreaView>


    )
}