import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { exp } from 'react-native/Libraries/Animated/src/Easing';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <AntDesign name="home" size={30} color="white" />
                <Text style={{ color: 'white',fontSize:12,fontFamily:'gotham-book',marginTop:5  }}>Home</Text>
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name="md-search-sharp" size={30} color="white" />
                <Text style={{ color: 'white' ,fontSize:12,fontFamily:'gotham-book',marginTop:5 }}>Search</Text>
            </View>
            <View style={styles.iconContainer}>
                <Feather name="menu" size={30} color="white" />
                <Text style={{ color: 'white',fontSize:12,fontFamily:'gotham-book',marginTop:5 }}>Library</Text>

            </View>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
           
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
           
           
           
           
        },
        iconContainer:{
            
            alignItems:'center',
            justifyContent:'center',
            marginBottom:8,
        }
    }
)

export default Footer;
