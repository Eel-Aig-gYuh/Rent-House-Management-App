import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';;
import { useNavigation } from '@react-navigation/native';
import Styles from '../../../constants/styles/Styles';
import { Colors } from '../../../constants/color/Colors'
import { Avatar } from 'react-native-elements';


// Icon
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Profile(){
    const navigater = useNavigation();


    return (
        <View style={{padding: 20, paddingTop: 30, flex: 1, height: '100%',
        backgroundColor: 'white',}}>
            
            <View style={{height: '30%'}}>
                <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center',
                }}>
                    <Text style={{textAlign: 'left', marginRight: 10,
                        fontSize: 20, fontWeight: 'bold'
                    }}>User Name</Text>


                    <TouchableOpacity
                        onPress={() => navigater.navigate('CreatePost')}
                    >
                        <Feather name="plus-square" size={24} color="black" 
                        style={{ textAlign:'right', marginLeft: '45%'}}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigater.navigate('Login')}
                    >
                        <AntDesign name="logout" size={24} color="tomato" backgroundColor="#fee2e2"
                        style={{ textAlign: 'right', marginLeft: 15, borderRadius: 99}}/>
                    </TouchableOpacity>

                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: '30%'}}>
                        <Image source={require('./../../../assets/images/avatar1.png')} 
                        style={Styles.avatar}/>

                        <TouchableOpacity
                        onPress={() => navigater.navigate('ProfileDetail')}>
                            <FontAwesome6 name="pen-to-square" size={15} color="black" style={Styles.editIcon}/>
                        </TouchableOpacity>

                        <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center', paddingLeft: 20}}>Full Name</Text>
                    </View>
                </View>
            </View>

            <View style={{height: '20%', paddingTop: 40,}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View>
                        <FontAwesome5 name="list" size={24} color="black" />
                    </View>

                    <View>
                        <MaterialIcons name="favorite" size={24} color={Colors.Red} />
                    </View>
                </View>
            </View>

            <View style={{height: '70%'}}>
            <View style={{ backgroundColor: Colors.SearchButton, height: '80%', borderRadius: 15, marginTop: -15 }}>
                    <ScrollView>
                        <TouchableOpacity style={{
                            backgroundColor: "white", minHeight: 100, maxHeight: 150, borderRadius: 15, 
                            marginBottom: 5, marginTop: 5,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.5,
                            elevation: 7,
                            
                        }}>
                            <View style={{ flexDirection: 'row'}}>
                                <TouchableOpacity style={[{
                                    height: 100, width: 100, backgroundColor: "white", margin: 5, borderRadius: 10,
                                    borderColor: Colors.LightGray, borderWidth: 3,
                                }]}>
                                    <Image style={{ width: 95, height: 95, borderRadius: 10, alignSelf: 'center' }}
                                        source={require('./../../../assets/images/house3.png')} />
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Tên Phòng Thuê</Text>
                                    <Text style={{ fontSize: 10 }}>Mô tả</Text>
                                    <Text style={{ fontWeight: 'bold', color: Colors.SearchButton }}>Giá</Text>
                                    <Text style={{ fontSize: 10 }}>Địa điểm</Text>

                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ width: '20%' }}>
                                            <TouchableOpacity style={[{
                                                height: 30, width: 30, backgroundColor: "white", margin: 5, borderRadius: 10,
                                                borderColor: Colors.LightGray, borderWidth: 3
                                            }]}>
                                                <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                                    source={require('./../../../assets/images/avatar1.png')} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ width: '50%' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text>Tên User</Text>
                                                <Text style={{ fontSize: 10 }}>Số tin đăng</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <AntDesign style={{ marginTop: 10 }}
                                                name="hearto" size={24} color="tomato" />
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </View>
                        </TouchableOpacity>



                        <TouchableOpacity style={{
                            backgroundColor: "white", minHeight: 100, maxHeight: 150, borderRadius: 15, marginBottom: 5,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.5,
                            elevation: 7,
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={[{
                                    height: 100, width: 100, backgroundColor: "white", margin: 5, borderRadius: 10,
                                    borderColor: Colors.LightGray, borderWidth: 3,
                                }]}>
                                    <Image style={{ width: 95, height: 95, borderRadius: 10, alignSelf: 'center' }}
                                        source={require('./../../../assets/images/house4.png')} />
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Tên Phòng Thuê</Text>
                                    <Text style={{ fontSize: 10 }}>Mô tả</Text>
                                    <Text style={{ fontWeight: 'bold', color: Colors.SearchButton }}>Giá</Text>
                                    <Text style={{ fontSize: 10 }}>Địa điểm</Text>

                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ width: '20%' }}>
                                            <TouchableOpacity style={[{
                                                height: 30, width: 30, backgroundColor: "white", margin: 5, borderRadius: 10,
                                                borderColor: Colors.LightGray, borderWidth: 3
                                            }]}>
                                                <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                                    source={require('./../../../assets/images/avatar1.png')} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ width: '50%' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text>Tên User</Text>
                                                <Text style={{ fontSize: 10 }}>Số tin đăng</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <AntDesign style={{ marginTop: 10 }}
                                                name="hearto" size={24} color="tomato" />
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </View>
                        </TouchableOpacity>



                        <TouchableOpacity style={{
                            backgroundColor: "white", minHeight: 100, maxHeight: 150, borderRadius: 15, marginBottom: 5,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.5,
                            elevation: 7,
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={[{
                                    height: 100, width: 100, backgroundColor: "white", margin: 5, borderRadius: 10,
                                    borderColor: Colors.LightGray, borderWidth: 3,
                                }]}>
                                    <Image style={{ width: 95, height: 95, borderRadius: 10, alignSelf: 'center' }}
                                        source={require('./../../../assets/images/house1.png')} />
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Tên Phòng Thuê</Text>
                                    <Text style={{ fontSize: 10 }}>Mô tả</Text>
                                    <Text style={{ fontWeight: 'bold', color: Colors.SearchButton }}>Giá</Text>
                                    <Text style={{ fontSize: 10 }}>Địa điểm</Text>

                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ width: '20%' }}>
                                            <TouchableOpacity style={[{
                                                height: 30, width: 30, backgroundColor: "white", margin: 5, borderRadius: 10,
                                                borderColor: Colors.LightGray, borderWidth: 3
                                            }]}>
                                                <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                                    source={require('./../../../assets/images/avatar1.png')} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ width: '50%' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text>Tên User</Text>
                                                <Text style={{ fontSize: 10 }}>Số tin đăng</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <AntDesign style={{ marginTop: 10 }}
                                                name="hearto" size={24} color="tomato" />
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </View>
                        </TouchableOpacity>




                        <TouchableOpacity style={{
                            backgroundColor: "white", minHeight: 100, maxHeight: 150, borderRadius: 15, marginBottom: 5,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.5,
                            elevation: 7,
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={[{
                                    height: 100, width: 100, backgroundColor: "white", margin: 5, borderRadius: 10,
                                    borderColor: Colors.LightGray, borderWidth: 3,
                                }]}>
                                    <Image style={{ width: 95, height: 95, borderRadius: 10, alignSelf: 'center' }}
                                        source={require('./../../../assets/images/house3.png')} />
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Tên Phòng Thuê</Text>
                                    <Text style={{ fontSize: 10 }}>Mô tả</Text>
                                    <Text style={{ fontWeight: 'bold', color: Colors.SearchButton }}>Giá</Text>
                                    <Text style={{ fontSize: 10 }}>Địa điểm</Text>

                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ width: '20%' }}>
                                            <TouchableOpacity style={[{
                                                height: 30, width: 30, backgroundColor: "white", margin: 5, borderRadius: 10,
                                                borderColor: Colors.LightGray, borderWidth: 3
                                            }]}>
                                                <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                                    source={require('./../../../assets/images/avatar1.png')} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ width: '50%' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text>Tên User</Text>
                                                <Text style={{ fontSize: 10 }}>Số tin đăng</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <AntDesign style={{ marginTop: 10 }}
                                                name="hearto" size={24} color="tomato" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>




                        <TouchableOpacity style={{
                            backgroundColor: "white", minHeight: 100, maxHeight: 150, borderRadius: 15, marginBottom: 5,
                            shadowRadius: 5,
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.5,
                            elevation: 7,
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={[{
                                    height: 100, width: 100, backgroundColor: "white", margin: 5, borderRadius: 10,
                                    borderColor: Colors.LightGray, borderWidth: 3,
                                }]}>
                                    <Image style={{ width: 95, height: 95, borderRadius: 10, alignSelf: 'center' }}
                                        source={require('./../../../assets/images/house3.png')} />
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Tên Phòng Thuê</Text>
                                    <Text style={{ fontSize: 10 }}>Mô tả</Text>
                                    <Text style={{ fontWeight: 'bold', color: Colors.SearchButton }}>Giá</Text>
                                    <Text style={{ fontSize: 10 }}>Địa điểm</Text>

                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ width: '20%' }}>
                                            <TouchableOpacity style={[{
                                                height: 30, width: 30, backgroundColor: "white", margin: 5, borderRadius: 10,
                                                borderColor: Colors.LightGray, borderWidth: 3
                                            }]}>
                                                <Image style={{ width: 30, height: 30, borderRadius: 10, alignSelf: 'center' }}
                                                    source={require('./../../../assets/images/avatar1.png')} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ width: '50%' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text>Tên User</Text>
                                                <Text style={{ fontSize: 10 }}>Số tin đăng</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity>
                                            <AntDesign style={{ marginTop: 10 }}
                                                name="hearto" size={24} color="tomato" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}