import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ContactDetails({route,navigation}) {
  const {contact} = route.params;
  return (
    <View style={styles.container}>
          <Image source={{uri:contact.thumbnails}} style={{width:500,height:300,borderRadius:8}}/>
      <Text style={{marginTop:40,fontWeight:'800',fontSize:38}}>{contact.name}</Text>
      <Text style={{marginTop:40,fontSize:16,fontWeight:'500',fontSize:20}}>Phone number: {contact.number}</Text>
        <TouchableOpacity 
                    style= {[styles.creater, {backgroundColor: '#f95959'}]}>
                    <Text style={{color:"white", fontWeight:'800',fontSize:18}}>Call {contact.name}!</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
          container:{
                    flex:1,
                   
                    alignItems:'center'
          },
          creater:{
                    marginTop:170,
                    height:50,
                    paddingHorizontal:40,
                    borderRadius: 6,
                    alignItems: 'center',
                    justifyContent:'center',
                },
})