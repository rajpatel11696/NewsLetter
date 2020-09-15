import React, { Component } from 'react'
import { Text, View, StyleShee, Image } from 'react-native'
import styles from './FavouriteStyle'
import string from '../../commons/string/index'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { hp, wp } from '../../commons/utility/Dimension'
import { changeDarkMode } from '../../action/ActionContainer';
import { connect } from 'react-redux';



class Favourite extends Component {

  state = {
    isSwitchOn: this.props.isDark,
};

  render() {
    const isDark = this.props.isDark

    return (
      <ScrollView style={styles.container}>
        <View style={[styles.header, {backgroundColor: isDark ? '#424453' : 'white'}]}>
          <View style={{ width: 30, height: 30 }}>
          </View>

          <Text style={[styles.title, {color: isDark ? 'white' : 'black'}]}>{string.news_title}</Text>
          <View>
            <TouchableOpacity onPress={() => this.props.changeDarkMode(!this.props.isDark)}>
              {isDark ?  <Image
                source={require('../../assets/Images/light_bright.png')}
                style={styles.dark_icon} />
              :
              <Image
              source={require('../../assets/Images/moon.png')}
              style={styles.dark_icon}
              
              />
              }
             
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.txtcontain}>Sources</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>Explore All</Text>
            <Image
              source={require('../../assets/Images/chevron_right.png')}
              style={styles.chevron_icon}
            />
          </View>
        </View>
        <View>
          <View style={styles.boxmain}>
            <View style={styles.boxcontainer}>
              <Image
                source={require('../../assets/Images/bbc.png')}
                style={styles.logo} />

              <Text style={styles.headlinetxt}>{string.title_bbc}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                  <Text style={styles.followtxt}>{string.title_follow}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxcontainer}>
              <Image
                source={require('../../assets/Images/toi.jpg')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.title_toi}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_follow}</Text>

                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxcontainer}>
              <Image source={require('../../assets/Images/hindustan.png')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.title_ht}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_following}</Text>

                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxmain}>
            <View style={styles.boxcontainer}>
              <Image source={require('../../assets/Images/nt.png')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.title_nt}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_follow}</Text>

                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxcontainer}>
              <Image source={require('../../assets/Images/cnn.png')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.title_cnn}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_following}</Text>

                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxcontainer}>
              <Image source={require('../../assets/Images/ndtv.png')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.title_ndtv}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_follow}</Text>

                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.txtcontain}>Topics</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>Explore All</Text>
            <Image
              source={require('../../assets/Images/chevron_right.png')}
              style={styles.chevron_icon}
            />
          </View>
        </View>
        <View>
          <View style={styles.boxmain}>
            <View style={styles.boxcontainer}>
              <Image
                source={require('../../assets/Images/bbc.png')}
                style={styles.logo} />

              <Text style={styles.headlinetxt}>{string.list_business}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_follow}</Text>

                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxcontainer}>
              <Image
                source={require('../../assets/Images/toi.jpg')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.list_sports}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_following}</Text>

                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxcontainer}>
              <Image source={require('../../assets/Images/hindustan.png')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.list_entertainment}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_follow}</Text>

                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxmain}>
            <View style={styles.boxcontainer}>
              <Image source={require('../../assets/Images/nt.png')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.list_science}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_follow}</Text>

                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxcontainer}>
              <Image source={require('../../assets/Images/cnn.png')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.list_health}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_follow}</Text>

                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxcontainer}>
              <Image source={require('../../assets/Images/ndtv.png')}
                style={styles.logo} />
              <Text style={styles.headlinetxt}>{string.list_technology}</Text>
              <TouchableOpacity>
                <View style={styles.followbox}>
                <Text style={styles.followtxt}>{string.title_follow}</Text>

                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const mapStateToProps = (state) => ({
  isDark: state.mainReducer.darkMode
})

const mapDispatchToProps = dispatch => {
  return {
      changeDarkMode: (darkMode) => dispatch(changeDarkMode(darkMode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)