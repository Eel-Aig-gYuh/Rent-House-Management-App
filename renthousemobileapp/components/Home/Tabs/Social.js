import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';;
import { useNavigation } from '@react-navigation/native';
import Styles from '../../../constants/styles/Styles';
import Colors from '../../../constants/color/Colors';


// Icon
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export default function Social(){

    const openPostDetail = () => {

    }

    const navigater = useNavigation();

    return (
        <View style={{padding: 20, paddingTop: 30, flex: 1, height: '100%',
        backgroundColor: 'white', borderRadius: 15}}>
            
            <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center',
                
            }}>
                <Text style={{textAlign: 'left', marginRight: 10,
                    fontSize: 20, fontWeight: 'bold'
                }}>Rent House</Text>


                <TouchableOpacity>
                    <AntDesign name="hearto" size={24} color={"black"}
                    style={{ textAlign:'right', marginLeft: '45%'}}/>
                </TouchableOpacity> 

                <TouchableOpacity>
                    <Feather name="plus-square" size={24} color="black" 
                    style={{ textAlign: 'right', marginLeft: 15}}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={{marginTop: 30}}>
                <View style={{flex: 1}}>
                    <View style={[Styles.post]}>
                        <View style={{ height: 30, marginTop: 15}}>
                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 10, paddingBottom: 20 }}>
                                <View>
                                    <Image source={require('./../../../assets/images/avatar1.png')}
                                        style={[Styles.avatar, { marginLeft: 0, marginTop: 0, padding: 20}]} />            
                                </View>

                                <View style={{marginLeft: -30, marginTop: 33, marginRight: 10}}>
                                    <TouchableOpacity>
                                        <Entypo name="circle-with-plus" size={15} color="black" />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: '500' }}>
                                        User Name
                                    </Text>

                                    <Text style={{ fontSize: 10 }}>
                                        Date
                                    </Text>
                                </View>

                                <TouchableOpacity
                                >
                                    <View style={{marginLeft: 100}}>
                                        <Entypo name="dots-three-horizontal" size={20} color="black"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={Styles.contentPost}>
                            <Text> aldjlfjksadlfajslflajkfjlkdsafajlfajslkfdaj;lfsajfd </Text>
                        </View>

                        <View style={{flexDirection: 'row', padding: 1}}>
                            <TouchableOpacity style={Styles.likeContainer}>
                                <Fontisto name="heart-alt" size={24} color="tomato" />
                            </TouchableOpacity>
                            <Text style={Styles.txt_count}>0</Text>

                            <TouchableOpacity style={Styles.likeContainer}
                                onPress={openPostDetail()}
                            >
                                <FontAwesome5 name="comment-alt" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={Styles.txt_count}>0</Text>

                            <TouchableOpacity style={Styles.likeContainer}>
                                <FontAwesome6 name="share-square" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>



                    

                    <View style={[Styles.post]}>
                        <View style={{ height: 30, marginTop: 15}}>
                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 10, paddingBottom: 20 }}>
                                <View>
                                    <Image source={require('./../../../assets/images/avatar1.png')}
                                        style={[Styles.avatar, { marginLeft: 0, marginTop: 0, padding: 20}]} />            
                                </View>

                                <View style={{marginLeft: -30, marginTop: 33, marginRight: 10}}>
                                    <TouchableOpacity>
                                        <Entypo name="circle-with-plus" size={15} color="black" />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: '500' }}>
                                        User Name
                                    </Text>

                                    <Text style={{ fontSize: 10 }}>
                                        Date
                                    </Text>
                                </View>

                                <TouchableOpacity
                                
                                >
                                    <View style={{marginLeft: 100}}>
                                        <Entypo name="dots-three-horizontal" size={20} color="black"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={Styles.contentPost}>
                            <Text>haldfhlsfdjlkasjfdkjalsfjaslfj</Text>
                        </View>

                        <View style={Styles.imgsContainer}>
                            <Image style={Styles.imgsPost} source={require('./../../../assets/images/house2.png')}>
                            </Image>
                        </View>

                        <View style={{flexDirection: 'row', padding: 1}}>
                            <TouchableOpacity style={Styles.likeContainer}>
                                <Fontisto name="heart-alt" size={24} color="tomato" />
                            </TouchableOpacity>
                            <Text style={Styles.txt_count}>0</Text>

                            <TouchableOpacity style={Styles.likeContainer}>
                                <FontAwesome5 name="comment-alt" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={Styles.txt_count}>0</Text>
                        </View>

                    </View>

                    <View style={[Styles.post]}>
                        <View style={{ height: 30, marginTop: 15}}>
                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 10, paddingBottom: 20 }}>
                                <View>
                                    <Image source={require('./../../../assets/images/avatar1.png')}
                                        style={[Styles.avatar, { marginLeft: 0, marginTop: 0, padding: 20}]} />            
                                </View>

                                <View style={{marginLeft: -30, marginTop: 33, marginRight: 10}}>
                                    <TouchableOpacity>
                                        <Entypo name="circle-with-plus" size={15} color="black" />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: '500' }}>
                                        User Name
                                    </Text>

                                    <Text style={{ fontSize: 10 }}>
                                        Date
                                    </Text>
                                </View>

                                <TouchableOpacity
                                
                                >
                                    <View style={{marginLeft: 100}}>
                                        <Entypo name="dots-three-horizontal" size={20} color="black"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={Styles.contentPost}>
                            <Text>haldfhlsfdjlkasjfdkjalsfjaslfj</Text>
                        </View>

                        <View style={Styles.imgsContainer}>
                            <Image style={Styles.imgsPost} source={require('./../../../assets/images/house3.png')}>
                            </Image>
                        </View>

                        <View style={{flexDirection: 'row', padding: 1}}>
                            <TouchableOpacity style={Styles.likeContainer}>
                                <Fontisto name="heart-alt" size={24} color="tomato" />
                            </TouchableOpacity>
                            <Text style={Styles.txt_count}>0</Text>

                            <TouchableOpacity style={Styles.likeContainer}>
                                <FontAwesome5 name="comment-alt" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={Styles.txt_count}>0</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
}