import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import { TextInput, TouchableOpacity, ScrollView,AsyncStorage } from 'react-native-gesture-handler'
import { wp, hp } from '../../commons/utility/Dimension'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { storeUserId } from '../../action/ActionContainer';
import { changeDarkMode } from '../../action/ActionContainer';
import { connect } from 'react-redux';


GoogleSignin.configure({
    webClientId: '188775872871-h2k6v9vfhra71f2jnuj2r15coganl3cp.apps.googleusercontent.com',
});

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    OnSignIn = (email, password) => {
        auth().
            signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log("Sign In Successful" + JSON.stringify(data))
                this.props.storeUserId(data.uid)
                this.props.navigation.pop()
              
            })
            .catch(error => {

                console.error(error);
            })
    }

    OnGogglePress = async () => {
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    render() {


        return (
            <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#424355' }}>
                <View style={{ width: wp(100), height: hp(20), alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: hp(5) }}>
                    <Image
                        source={require('../../assets/Images/Newslogo.png')}
                        style={{ width: 150, height: 150 }}
                    />
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>NewsLetter</Text>
                </View>

                <View style={{ marginTop: hp(4), flex: 1, backgroundColor: 'white', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, paddingVertical: 20 }}>
                            Login to your account
                    </Text>
                    </View>
                    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'lightgray', justifyContent: "center", alignItems: 'center', borderTopLeftRadius: 60, borderTopRightRadius: 60 }}>
                        <View style={{ width: wp(50), flexDirection: 'row', justifyContent: 'space-evenly', marginTop: -10 }}>
                            <Image
                                source={require('../../assets/Images/fb.png')}
                                style={{ width: 45, height: 45 }}
                            />
                            <TouchableOpacity
                                onPress={() => this.OnGogglePress()} >
                                <Image
                                    source={require('../../assets/Images/gmail.png')}
                                    style={{ width: 45, height: 45 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, padding: 15 }}>Or use your Email Account</Text>

                        <View style={{ width: wp(85), height: hp(6), backgroundColor: '#424453', borderRadius: 40, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start' }}>

                            <View style={{ width: wp(70), height: hp(6), backgroundColor: 'white', borderRadius: 40, }}>
                                <TextInput
                                    placeholder='Please enter Email'
                                    value={this.state.email}
                                    onChangeText={email =>
                                        this.setState({
                                            email
                                        })}
                                    style={{ paddingHorizontal: 30 }}
                                    autoCapitalize='none'
                                />
                            </View>
                            <View style={{ width: 45, height: 45, borderRadius: 40, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/Images/u_man.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                        </View>
                        <View style={{ width: wp(85), height: hp(6), backgroundColor: '#424453', borderRadius: 40, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-end', marginTop: hp(2) }}>


                            <View style={{ width: 45, height: 45, borderRadius: 40, marginRight: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/Images/key.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ width: wp(70), height: hp(6), backgroundColor: 'white', borderRadius: 40, }}>
                                <TextInput
                                    placeholder='Please enter Password'
                                    value={this.state.password}
                                    onChangeText={password =>
                                        this.setState({
                                            password
                                        })}
                                    style={{ paddingHorizontal: 30 }}
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                />
                            </View>

                        </View>
                        <View style={{ width: wp(80), alignItems: 'flex-end' }}>
                            <Text style={{ color: '#424355', padding: 15 }}>Forgot Password?</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.OnSignIn(this.state.email, this.state.password)}>
                            <View style={{ width: wp(60), height: hp(6.5), alignItems: 'center', justifyContent: "center", backgroundColor: '#424453', marginTop: hp(3), borderRadius: 40 }}>
                                <Text style={{ color: 'white', fontSize: 26, padding: 5 }}>Login</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: hp(8), justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: 18 }}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
                                <Text style={{ fontSize: 18, color: '#424453' }}>Register Here! </Text>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>
                </View>
            </ScrollView>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)