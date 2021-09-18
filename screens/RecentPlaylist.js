import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Song from '../components/Song';
import Cinematicus from '../assets/images/cinematics.jpeg'
import HappyForU from '../assets/images/HappyForU.jpeg'
import LoveSomeone from '../assets/images/LoveSomeone.jpeg'
import NoregianWood from '../assets/images/NorwegianWood.jpeg'
import OhMyTT from '../assets/images/OhMyTT.jpeg'
import Photograph from '../assets/images/Photograph.jpeg'
import Circle from '../assets/images/Circle.jpeg'
import CheatingOnU from '../assets/images/CheatingOnU.jpeg'

const RecentPlaylist = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Song title='Happy For You' singer='Lukas Graham' source={HappyForU} />
                <Song title='Norwegian Wood' singer='The Beatles' source={NoregianWood} />
                <Song title='Photograph' singer='Ed SHeeran' source={Photograph} />
                <Song title='Circle' singer='Post Malone' source={Circle} />
                <Song title='Cheating On U' singer='Charlie Puth' source={CheatingOnU} />
                <Song title='Cienmaticus' singer='Kyar Pauk' source={Cinematicus}></Song>
                <Song title='Oh My T_T' singer='Twice' source={OhMyTT} />
                <Song title='Love Someone' singer='Lukas Graham' source={LoveSomeone} />

            </View>


        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {

            flex: 1,
            backgroundColor: "#000"


        },
        contentContainer: {
            marginTop: 15,

        }

    }
)

export default RecentPlaylist;