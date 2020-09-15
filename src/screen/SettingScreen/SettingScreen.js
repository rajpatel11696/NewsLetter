import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Switch, Share } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import string from '../../commons/string/index'
import styles from './SettingStyle'
import { changeDarkMode } from '../../action/ActionContainer';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth';




class Setting extends Component {

    state = {
        checked: 'first',
    };

    OnShare = async () => {
        try {
            const result = await Share.share({
                title: 'App link',
                message: 'Please install this app to update your knowledge , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
                url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    // signOut = () => {
    //     auth()
    //         .signOut()
    //         .then(() => console.log('User signed out!'));
    //         this.props.storeUserId(data.uid)
    // }

    render() {

        const isDark = this.props.isDark;
        const SignIn = this.props.SignIn;
        const { checked } = this.state;
        const { isSwitchOn } = this.state;

        return (
            <View style={[styles.container, { backgroundColor: isDark ? '#424453' : 'white' }]}>
                <View style={styles.header}>
                    <View style={{ width: 35, height: 35 }}>

                    </View>

                    <Text style={[styles.title, { color: isDark ? 'white' : 'black' }]}>{string.setting_title}</Text>
                    <View style={{ width: 20, height: 20 }}>

                    </View>
                </View>

                <View style={styles.ProfileContainer}>

                    <View>
                        <Image
                            source={require('../../assets/Images/user.png')}
                            style={styles.ProfileImage}
                        />
                    </View>
                    {SignIn === '' ?
                        <View >
                            <Text style={styles.subtxt}>
                                Sign in to save area
                            {'\n'}of your interest
                        </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                                <View style={[styles.loginbtn, { backgroundColor: isDark ? '#424453' : 'black' }]}>
                                    <Text style={styles.logintxt}>
                                        {string.sign_btn}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View> 
                        : 
                        <View style={styles.Updatebtn}><Text style={styles.Updatetxt}>Update Profile</Text></View>}
                </View>
                <ScrollView style={[styles.scrollcontainer, { backgroundColor: isDark ? '#424453' : "white" }]}>

                    <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.listView} >
                            <Text style={[styles.listText, { color: isDark ? 'white' : 'black' }]}>{string.list_language}</Text>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text style={{ color: isDark ? 'white' : 'black' }}>{string.language_en}</Text>
                                <Image
                                    source={require('../../assets/Images/chevron_right.png')}
                                    style={{ width: 18, height: 18, tintColor: isDark? 'white' : 'black' }}
                                />

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Dash")}
                            style={styles.listView}>
                            <Text style={[styles.listText, { color: isDark ? 'white' : 'black' }]}>{string.list_datausage}</Text>
                            <View></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.listView}>
                            <Text style={[styles.listText, { color: isDark ? 'white' : 'black' }]}>{string.list_notification}</Text>
                            <View>
                                <Switch
                                // code here
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.listView}>
                            <Text style={[styles.listText, { color: isDark ? 'white' : 'black' }]}>{string.list_darkmode}</Text>
                            <View>
                                <Switch
                                    value={this.props.isDark}
                                    onValueChange={() => {
                                        this.props.changeDarkMode(!this.props.isDark)
                                    }
                                    } />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.listView}
                            onPress={() => this.props.navigation.navigate("Whatsapp")}
                        >
                            <Text style={[styles.listText, { color: isDark ? 'white' : 'black' }]}>{string.list_whatsapp}</Text>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text style={{ color: isDark ? 'white' : 'black' }}>{string.label_enable}</Text>
                                <Image
                                    source={require('../../assets/Images/chevron_right.png')}
                                    style={{ width: 18, height: 18,tintColor: isDark? 'white' : 'black' }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.listView}>
                            <Text style={[styles.listText, { color: isDark ? 'white' : 'black' }]}>{string.list_terms}</Text>
                            <View></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.listView}>
                            <Text style={[styles.listText, { color: isDark ? 'white' : 'black' }]}>{string.list_feedback}</Text>
                            <View></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.listView} onPress={this.OnShare}>
                            <Text style={[styles.listText, { color: isDark ? 'white' : 'black' }]}>{string.list_share}</Text>
                            <View></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.listView}>
                            <Text style={[styles.listText, , { color: isDark ? 'white' : 'black' }]}>{string.list_about}</Text>
                            <View>
                                <Text style={{ color: isDark ? 'white' : 'black' }}>V 1.0.3</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    isDark: state.mainReducer.darkMode,
    SignIn: state.mainReducer.signin

})

const mapDispatchToProps = dispatch => {
    return {
        changeDarkMode: (darkMode) => dispatch(changeDarkMode(darkMode)),
        storeUserId : (signInID) => dispatch(storeUserId(signInID)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting)