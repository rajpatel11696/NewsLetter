import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ListViewStyle'
import string from '../commons/string/index'
import { wp, hp } from '../commons/utility/Dimension'

/**
 * 
 * @author Rajendra Patel
 * 
 * @param {string} title
 * @param {string} subTitle
 * @param {string} imageUrl
 * @param {string} date
 * @param {boolean} isBookmark
 */

export default function ListView(props) {
    const {
        title, subTitle, imageUrl, isBookmark, date, onPress, medialUrl, mediaName
    } = props
    return (
        <TouchableOpacity onPress={() => onPress(props)} style={{
            flex: 1,
            backgroundColor: 'white',
            padding: wp(4)
        }}>

            <View style={{
                width: wp(90),
                borderWidth: 1,
                borderColor: 'black',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                height: hp(38),
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',

            }}>

                <View style={{ width: wp(89.5), height: hp(20), borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={{
                            borderRadius: 15,
                            width: wp(89.5),
                            height: hp(20)
                        }}
                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, textAlign: "justify", padding: 6,fontWeight: 'bold' }}>{title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', width: wp(90) }}>
                    <View style={{width: wp(40)}}>
                        <Text style={{ fontSize: 14 }}>Author: {mediaName}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: wp(35), fontWeight: 'bold' }}>Follow</Text>
                    </View>
                </View>
                <View style={{ width: wp(90), height: hp(8.8) }}>
                    <Text
                        numberOfLines={3}
                        style={{ textAlign: 'justify', paddingHorizontal: 6, paddingVertical: 8, fontSize: 16 }}>{subTitle}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>

    );
}
