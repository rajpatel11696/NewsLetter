import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import ShadowView from 'react-native-simple-shadow-view/src/ShadowView';
import {connect} from 'react-redux';
import {hp, wp} from '../commons/utility/Dimension';

const BottomTabBar = ({state, navigation, darkMode, ...props}) => {
  const {routes = [], index: activeIndex} = state;

  let ImageList = [
    require('../assets/Images/home.png'),
    require('../assets/Images/dark_bookmark.png'),
    require('../assets/Images/heart.png'),
    require('../assets/Images/setting.png'),
  ];

  return (
    <View
      style={{
        width: wp(100),
        flexDirection: 'row',
        height: hp(10),
        backgroundColor: darkMode ? '#3f3f4d' : 'rgb(255,255,255)',
        paddingHorizontal: wp(3),
        paddingBottom: Platform.OS === 'ios' ? 15 : 0,
      }}>
      <View style={styles.tabContainer}>
        {routes.map((it, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.jumpTo(it.name);
              }}
              style={[styles.tabButton, {}]}>
              {activeIndex === index ? (
                <View style={[styles.btnBackground, {}]}>
                  <View style={styles.btnStyle}>
                    <Image
                      source={ImageList[index]}
                      style={{tintColor: 'white', alignSelf: 'center', width: 25, height: 25}}
                    />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        marginLeft: wp(2),
                        textAlign: 'center',
                      }}>
                      {it.name}
                    </Text>
                  </View>
                </View>
              ) : (
                <View style={styles.btnStyle}>
                  <Image source={ImageList[index]}
                  style={{width: 25, height: 25, tintColor: darkMode? 'white' : 'black'}}
                  />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flexDirection: 'row',
    height: hp(10),
    backgroundColor: true ? '#4c4b5e' : 'white',
    paddingHorizontal: wp(3),
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 5,
  },

  imageIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: wp(1),
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: wp(3),
  },
  btnBackground: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(244,186,0)',
    borderRadius: 50,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    padding: 7,
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'rgb(244,157,0)',
  },
});

const mapStateToProps = state => {
  return {
    darkMode: state.mainReducer.darkMode,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BottomTabBar);
