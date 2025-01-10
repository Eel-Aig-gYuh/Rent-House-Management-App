import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';;
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'


// Style and Colors
import Styles from './../../../../constants/styles/Styles';
import { Colors } from '../../../../constants/color/Colors';

// Icon
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

import { RichTextEditor } from './RichTextEditor';

const CreatePost = () => {

    const navigater = useNavigation();

    const [file, setFile] = useState(file)

    useEffect(() => {
        navigater.setOptions({
            headerShown: false, // Tắt header trên màn hình chính
        });
    }, []);

    
    const onsubmit = async () => {

    }

    return (
        <View style={{backgroundColor: "white"}}>
            <View style={[{flexDirection: 'row', marginTop: 30, marginLeft: 20, justifyContent: 'space-between'}]}>
                <TouchableOpacity onPress={()=>{navigater.goBack()}}>
                    <AntDesign name="back" size={24} color="black" 
                        style={[Styles.buttonBack, {padding: 2}]}
                    />
                </TouchableOpacity>

                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginLeft: -20}}>
                   Create Post
                </Text>

                <View></View>
            </View>

            <ScrollView>
                <View>
                    <View style={{padding: 20, maxHeight: '30%', justifyContent: 'flex-start',}}> 
                        <View style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 10}}>
                            <View>
                                <Image source={require('./../../../../assets/images/avatar1.png')} 
                                style={[Styles.avatar, {width: '100%', marginLeft: 0, marginTop: 0, padding: 20}]}/>
                            </View>

                            <View>
                                <Text style={{fontWeight: '500'}}>
                                    User Name
                                </Text>

                                <Text style={{fontSize: 10}}>
                                    Public
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 10, justifyContent: 'space-between'}}>
                        <RichTextEditor/>
                    </View>


                    {
                        file && (
                            <View style={Styles.file}>
                                getFileType(file) == 'video'? {
                                    <> </>
                                }:{
                                    <Image source={{uri: getFileUri(file)}} 
                                    resizeMode='cover' style={{flex: 1}}></Image>
                                }
                            </View>
                        )
                    }


                    <TouchableOpacity
                        onPress={onsubmit()}
                    >
                        <View style={[Styles.button, {justifyContent: 'flex-end'}]}>
                            <Text style={{color: Colors.White, fontSize: 15, fontWeight: 'bold',
                                textAlign: 'center', 
                            }}>Post</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </View>
    );
}

export default CreatePost;