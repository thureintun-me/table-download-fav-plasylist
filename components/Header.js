import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Download from '../screens/Download';
import Favourtie from '../screens/Fabourite';
import Playlist from '../screens/MyPlayList';
import { Ionicons } from '@expo/vector-icons';
import RecentPlaylist from '../screens/RecentPlaylist';



const Top = createMaterialTopTabNavigator();

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}


const Header = () => {

    return (
        <NavigationContainer>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: '25px', fontFamily: "gotham-medium" }}>Your Library</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Ionicons name="md-search-sharp" size={30} color="white" />
                    <Ionicons name="add-sharp" size={30} color="white" />
                </View>

            </View>
            <Top.Navigator screenOptions={{
               
               
                
                tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
                tabBarActiveTintColor: 'white',
                tabBarIndicatorStyle: { backgroundColor: 'black' },
                tabBarStyle: { backgroundColor: 'black' },





            }}>
                
              

                <Top.Screen name="Downalod" component={Download} options={{
                    tabBarLabel: ({focused, tintColor}) => (
                        <View style={{borderColor:focused?'red':'rgba(255,255,255,0.4)',
                            borderWidth:1,width:'90px',height:22,borderRadius: 8, alignItems:
                            'center' ,justifyContent:'center',
                           }}>
                          <Text style={{color:'white',fontFamily: "gotham-book",fontSize:10}}>Download</Text>
                        </View>
                      ),
                }
                     
                }
                     
            />

                
                <Top.Screen name="Faourtie" component={Favourtie} options={{
                    tabBarLabel: ({focused, tintColor}) => (
                        <View style={{borderColor:focused?'red':'rgba(255,255,255,0.4)',
                            borderWidth:1,width:'90px',height:22,borderRadius: 8,alignItems:
                            'center' ,justifyContent:'center',
                           }}>
                          <Text style={{color:'white',fontFamily: "gotham-book",fontSize:10}}>Favourtie</Text>
                        </View>
                      ),
                }
                     
                } />
                <Top.Screen name="My Playlist" component={Playlist} options={{
                    tabBarLabel: ({focused, tintColor}) => (
                        <View style={{borderColor:focused?'red':'rgba(255,255,255,0.4)',
                            borderWidth:1,width:'90px',height:22,borderRadius: 8, alignItems:
                            'center' ,justifyContent:'center',
                           }}>
                          <Text style={{color:'white',fontFamily: "gotham-book",fontSize:10}}>My Playslit</Text>
                        </View>
                      ),
                }
                     
                }/>
                <Top.Screen name="Recent Playslit" component={RecentPlaylist} options={{
                    tabBarLabel: ({focused, tintColor}) => (
                        <View style={{borderColor:focused?'red':'rgba(255,255,255,0.4)',
                            borderWidth:1,width:'90px',height:22,borderRadius: 8, alignItems:
                            'center' ,justifyContent:'center',
                           }}>
                          <Text style={{color:'white',fontFamily: "gotham-book",fontSize:10}}>RecentPlaylist</Text>
                        </View>
                      ),
                }
                     
                }/>

            </Top.Navigator>
        </NavigationContainer>
    )
}

export default Header;
