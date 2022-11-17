import React from "react";
import { View, Modal, TouchableWithoutFeedback, Text,TouchableOpacity} from "react-native";
import { styles } from "./styles";
import { Feather, FontAwesome, AntDesign, EvilIcons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";


export const ModalOptions = ({ isSelectedModal, setIsSelectedModal }) => {

   return (

      <Modal
         animationType="slide"
         transparent={true}
         visible={isSelectedModal}  
         onRequestClose={() => {
            setIsSelectedModal(false);
         }}>
         <TouchableWithoutFeedback
            onPress={() => setIsSelectedModal(false)}>
            <View style={styles.modalOverlay} />
         </TouchableWithoutFeedback>
         <View style={styles.modalContentView}>
            <View style={styles.firstLineModal}>
               <Feather onPress={() => setIsSelectedModal(false)} name="x" size={28} color="white" />
               <Text style={styles.textshare}>Compartilhar em</Text>
            </View>
            <View style={styles.socialNetworkView}>
               <ScrollView showsHorizontalScrollIndicator={false} style={styles.socialNetworkScroll} horizontal={true}>
                  <TouchableOpacity>
                  <View style={styles.sendicon}>
                     <Feather name="send" size={30} color="white" />
                     <Text style={styles.socialNetworkText} >Enviar</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.whatsappicon}>
                  <FontAwesome name="whatsapp" size={30} color="white" />
                     <Text style={styles.socialNetworkText} >WhatsApp</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.instagramicon}>
                  <AntDesign name="instagram" size={30} color="white" />
                     <Text style={styles.socialNetworkText} >Instagram</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.facebookicon}>
                  <EvilIcons style={styles.facebookiconinside} name="sc-facebook" size={60} color="white" />
                     <Text style={styles.socialNetworkText} >Facebook</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.messengericon}>
                  <FontAwesome5 name="facebook-messenger" size={30} color="#4f66ff" />
                     <Text style={styles.socialNetworkText} >Messenger</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.gmailicon}>
                  <MaterialCommunityIcons name="gmail" size={30} color="black" />
                     <Text style={styles.socialNetworkText} >Gmail</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.twittericon}>
                  <AntDesign name="twitter" size={30} color="white" />
                     <Text style={styles.socialNetworkText} >Twitter</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.telegramicon}>
                  <FontAwesome5 name="telegram-plane" size={30} color="white" />
                     <Text style={styles.socialNetworkText} >Telegram</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.copylinkicon}>
                  <EvilIcons name="link" size={38} color="white" />
                     <Text style={styles.socialNetworkText} >Copiar</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.outrosicon}>
                  <Entypo name="dots-three-horizontal" size={30} color="black" />
                     <Text style={styles.socialNetworkText} >Mais</Text>
                  </View>
                  </TouchableOpacity>
               </ScrollView>
               <View style={styles.lineModal}/>
               <View style={styles.boxTextContentModal}>
                  <Text style={styles.textContentModal}>Baixar Imagem</Text>
                  <Text style={styles.textContentModal} >Ocultar Pin</Text>
                  <Text style={styles.textContentModal} >Denunciar Pin</Text>
                  <Text style={styles.subTextContentModal}>Isso vai contra as Diretrizes da Comunidade do Pinterest</Text>
               </View>
               <View style={styles.lineModal}/>
            </View>
            <Text style={styles.bottomText}>Este Pin é inspirado na sua atividade recente</Text>
         </View>
      </Modal>


   )
}

