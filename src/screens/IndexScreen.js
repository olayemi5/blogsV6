import react, {useContext} from "react";
import {View, Text, StyleSheet,FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {

    const navigation = useNavigation();
    const {state, addBlogPost,deleteBlogPost} = useContext(Context)

    return (
       <View>
            <FlatList 
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', {id:item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <FontAwesome style={styles.icon} name="trash-o" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={state => state.id}
                data={state}
            />
       </View>
    )
};

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 20,
        borderBottomWidth:1,
        borderColor:'gray',
        paddingHorizontal:10
    },
    title:{
        fontSize: 18
    },
    icon:{
        fontSize:24
    },
    addBtn:{
        marginVertical:20
    }
})

export default IndexScreen;