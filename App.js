import HomeScreen from "./HomeScreen";
import ContactDetails from "./ContactDetails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack =createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#233142'},headerTintColor: '#fff',}} initialRouteName="Home" >
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="Details" component={ContactDetails}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}


