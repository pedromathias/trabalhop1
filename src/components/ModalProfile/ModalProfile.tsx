import React from "react";
import { View, Modal, TouchableWithoutFeedback, Text,TouchableOpacity} from "react-native";
import { styles } from "./styles";
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
export const ModalProfile = ({ isSelectedModal, setIsSelectedModal, handleLogout}) => {


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
            <Ionicons onPress={() => setIsSelectedModal(false)} name="chevron-back" size={24} color="white" />
               <Text style={styles.textshare}>Configurações</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.settingsView}>
               <View style={styles.boxTextContentModal}>
                  
                  <Text style={styles.infoaccount}>Informações da conta</Text>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal}>Perfil público</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal} >Informações pessoais</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal} >Gerenciamento de conta</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal} >Ajuste do feed inicial</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal} >Contas Conectadas</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal} >Premissões para redes sociais</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal} >Notificações</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal} >Privacidade e dados</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal} >Segurança e logins</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>

               </View>
            </View>
            <View style={styles.settingsView}>
               <View style={styles.boxTextContentModal}>
                  <Text style={styles.infoaccount}>Ações</Text>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal}>Adicionar Conta</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleLogout()} style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal}>Sair</Text>
                  </TouchableOpacity>
               </View>
               
            </View>
            <View style={styles.settingsView}>
               <View style={styles.boxTextContentModal}>
                  <Text style={styles.infoaccount}>Suporte</Text>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal}>Obter Ajuda</Text>
                  <Feather style={{position:'absolute', right:0}} name="arrow-up-right" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal}>Termos de Serviço</Text>
                  <Feather style={{position:'absolute', right:0}} name="arrow-up-right" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal}>Termos de Serviço</Text>
                  <Feather style={{position:'absolute', right:0}} name="arrow-up-right" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionsbuttons}>
                  <Text style={styles.textContentModal}>Sobre</Text>
                  <MaterialIcons style={{position:'absolute', right:0}} name="navigate-next" size={24} color="white" />
                  </TouchableOpacity>
               </View>
            </View>
            </ScrollView>
         </View>
      </Modal>


   )
}

