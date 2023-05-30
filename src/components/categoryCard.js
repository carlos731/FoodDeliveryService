import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import { Categories, COLOURS } from '../database/items';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CategoryCard = ({ data, index }) => {

    const [currentSelected, setCurrentSelected] = useState([0]);

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setCurrentSelected(index)}>
            <View
                style={{
                    width: 120,
                    height: 180,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor:
                        currentSelected == index ? COLOURS.accent : COLOURS.white,
                    borderRadius: 20,
                    margin: 10,
                    elevation: 5,
                }}>
                <View style={{ width: 60, height: 60 }}>
                    <Image
                        source={data.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'center',
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        color: COLOURS.black,
                        fontWeight: '600',
                    }}>
                    {data.name}
                </Text>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        backgroundColor:
                            currentSelected == index ? COLOURS.white : COLOURS.accentRed,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <FontAwesome
                        name="angle-right"
                        style={{
                            fontSize: 12,
                            color: currentSelected == index ? COLOURS.black : COLOURS.white,
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryCard;