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

const renderItems = (data, index) => {
    return (
        <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            style={{
                width: '100%',
                height: 180,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={() =>
                navigation.push('details', {
                    name: data.name,
                    price: data.price,
                    image: data.image,
                    size: data.size,
                    crust: data.crust,
                    delivery: data.delivery,
                    ingredients: data.ingredients,
                    isTopOfTheWeek: data.isTopOfTheWeek,
                    navigation: navigation,
                })
            }>
            <View
                style={{
                    width: '90%',
                    height: 160,
                    backgroundColor: COLOURS.white,
                    borderRadius: 20,
                    elevation: 4,
                    position: 'relative',
                    padding: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <View style={{ marginBottom: 50 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            display: data.isTopOfTheWeek ? 'flex' : 'none',
                        }}>
                        <FontAwesome
                            name="crown"
                            style={{
                                fontSize: 10,
                                color: COLOURS.accent,
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 12,
                                color: COLOURS.black,
                                opacity: 0.8,
                                marginLeft: 5,
                            }}>
                            top of the week
                        </Text>
                    </View>
                    <Text
                        style={{
                            fontSize: 22,
                            color: COLOURS.black,
                            fontWeight: 'bold',
                            paddingTop: 10,
                        }}>
                        {data.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            color: COLOURS.black,
                            opacity: 0.5,
                        }}>
                        {data.weight}
                    </Text>
                </View>
                <View style={{ width: 150, height: 150, marginRight: -45 }}>
                    <Image
                        source={data.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            width: 85,
                            height: 50,
                            backgroundColor: COLOURS.accent,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Entypo
                            name="plus"
                            style={{ fontSize: 18, color: COLOURS.black }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 20,
                        }}>
                        <AntDesign
                            name="star"
                            style={{ fontSize: 12, color: COLOURS.black, paddingRight: 5 }}
                        />
                        <Text
                            style={{
                                fontSize: 15,
                                color: COLOURS.black,
                                fontWeight: 'bold',
                            }}>
                            {data.rating}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};