import react from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { FontAwesome } from '@expo/vector-icons';
import EditScreen from "./src/screens/EditScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Blog">
        <Stack.Screen options= {({ navigation }) => ({
            title:'Blogs', 
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}><Feather name="plus" size={30}/></TouchableOpacity> 
          })}
          name="Blog" 
          component={IndexScreen} 
        />
        <Stack.Screen options= {({ navigation,route }) => ({
            title:'Details', 
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:route.params.id})}><FontAwesome name="pencil" size={24} color="black" /></TouchableOpacity> 
          })} 
          name="Details" 
          component={ShowScreen} 
        />
        <Stack.Screen 
          options={{title:'Create'}}
          name="Create" 
          component={CreateScreen} 
        />
         <Stack.Screen 
          options={{title:'Edit'}}
          name="Edit" 
          component={EditScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <Provider>
        <App />
    </Provider>
}