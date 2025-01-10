import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, InputText, TextInput, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../constants/color/Colors';
import Styles from '../../../constants/styles/Styles'

// Icon
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


import PopUpMenuFilter from './Discover/PopUpMenuFilter';
import PopUpMenuLocation from './Discover/PopUpMenuLocation';


export default function Discover() {

    const [isFilterClick, setIsFilterClick] = useState(false);
    const [isLocationClick, setIsLocationClick] = useState(false);


    const toggleFilterMenu = () => setIsFilterClick(!isFilterClick);
    const toggleLocationMenu = () => setIsLocationClick(!isLocationClick);
    const navigater = useNavigation();

    return (
        <View style={{
            maxHeight: '100%', maxWidth: '100%', height: '100%',
            paddingTop: 10, marginTop: 10, paddingLeft: 15, paddingRight: 10
        }}>
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
                            }}>Discover</Text>
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

            <View style={{ height: "100%" }}>
                <View style={{
                    padding: 0, backgroundColor: 'lightgray', flexDirection: 'row',
                    borderRadius: 15, marginTop: 10, height: '8%'
                }}>
                    <TextInput placeholder='Bạn muốn tìm gì?' style={{ marginLeft: 20, width: '77%' }} />

                    <TouchableOpacity style={{ paddingLeft: 5, paddingRight: 13, borderRadius: 15, margin: 3 }}>
                        <Feather name="search" size={24} color={Colors.SearchButton} style={{ marginTop: 5, marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>




                <View style={{ height: '12%', justifyContent: 'space-between', marginTop: 5 }}>
                    <View style={[{
                        flexDirection: 'row', backgroundColor: "white", borderRadius: 7, marginTop: 5, padding: 10,
                        width: '100%'
                    }]}>
                        <View style={{ width: '20%' }}>
                            <TouchableOpacity style={{
                                padding: 3, paddingLeft: 2, paddingRight: 5, alignItems: 'center',
                                flexDirection: 'row', backgroundColor: "lightgray", borderRadius: 5, marginRight: 8
                            }}
                            onPress={toggleFilterMenu}
                            >
                                <Feather name="filter" size={20} color="gray" style={{ marginRight: 5 }} />
                                <Text style={{ color: "black" }}>Lọc</Text>
                            </TouchableOpacity>
                            <PopUpMenuFilter
                                isVisible={isFilterClick}
                                onClose={toggleFilterMenu}
                            />
                        </View>


                        <View style={{ width: '29%' }}>
                            <TouchableOpacity style={{
                                padding: 3, paddingLeft: 5, paddingRight: 5, alignItems: 'center', width: '100%',
                                flexDirection: 'row', backgroundColor: "lightgray", borderRadius: 5, marginRight: 8,
                            }}
                            onPress={toggleLocationMenu}
                            >

                                <Text style={{ color: "black", marginRight: 5 }}>Toàn quốc</Text>
                                <AntDesign name="caretdown" size={10} color="black" />
                            </TouchableOpacity>
                            <PopUpMenuLocation
                                isVisible={isLocationClick}
                                onClose={toggleLocationMenu}
                            />
                        </View>


                        <View style={{ width: '18%', marginLeft: 8, marginLeft: 8}}>
                            <TouchableOpacity style={{
                                padding: 3, paddingLeft: 5, paddingRight: 5, alignItems: 'center',
                                flexDirection: 'row', backgroundColor: "lightgray", borderRadius: 5, marginRight: 8,
                            }}>

                                <Text style={{ color: "black", marginRight: 5 }}>Giá</Text>
                                <AntDesign name="caretdown" size={10} color="black" />
                            </TouchableOpacity>
                        </View>


                        


                        <View style={{ width: '34%', marginLeft: -8}}>
                            <TouchableOpacity style={{
                                alignItems: 'center', alignSelf: 'flex-end',
                                flexDirection: 'row', backgroundColor: "tomato", borderRadius: 5, padding: 3, paddingLeft: 5, paddingRight: 5, marginRight: 8
                            }}
                            onPress={() => navigater.navigate('CreateNew')}
                            >

                                <Text style={{ color: "white", marginRight: 5, fontWeight: 'bold' }}>Đăng tin</Text>
                                <FontAwesome5 name="plus-square" size={20} color="white" />

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>




                <View style={{ height: '12%', justifyContent: 'space-between',}}>
                    <View style={[{
                        flexDirection: 'row', backgroundColor: "white", borderRadius: 7, padding: 5,
                        width: '100%'
                    }]}>
                        <View style={{ width: '20%', marginRight: 5 }}>
                            <Text style={{ fontWeight: 'bold', color: "gray" }}>Khu vực: </Text>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: "lightgray", borderRadius: 5, padding: 3, marginRight: 5 }}>
                            <Text style={{ color: "black" }}>Tp. Hồ Chí Minh</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: "lightgray", borderRadius: 5, padding: 3, marginRight: 5 }}>
                            <Text style={{ color: "black" }}>Hà Nội</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "lightgray", borderRadius: 5, padding: 3, marginRight: 5 }}>
                            <FontAwesome name="map-signs" size={20} color="gray" style={{ marginRight: 5 }} />
                            <Text style={{ color: "black" }}>Gần tôi</Text>
                        </TouchableOpacity>
                    </View>
                </View>



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