import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import PlaylistContainer from '../components/PlaylistContainer';
import { AntDesign } from '@expo/vector-icons';

const Playlist = (props)=>{

    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
            <View style={styles.createPlaylistContainer}>
            <Feather name="plus" size={30} color="red" />
            <Text style={styles.text}>Create Playlist</Text>
            </View>
            <View style={styles.playlistContainer}>
                <PlaylistContainer style={styles.bottom}></PlaylistContainer>
                <PlaylistContainer></PlaylistContainer>
                <PlaylistContainer></PlaylistContainer>
            </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{

            flex:1,
            
            backgroundColor:"#000",
        },
        contentContainer:{
            flex:1,
            marginTop:76,
            justifyContent:'flex-start',
            alignItems:'flex-start',
        },
        createPlaylistContainer:{
            flexDirection:'row'
        },
        text:{
            paddingTop:9,
            paddingLeft:15,
            fontFamily:'gotham-book',
            fontSize:14,
            color:'white',

        },
        playlistContainer:{
            marginTop:45.19,
        },
        bottom:{
            marginBottom:18,
        }
    }
)

export default Playlist;