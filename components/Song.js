import { processFontFamily } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import cinematics from '../assets/images/cinematics.jpeg'

const Song = (props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.album}>
                <Image source={props.source} style={styles.imageContainer}/>
                
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.singer}>{props.singer}</Text>
                    <View style={styles.myMargin}></View>
                </View>
                
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            
            marginTop:10, 
           
        },
        text:{
            color:'white'
        },
        album:{
           flexDirection:'row',
           width:378.58,
           height:52,
           marginLeft:13,
        },
        textContainer:{
           flexDirection:'column',
           width:'310.63px',
           height:'41.34px',
           marginVertical:'10px',
           marginLeft:20,
           
          
        },
        myMargin:{
            marginTop:13,
            width:'260px', 
            height:'0.1px', 
            backgroundColor:"rgba(255,255,255,0.08)" 
        },
        imageContainer:{
         width:52,
         height:52,   
         borderRadius:6,
        },
        title:{
            fontSize:15,
            color:'white',
            fontFamily:'gotham-book',
            marginBottom:3,

        },
        singer:{
            fontSize:10,
            color:'rgba(255,255,255,0.4)',
            fontFamily:'gotham-book'
        }
    }
)


export default Song;