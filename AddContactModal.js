import { View, Text,KeyboardAvoidingView ,TouchableOpacity,TextInput,StyleSheet,Image} from 'react-native'
import React,{useState} from 'react'
import {AntDesign} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import contactData from './contactData';
export default function AddContactModal(props) {
          const[name,setName] = useState("");
          const[number,setNumber] = useState("");
          const[thumbnails,setThumbnails] = useState("");
const pickImage=async()=>
    {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            setThumbnails(result.uri);
          }
    }
 const addContact = ()=>{
           if(name!=""&&number!=""&&thumbnails!=""){
                     contactData.push({id:contactData.length+1,name,number,thumbnails,});
                     props.closeModal();
           }
           else{
             alert("Please fill all!");
           }
              setName("");
              setNumber("");
              setThumbnails("");
    }
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <TouchableOpacity style={{position:"absolute",top:64, right:32}} onPress={props.closeModal}>
                     <AntDesign name="close" size={24} color='black'/>
          </TouchableOpacity>
          <View style={styles.formInput}>
                    <TouchableOpacity style={{alignItems:'center',paddingBottom:18}} onPress={pickImage}>
                              <Image source={{uri:thumbnails}} style={styles.image}/>
                              <Text style={{color:'#233142',paddingTop:8,fontSize:16}}>Pick Thumbnail</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.input} placeholder="Name?" placeholderTextColor='gray'  onChangeText={(text)=>setName(text)}/>
                    <TextInput style={styles.input} placeholder="Number?" placeholderTextColor='gray' onChangeText={(text)=>setNumber(text)}/>
                    <TouchableOpacity 
                    onPress={addContact}  
                    style= {[styles.creater, {backgroundColor: '#f95959'}]}>
                    <Text style={{color:"white", fontWeight:'600',fontSize:16}}>Save!</Text>
                    </TouchableOpacity>
          </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
          container:{
                    flex:1,
                    justifyContent:'center',
                    backgroundColor:'#455d7a'
          },
formInput:{
           marginHorizontal:32
},
input:{
           borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#455d7a',
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize:18,
        borderWidth: 2,
        backgroundColor:'#ffffff',
        
},
image:{
          width:128,
          height:128,
          borderColor:'#455d7a',
          borderRadius:6,
          borderWidth:2,
          backgroundColor:'#ffffff'
},
creater:{
          marginTop:24,
          height:50,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent:'center'
          
      },
});