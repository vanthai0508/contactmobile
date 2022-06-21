import { StyleSheet, Text, View,Pressable,TouchableOpacity,Modal,FlatList } from 'react-native'
import React,{useState}from 'react'
import {AntDesign} from '@expo/vector-icons'
import ContactItem from './contactItem';
import AddContactModal from './AddContactModal';
import contactData from './contactData';
export default function HomeScreen({navigation}) {
          const [ModalVisible,setModalVisible] = useState(false);
          const toggleModalVisible=()=>{
            setModalVisible(!ModalVisible);
          }
          const renderItem= ({item})=>
          <Pressable onPress={()=>{navigation.navigate('Details',{contact:item});}}>
            <ContactItem contact={item}/>
          </Pressable>
          return (
            <View style={styles.container}>
              <Modal animationType='slide' visible={ModalVisible} onRequestClose={toggleModalVisible}  >
                <AddContactModal closeModal={toggleModalVisible} />
              </Modal>
              <FlatList 
              data= {contactData}
              renderItem = {renderItem}
              keyExtractor={item=>item.id}
              />
              <View >
                <TouchableOpacity style={styles.addContact} onPress={toggleModalVisible}>
                  <AntDesign name='plus'  size={16} color='#FFFFFF'/>
                </TouchableOpacity>
              </View>
            </View>
          );
}
const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
          },
          title: {
            fontWeight:"800",
            fontSize: 38,
            color:'black',
            paddingHorizontal: 64
          },
          addContact:{
            padding: 16,
            alignItems: 'center',
            justifyContent:'center'
            ,backgroundColor:'#f95959'
          }
        });