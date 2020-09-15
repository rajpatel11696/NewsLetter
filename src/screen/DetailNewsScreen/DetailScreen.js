import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import string from '../../commons/string/index'
import styles from './DetailStyle'
import { changeDarkMode } from '../../action/ActionContainer';
import { connect } from 'react-redux';
import { wp, hp } from '../../commons/utility/Dimension';
import { ScrollView } from 'react-native-gesture-handler';


class DetailScreen extends Component {

    componentDidMount(){
        console.log(this.props.route.params.item)
    }

    render() {

        const isDark = this.props.isDark

        return (
            <View style={styles.container}>
                <View style={[styles.header, { backgroundColor: isDark ? '#424355' : 'white' }]}>
                    <View style={{ width: 170, }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                            <Image
                                source={require('../../assets/Images/left_arrow.png')}
                                style={[styles.back_arrowStyle, { tintColor: isDark ? 'white' : 'black' }]} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 150, height: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Image
                            source={require('../../assets/Images/share.png')}
                            style={[styles.back_arrowStyle, { tintColor: isDark ? 'white' : 'black' }]} />
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/Images/bookmark.png')}
                                style={[styles.back_arrowStyle, { tintColor: isDark ? 'white' : 'black' }]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.changeDarkMode(!this.props.isDark)}>
                            {isDark ?
                                <Image
                                    source={require('../../assets/Images/light_bright.png')}
                                    style={styles.back_arrowStyle} />
                                :
                                <Image
                                    source={require('../../assets/Images/moon.png')}
                                    style={styles.back_arrowStyle} />
                            }

                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                <View style={styles.titleContainer}>
                        <Text style={styles.titletxt}>{this.props.route.params.item.title}</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={{ fontSize: 16,fontWeight:"bold" }}>{this.props.route.params.item.mediaName} </Text>
                    <TouchableOpacity style={{ backgroundColor: 'lightgray', borderRadius: 10 }}>
                        <Text style={styles.followtxt}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={{ uri: this.props.route.params.item.imageUrl }}
                        style={{ width: wp(95), height: hp(25), alignSelf: 'center' }}
                    />
                </View>
                <View style={styles.descriptionContainer}>
                        <Text style={styles.describeTxt}>{this.props.route.params.item.subTitle}</Text>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.linebox}>

                    </View>
                        <Text style={{fontSize: 18, paddingHorizontal: 10, textAlign:'justify'}}>{this.props.route.params.item.url}</Text>
                </View>
                <View style={{width: wp(95), height: hp(60), backgroundColor: 'blue', alignItems:'center', justifyContent:'center', alignSelf:'center', marginTop: 20}}>

                </View>
                </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)