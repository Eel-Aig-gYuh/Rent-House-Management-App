import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/color/Colors';
import Styles from '../../constants/styles/Styles';

export default function AdminPage() {
    const data = [
        { id: '1', key: 'Item 1' },
        
    ];

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ borderRadius: 20, backgroundColor: Colors.Yellown, height: '110%'}}>
                <View style={{ flexDirection: 'row', height: 150, marginBottom: 10,}}>
                    <View style={styles.containerAdmin}>
                        <TouchableOpacity style={[styles.imgContainer, Styles.shadow, { backgroundColor: Colors.Dark, alignSelf: 'center' }]}>
                            <Text style={{ fontWeight: 'bold', color: "white", textAlign: 'center', marginTop: '40%'}}>Người Dùng</Text>
                           
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containerAdmin]}>
                        <TouchableOpacity style={[styles.imgContainer,  Styles.shadow, { backgroundColor: Colors.Dark, alignSelf: 'center' }]}>
                            <Text style={{ fontWeight: 'bold', color: "white", textAlign: 'center', marginTop: '40%'}}>Thống Kê</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', height: 150, marginBottom: 10 }}>
                    <View style={styles.containerAdmin}>
                        <TouchableOpacity style={[styles.imgContainer,  Styles.shadow, { backgroundColor: Colors.Dark, alignSelf: 'center' }]}>
                            <Text style={{ fontWeight: 'bold', color: "white", textAlign: 'center', marginTop: '40%'}}>Xét Duyệt Bài Đăng</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containerAdmin]}>
                        <TouchableOpacity style={[styles.imgContainer,  Styles.shadow, { backgroundColor: Colors.Dark, alignSelf: 'center' }]}>
                            <Text style={{ fontWeight: 'bold', color: "white", textAlign: 'center', marginTop: '40%'}}>Tạo Bài Đăng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <View style={{ height: '10%', backgroundColor: Colors.Yellown, marginBottom: 20 }}>
                {/* Header or top view */}
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerAdmin: {
        width: '50%',
        marginTop: 15,
        padding: 20,
        height: 300,
    },
    imgContainer: {
        height: 130,
        width: 130,
        borderRadius: 15,
    },
    imgAdmin: {
        width: '100%',
        height: 100,
        opacity: 0.5,
        marginTop: -45,
        borderRadius: 10
    }
});
