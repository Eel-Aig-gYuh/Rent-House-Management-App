import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';;
import { useNavigation } from '@react-navigation/native';
import Styles from '../../../constants/styles/Styles';
import { Colors } from '../../../constants/color/Colors';
import MessageList from './Message/MessageList';


// Icon
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';


export default function Profile() {
    
    const [isFocused, setIsFocused] = useState(false);
    const navigater = useNavigation();
    const [messages, setMessages] = useState([]); 

    

    return (
        <View style={{ height: '100%', backgroundColor: "white", paddingTop: 15 }}>
            <View style={[{
                backgroundColor: "white", height: "10%", borderBottomLeftRadius: 15, borderBottomRightRadius: 15
            }, Styles.shadow]}>
                <View>
                    <View style={{
                        display: 'flex', flexDirection: 'row', alignContent: 'center', width: '100%',
                    }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{
                                textAlign: 'left', marginRight: 10, marginTop: 10, marginLeft: 10,
                                fontSize: 20, fontWeight: 'bold'
                            }}>Chats</Text>
                        </View>


                        <View style={{ width: '35%' }}>
                            <TouchableOpacity>
                                <AntDesign name="hearto" size={24} color={"black"}
                                    style={{ textAlign: 'right', marginLeft: '48%', marginTop: 15 }} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={[{
                            height: 30, width: 30, backgroundColor: "white", borderRadius: 10,
                            borderColor: Colors.LightGray, borderWidth: 3, marginTop: 10, marginLeft: 15
                        }]}>
                            <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                source={require('./../../../assets/images/avatar1.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            <View style={{ height: '90%', }}>
                <View style={{ flexDirection: 'row', height: '100%'}}>
                    <View style={[{ width: '30%', backgroundColor: Colors.SearchButton, height: '100%', borderTopLeftRadius: 15, marginTop: 10, borderBottomLeftRadius: 10, marginRight: 5}, Styles.shadowRight]}>
                        <ScrollView>
                            <TouchableOpacity style={[{backgroundColor: 'white', width: '100%', height: 50, marginTop: 10, borderTopRightRadius: 15}, Styles.shadow]}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={[{
                                        height: 30, width: 30, backgroundColor: "white", borderRadius: 10,
                                        borderColor: Colors.LightGray, borderWidth: 3, marginTop: 7, marginLeft: 5
                                    }]}>
                                        <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                            source={require('./../../../assets/images/avatar1.png')} />
                                    </View>

                                    <View style={{flexDirection: 'column', marginTop: 6, alignContent: 'center'}}>
                                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>User Name</Text>
                                        <Text style={{fontSize: 10, fontWeight: 'italic'}}>Onl</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>




                            <TouchableOpacity style={{backgroundColor: 'white', width: '100%', height: 50, marginTop: 10, borderTopRightRadius: 15}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={[{
                                        height: 30, width: 30, backgroundColor: "white", borderRadius: 10,
                                        borderColor: Colors.LightGray, borderWidth: 3, marginTop: 7, marginLeft: 5
                                    }]}>
                                        <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                            source={require('./../../../assets/images/avatar1.png')} />
                                    </View>

                                    <View style={{flexDirection: 'column', marginTop: 6, alignContent: 'center'}}>
                                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>User Name</Text>
                                        <Text style={{fontSize: 10, fontWeight: 'italic'}}>Onl</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>



                            <TouchableOpacity style={{backgroundColor: 'white', width: '100%', height: 50, marginTop: 10, borderTopRightRadius: 15}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={[{
                                        height: 30, width: 30, backgroundColor: "white", borderRadius: 10,
                                        borderColor: Colors.LightGray, borderWidth: 3, marginTop: 7, marginLeft: 5
                                    }]}>
                                        <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                            source={require('./../../../assets/images/avatar1.png')} />
                                    </View>

                                    <View style={{flexDirection: 'column', marginTop: 6, alignContent: 'center'}}>
                                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>User Name</Text>
                                        <Text style={{fontSize: 10, fontWeight: 'italic'}}>Onl</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>

                                    
                    
                    <View style={{ width: '70%', backgroundColor: 'white', height: '100%', padding: 10, borderTopRightRadius: 15, marginTop: 10 }}>
                        <View style={{height: '90%'}}>
                            <MessageList messages={messages}/>
                        </View>
                        <View style={{height: '10%'}}>
                            <View style={[{flexDirection: 'row', marginLeft: -8, backgroundColor: "white", borderRadius: 15}, Styles.shadowAll]}>
                                {!isFocused && (
                                    <View style={{width: '40%', flexDirection: 'row', marginTop: 3}}>
                                        <TouchableOpacity style={{ width: '30%', marginLeft: 5}}>
                                            <FontAwesome5 name="plus-circle" size={24} color="black" style={{ marginTop: 5 }} />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{ width: '30%', marginLeft: 5 }}>
                                            
                                            <Entypo name="camera" size={24} color="black" style={{ marginTop: 5 }} />
                                        </TouchableOpacity>
                                    
                                        <TouchableOpacity style={{ width: '30%', marginLeft: 5 }}>
                                            
                                            <FontAwesome6 name="image" size={24} color="black" style={{ marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                
                                <View style={{ marginLeft: 10, width: isFocused ? '350': '55%',}}
                                >
                                    <View style={{flexDirection: 'row'}}>
                                        <TextInput
                                            onFocus={() => setIsFocused(true)} 
                                            onBlur={() => setIsFocused(false)} 
                                            placeholder='Aa ...' 
                                            style={[ isFocused && Styles.textInputFocused,
                                                {   backgroundColor: "white", 
                                                    borderRadius: 15, marginLeft: 5, width: !isFocused ? '100%': '60%'
                                                }
                                            ]}/>
                                        {isFocused && (
                                            <TouchableOpacity style={[{width: '10%', marginLeft: -30}]}
                                            >
                                                <Feather name="send" size={24} color="black" style={{marginTop: 10}}/>
                                            </TouchableOpacity>
                                        )}
    
                                    </View>
                                </View>

                                {!isFocused && (
                                    <TouchableOpacity style={[{ width: '10%', marginLeft: -30 }]}
                                    >
                                        <Feather name="send" size={24} color="black" style={{ marginTop: 10 }} />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </View>


                </View>
            </View>
        </View>
    );
}