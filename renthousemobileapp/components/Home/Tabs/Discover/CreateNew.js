import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

// Style and Colors
import Styles from './../../../../constants/styles/Styles';
import { Colors } from '../../../../constants/color/Colors';

// Icon
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

import AddressInputForm from './AddressAutoComplete';

const CreateNew = () => {
    const navigater = useNavigation();
    const [file, setFile] = useState(null);

    useEffect(() => {
        navigater.setOptions({
            headerShown: false,
        });
    }, []);

    const onPick = async (isImage) => {
        let mediaConfig = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.7,
        };

        if (!isImage) {
            mediaConfig.mediaTypes = ImagePicker.MediaTypeOptions.Videos;
        }

        let result = await ImagePicker.launchImageLibraryAsync(mediaConfig);

        if (!result.cancelled) {
            setFile(result.assets[0]);
        }
    };

    const getFileUri = (file) => file?.uri || null;

    const renderContent = () => (
        <View>
            <View>
                <Text style={{marginTop: 10, marginLeft: 20, fontWeight: 'bold'}}>Nhập Địa Chỉ:</Text>
            </View>

            <AddressInputForm />

            <View>
                <Text style={{marginTop: 10, marginLeft: 20, fontWeight: 'bold'}}>Nhập Giá Và Diện Tích:</Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{width: 100, marginRight: 15, marginLeft: 20}}>
                    <TextInput style={[Styles.inputBorder, {paddingLeft: 10}]} placeholder='Giá'></TextInput>
                </View>

                <View style={{width: 100}}>
                    <TextInput style={[Styles.inputBorder, {paddingLeft: 10}]} placeholder='Diện tích'></TextInput>
                </View>
            </View>

            <View>
                <Text style={{marginTop: 10, marginLeft: 20, fontWeight: 'bold'}}>Nhập Nội Dung Tin Đăng:</Text>
            </View>

            <View style={{ marginTop: 10, justifyContent: 'space-between' }}>
                <TextInput
                    style={[Styles.inputBorder, { marginBottom: 5, marginLeft: 20 }]}
                    placeholder="Tiêu đề tin đăng ..."
                />
                <TextInput
                    style={[Styles.richBar, { margin: 20, marginRight: 30, borderColor: "lightgray" }]}
                    placeholder="Mô tả ..."
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                />
            </View>

            {file && (
                <View style={Styles.file}>
                    {file.type === 'video' ? (
                        <Text>Video Preview Here</Text>
                    ) : (
                        <Image source={{ uri: getFileUri(file) }} resizeMode="cover" style={{ flex: 1 }} />
                    )}
                </View>
            )}

            <View style={{ flexDirection: 'row' }}>
                <Text
                    style={[
                        { borderWidth: 1, borderRadius: 15, borderColor: Colors.LightGray },
                        { paddingTop: 10, paddingBottom: 10, marginLeft: 20, paddingLeft: 10, width: '90%' },
                        { textAlign: 'left', fontWeight: 'bold' },
                    ]}
                >
                    Thêm ít nhất 3 hình hoặc video
                </Text>
                <View style={{ flexDirection: 'row', marginLeft: -90 }}>
                    <TouchableOpacity onPress={() => onPick(false)}>
                        <Feather name="camera" size={24} color="black" style={{ marginTop: 10, marginRight: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onPick(true)}>
                        <FontAwesome6 name="images" size={24} color="black" style={{ marginTop: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={() => {}}>
                <View style={[Styles.button, { justifyContent: 'flex-end' }]}>
                    <Text style={{ color: Colors.White, fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
                        Post
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={[{ flexDirection: 'row', marginTop: 30, marginLeft: 20, justifyContent: 'space-between' }]}>
                <TouchableOpacity onPress={() => navigater.goBack()}>
                    <AntDesign
                        name="back"
                        size={24}
                        color="black"
                        style={[Styles.buttonBack, { padding: 2 }]}
                    />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginLeft: -20 }}>Đăng tin</Text>
                <View />
            </View>

            <FlatList
                data={[{}]} // Use dummy data since content is static
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderContent}
            />
        </View>
    );
};

export default CreateNew;
