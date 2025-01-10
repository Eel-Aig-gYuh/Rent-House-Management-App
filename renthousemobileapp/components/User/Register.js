import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Styles from '../../constants/styles/Styles';
import { Colors } from '../../constants/color/Colors';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Register = () => {

    const navigation = useNavigation();
    const navigater = useNavigation();


    useEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <View style={{padding: 20, marginTop: 30, flex: 1, backgroundColor: Colors.White}}>
            <View style={{flex: 1, maxHeight: '15%'}}>
                <TouchableOpacity
                onPress={()=> navigater.goBack()}>
                    <AntDesign name="back" size={24} color="black"/>   
                </TouchableOpacity>

                <Text style={[Styles.txt_title, {textAlign: 'left', marginTop: 10}]}>
                    Create A New Account
                </Text>             
            </View>

            <View style={{flex: 1, marginTop: 15}}>

                <Text>
                    Full Name
                </Text>
                <TextInput inputMode='text' placeholder='Enter Full Name' 
                style={Styles.input}></TextInput>


                <Text>
                    Username
                </Text>
                <TextInput inputMode='email' placeholder='Enter Username' 
                style={Styles.input}></TextInput>


                <Text>
                    Password
                </Text>
                <TextInput secureTextEntry={true} placeholder='Enter Password' 
                style={Styles.input}></TextInput>


                <Text>
                    Conform Password
                </Text>
                <TextInput secureTextEntry={true} placeholder='Enter Conform Password' 
                style={Styles.input}></TextInput>


                <View style={Styles.button}
                    onPress={()=> navigater.navigate('Register')}  
                >
                    <Text style={{textAlign: 'center', color: Colors.White, fontWeight: 'bold'}}>
                        Create A Account
                    </Text>
                </View>

                <TouchableOpacity 
                    style={{ backgroundColor: Colors.White, borderWidth: 1, borderRadius: 15, padding: 10, marginLeft: 20, marginRight: 20}}
                    onPress={() => navigater.navigate('Login')}
                >
                    <Text style={{ textAlign: 'center', color: Colors.Primary, fontWeight: 'bold' }}>
                        Sign In
                    </Text>

                </TouchableOpacity>

            </View>
        </View>
    );
}

export default Register;