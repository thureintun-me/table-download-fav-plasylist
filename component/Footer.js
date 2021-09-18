import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { exp } from 'react-native/Libraries/Animated/src/Easing';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Footer = ()=>{
    return(
        <View style={styles.container}>
            <Entypo name="home" size={24} color="white" />
            <Ionicons name="md-search-sharp" size={24} color="white" />
            <Feather name="menu" size={24} color="white" />
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container:{
            
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'flex-end'
        }
    }
)

export default Footer;
