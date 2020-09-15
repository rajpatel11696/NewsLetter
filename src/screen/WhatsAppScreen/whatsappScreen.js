import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Switch } from 'react-native'
import string from '../../commons/string/index'
import styles from './whatsappStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { changeDarkMode } from '../../action/ActionContainer';
import { connect } from 'react-redux';


class Whatsapp extends Component {

    render() {

        const isDark = this.props.isDark

        return (
            <View style={styles.container}>
                <View style={[styles.header,  {backgroundColor:isDark ? '#424453' : 'white'}]}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Setting")}>
                            <Image
                                source={require('../../assets/Images/BackArrow.png')}
                                style={styles.dark_icon} />
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.title,{color: isDark? 'white' : 'black'}]}>{string.setting_title}</Text>
                    <View>
                        <TouchableOpacity>
                        <Text style={[styles.savetxt, {color: isDark? 'white' : 'black'}]}>{string.title_save}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.newsontxt}>{string.title_newswhatsapp}</Text>
                    <Switch
                    //   code here
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.searchContainer}>
                        <Image
                            source={require('../../assets/Images/search.png')}
                            style={styles.search_icon}
                        />
                        <Text style={styles.searchtxt}>{string.search_title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: 'lightgray', flex: 1, marginTop: 15}}>

                    {/* codddddeeee heeeeeeeeereeeeeeeeee */}
                </View>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Whatsapp)