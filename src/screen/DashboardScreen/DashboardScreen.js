import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native'
import string from '../../commons/string/index'
import styles from './DashboardStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { changeDarkMode } from '../../action/ActionContainer';
import { connect } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsSection from '../NewsSection/NewsScreen'
import FollowSection from '../FollowSection/FollowScreen'
import SearchBar from 'react-native-search-bar';
import { wp } from '../../commons/utility/Dimension'


const Tab = createMaterialTopTabNavigator();


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSwitchOn: this.props.isDark,
      isDataLoad: false,
      NewsArray: [],
      isRefreshing: false

    };
  }


  render() {

    const isDark = this.props.isDark

    return (
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: isDark ? '#424453' : 'white' }]}>
          <View style={{ width: 30, height: 30 }}>
          </View>

          <Text style={[styles.title, { color: isDark ? 'white' : 'black' }]}>{string.news_title}</Text>
          <View>
            <TouchableOpacity onPress={() => this.props.changeDarkMode(!this.props.isDark)}>
              {isDark ?
                <Image
                  source={require('../../assets/Images/light_bright.png')}
                  style={styles.dark_icon} />
                :
                <Image
                  source={require('../../assets/Images/moon.png')}
                  style={styles.dark_icon} />
              }

            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 15, marginBottom: 10, width: wp(90), justifyContent: 'center', alignSelf:'center', backgroundColor: 'gray', opacity: 0.3, borderRadius: 30}}>

          <SearchBar

            ref="searchBar"
            placeholder="Search"
            />
          {/* <TouchableOpacity style={styles.searchContainer}>
            <Image
              source={require('../../assets/Images/search.png')}
              style={styles.search_icon}
            />
            <Text style={styles.searchtxt}>{string.search_title}</Text>
          </TouchableOpacity> */}
        </View>
        <MyTabs />

      </View>
    )
  }
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsSection} />
      <Tab.Screen name="Following" component={FollowSection} />
    </Tab.Navigator>
  );
}

const mapStateToProps = (state) => ({
  isDark: state.mainReducer.darkMode
})

const mapDispatchToProps = dispatch => {
  return {
    changeDarkMode: (darkMode) => dispatch(changeDarkMode(darkMode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)