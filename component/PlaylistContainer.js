import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlaylistContainer = (props) => {
    return (
        <View style={styles.container}>

            <View>
                <AntDesign name="pluscircleo" size={40} color="white" style={{ marginLeft: 13 }} />
            </View>



            <View style={styles.textContainer}>

                <Text style={styles.title}>Playlist 1</Text>
                <Text style={styles.totalSong}>11 songs</Text>



            </View>

            <View style={{paddingTop:10}}>
                <MaterialCommunityIcons name="greater-than" size={25} color="white" />

            </View>





        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom:18,

        },
        textContainer: {

            width:260,
            height:48.3,
            paddingTop: 10,
            marginLeft: 28,
            borderBottomColor: 'rgba(255,255,255,0.4)',
            borderBottomWidth: 1,
        },
        title: {
            
            fontFamily:"gotham-book",
            fontSize:14,
            color:'white'
        },
        totalSong: {
            
            fontFamily:"gotham-book",
            fontSize:11,
            color:'rgba(255,255,255,0.28)'
        }

    }
)

export default PlaylistContainer;