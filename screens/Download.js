import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

import Song from '../components/Song';
import Cinematicus from '../assets/images/cinematics.jpeg'
import HappyForU from '../assets/images/HappyForU.jpeg'
import LoveSomeone from '../assets/images/LoveSomeone.jpeg'
import NoregianWood from '../assets/images/NorwegianWood.jpeg'
import OhMyTT from '../assets/images/OhMyTT.jpeg'
import Photograph from '../assets/images/Photograph.jpeg'
import Circle from '../assets/images/Circle.jpeg'
import CheatingOnU from '../assets/images/CheatingOnU.jpeg'
import Footer from '../components/Footer';

const Download = (props) => {

    const songs =[
        {
            title:'Cheating On You',
            singer:'Charlie Puth',
            source:CheatingOnU

        },
        {
            title:'Cinematicus',
            singer:'Kyar Pauk',
            source:Cinematicus
        },
        {
            title:'Happy For You',
            singer:'Lukas Graham',
            source:HappyForU
        },
        {
            title:'Norwegian Wood',
            singer:'The Beatles',
            source:NoregianWood
        },
        {
            title:'Love Someone',
            singer:'Lukas Graham',
            source:LoveSomeone
        },
        {
            title:'Circle',
            singer:'Post Malone',
            source:Circle
        },
        {
            title:'Photograph',
            singer:'Ed Sheeran',
            source:Photograph
        },
        {
            title:'Oh My TT',
            singer:'Twice',
            source:OhMyTT
        },
        {
            title:'Norwegian Wood',
            singer:'The Beatles',
            source:NoregianWood
        },
        {
            title:'Love Someone',
            singer:'Lukas Graham',
            source:LoveSomeone
        },
        {
            title:'Circle',
            singer:'Post Malone',
            source:Circle
        },
        {
            title:'Photograph',
            singer:'Ed Sheeran',
            source:Photograph
        },
        {
            title:'Oh My TT',
            singer:'Twice',
            source:OhMyTT
        }, {
            title:'Norwegian Wood',
            singer:'The Beatles',
            source:NoregianWood
        },
        {
            title:'Love Someone',
            singer:'Lukas Graham',
            source:LoveSomeone
        },
        {
            title:'Circle',
            singer:'Post Malone',
            source:Circle
        },
        {
            title:'Photograph',
            singer:'Ed Sheeran',
            source:Photograph
        },
        {
            title:'Oh My TT',
            singer:'Twice',
            source:OhMyTT
        }

        
    ]

    const renderItem = ({item})=>{
        return(
            <Song title={item.title} singer={item.singer} source={item.source} />
        )
        
    }

    return (
        
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                
                    <FlatList data={songs} renderItem={renderItem} >
                    </FlatList>
            </ScrollView>



            
        </View>
       
       
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: "#000",
            
        },
        contentContainer: {
            marginTop: 15,
            
        }


    }

)

export default Download;