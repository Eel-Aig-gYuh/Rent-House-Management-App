import { View, Text, Modal, Pressable, TouchableOpacity, TextInput, SafeAreaView, SafeAreaViewBase } from 'react-native';
import React, { useState } from 'react';
import Styles from '../../../../constants/styles/Styles';
import { Colors } from '../../../../constants/color/Colors';

export default function PopUpMenuFilter({ isVisible, onClose }) {
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);


    return (
        <Modal transparent visible={isVisible} animationType="fade" onRequestClose={onClose}>
            <Pressable onPress={onClose} style={Styles.overlay} />
            <View style={Styles.popupMenuFilter}>
                <View>
                    <Text style={{ margin: 5, fontWeight: 'bold' }}>Diện tích</Text>

                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TextInput inputMode='numeric' placeholder='Diện tích tối thiểu ' style={[Styles.menuItem, {borderColor: (!isFocused1 && isVisible)? "lightgrey": Colors.Red}]}
                            onFocus={() => setIsFocused1(true)}
                            onBlur={() => setIsFocused1(false)}
                        />
                        <Text style={{padding: 10}}>-</Text>
                        <TextInput inputMode='numeric' placeholder='Diện tích tối đa' style={[Styles.menuItem, {borderColor: (!isFocused2 && isVisible)? "lightgrey": Colors.Red}]}
                            onFocus={() => setIsFocused2(true)}
                            onBlur={() => setIsFocused2(false)}
                        />
                    </View>
                </View>
            </View>
            
        </Modal>
    );
}
