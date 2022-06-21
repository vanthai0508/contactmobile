import { StyleSheet,Text,Modal,Image,View } from 'react-native';
export default function ContactItem( props ){
    const {contact} = props;
    return(
        <View>
        <View style={styles.divier}/>
        <View style={styles.container}>
            <Image source={{uri:contact.thumbnails}} style={styles.image}/>
            <Text style={{padding:14,fontSize:18,paddingLeft:22,color:'black',fontWeight:'400'}}>{contact.name}</Text>
        </View>
        </View>
    );
}
const styles =StyleSheet.create({
container:{
  flex: 1,
  flexDirection:'row',
  paddingTop:8,
  paddingBottom: 8,
  paddingLeft: 12,
  marginTop:4,
  marginHorizontal:12,
  backgroundColor:'#455d7a'
  ,borderRadius: 12
},
image:{
    width:50,
    height:50,
    borderRadius:8,
    shadowOpacity:0.3,
    shadowRadius:8},
});