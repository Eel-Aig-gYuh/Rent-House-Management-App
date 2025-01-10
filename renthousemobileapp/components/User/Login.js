import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Styles from '../../constants/styles/Styles';
import { Colors } from '../../constants/color/Colors';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

    const navigation = useNavigation();
    const navigater = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <View style={{padding: 20, marginTop: 30, flex: 1, backgroundColor: Colors.White}}>
            <View style={{flex: 1, maxHeight: '30%'}}>
                <Text style={[Styles.txt_title, {textAlign: 'left'}]}>
                    Let's Sign You In
                </Text>

                <Text style={[Styles.txt_content, {textAlign: 'left', marginTop: 20}]}>
                    Welcome Back
                </Text>
            </View>

            <View style={{flex: 1}}>
                <Text>
                    Email
                </Text>
                <TextInput inputMode='email' placeholder='Enter Email' 
                style={Styles.input}></TextInput>


                <Text>
                    Password
                </Text>
                <TextInput secureTextEntry={true} placeholder='Enter Password' 
                style={Styles.input}></TextInput>


                <TouchableOpacity style={Styles.button}  
                    onPress={() => navigater.navigate('Home')}
                >
                    <Text style={{textAlign: 'center', color: Colors.White, fontWeight: 'bold'}}>
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: Colors.White}}
                    onPress={()=> navigater.navigate('Register')}  
                >
                    <Text style={{textAlign: 'center', color: Colors.Primary, fontWeight: 'bold'}}>
                        Create An Account ?
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity style={[Styles.buttonNoFill, {borderColor: Colors.SearchButton, borderWidth: 2}]}  
                    onPress={() => navigater.navigate('AdminPage')}
                >
                    <Text style={{textAlign: 'center', color: Colors.SearchButton, fontWeight: 'bold'}}>
                        Sign In With Google
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={[Styles.buttonNoFill, {marginTop: 0, borderColor: Colors.Blue, borderWidth: 2}]}  
                    onPress={() => navigater.navigate('Home')}
                >
                    <Text style={{textAlign: 'center', color: Colors.Primary, fontWeight: 'bold'}}>
                        Sign In With Facebook
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default Login;