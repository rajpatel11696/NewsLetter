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
    title, subTitle, imageUrl, isBookmark, date
  } = props
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 30, height: 30 }}>
        </View>

        <Text style={styles.title}>{string.news_title}</Text>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../assets/Images/moon.png')}
              style={styles.dark_icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={{ backgroundColor: 'white', width: wp(88), height: hp(24), }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ height: 115, width: wp(60), justifyContent: 'center', alignItems: 'center' }}>
              <Text>
                {title}
                </Text>
              <Text>
                {subTitle}
                </Text>
            </View>
            <Image source={require('../assets/Images/camera.png')}
              style={{ width: 115, height: 115 }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: wp(75), height: 92, alignItems: 'center', justifyContent: 'center' }}>
              <Text>
                Description Here.....
                </Text>
            </View>
            <View style={{ width: wp(13), height: 92, alignItems: 'center', justifyContent: 'flex-end' }}>
              <Image
                source={require('../assets/Images/dark_bookmark.png')}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>

  );
}
