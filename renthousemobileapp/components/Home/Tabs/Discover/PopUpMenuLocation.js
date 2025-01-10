import { View, Text, Modal, Pressable, TouchableOpacity, TextInput, SafeAreaView, SafeAreaViewBase } from 'react-native';
import React from 'react'
import { useState } from 'react';

// icon 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import Styles from '../../../../constants/styles/Styles';
import { Colors } from '../../../../constants/color/Colors';

export default function PopUpMenuLocation({ isVisible, onClose }) {
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);


    return (
        <Modal transparent visible={isVisible} animationType="fade" onRequestClose={onClose}>
            <Pressable onPress={onClose} style={Styles.overlay} />
            <View style={[Styles.popupMenuFilter, {left: 90}]}>
                <View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <FontAwesome6 name="location-crosshairs" size={15} color="black" />
                        <Text style={{ margin: 5, fontWeight: 'bold' }}>Tìm kiếm quanh bạn</Text>
                    </View>

                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", borderColor: "lightgrey", borderWidth: 1, padding: 5, marginTop: 5, marginBottom: 5, borderRadius: 10 }}>
                        <Text style={{color: "grey"}}>Nhập vị trí và khoảng cách</Text>
                        <AntDesign name="caretright" size={15} color="lightgray" style={{marginLeft: 20}}/>
                    </TouchableOpacity>
                    
                    
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <MaterialCommunityIcons name="office-building-marker-outline" size={15} color="black" />
                        <Text style={{ margin: 5, fontWeight: 'bold' }}>Tìm kiếm theo khu vực</Text>
                    </View>
                </View>
            </View>
            
        </Modal>
    );
}