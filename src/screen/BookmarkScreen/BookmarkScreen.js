import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import string from '../../commons/string/index'
import styles from './BookmarkStyle'
import { wp, hp } from '../../commons/utility/Dimension'
import ListView from '../../components/ListViewFunction'

export default class componentName extends Component {
  render() {
    return (
      <View>
        <ListView 
        title = {'Title 1'}
        subTitle= {'Company 1'}
        date = {'DD/mm/yy'}
        />
      </View>

      // <View style={styles.container}>
      //   <View style={styles.header}>
      //     <View style={{ width: 30, height: 30 }}>
      //     </View>

      //     <Text style={styles.title}>{string.news_title}</Text>
      //     <View>
      //       <TouchableOpacity>
      //         <Image
      //           source={require('../../assets/Images/moon.png')}
      //           style={styles.dark_icon} />
      //       </TouchableOpacity>
      //     </View>
      //   </View>
      //   <View style={styles.bodyContainer}>
      //     <View style={{ backgroundColor: 'white', width: wp(88), height: hp(24), }}>
      //       <View style={{ flexDirection: 'row' }}>

      //         <View style={{ height: 115, width: wp(60), justifyContent: 'center', alignItems: 'center' }}>
      //           <Text>
      //             Title Here
      //           </Text>
      //           <Text>
      //             Company Tag and Date
      //           </Text>
      //         </View>
      //         <Image source={require('../../assets/Images/camera.png')}
      //           style={{ width: 115, height: 115 }}
      //         />
      //       </View>
      //       <View style={{ flexDirection: 'row' }}>
      //         <View style={{ width: wp(75), height: 92, alignItems:'center', justifyContent:'center' }}>
      //           <Text>
      //             Description Here.....
      //           </Text>
      //         </View>
      //         <View style={{ width: wp(13), height: 92, alignItems: 'center', justifyContent: 'flex-end' }}>
      //           <Image
      //             source={require('../../assets/Images/dark_bookmark.png')}
      //             style={{ width: 30, height: 30, marginLeft: 10 }}
      //           />
      //         </View>
      //       </View>
      //     </View>
      //   </View>
      // </View>
    )
  }
}