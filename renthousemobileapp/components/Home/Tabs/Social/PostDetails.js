import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useLocale, useNavigation } from '@react-navigation/native';

const PostDetails = () => {

    const navigater = useNavigation();
    
    const {postId} = useLocaleSearchParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        getPostDetails();
    })

    const getPostDetails = async () => {
        let res = await fetchPostDetails(postId);
    }

    return (
        <View >
            <Text>Hello worlds</Text>
        </View>
    );
}


export default PostDetail;