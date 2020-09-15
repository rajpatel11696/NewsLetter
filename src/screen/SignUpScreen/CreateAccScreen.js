import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { wp, hp } from '../../commons/utility/Dimension'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default class CreateAcc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            mobile_no: '',
        };
    }

    onSignUp = (email, password) => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(data => {
                console.log('User account created & signed in!' + JSON.stringify(data));
                firestore()
                    .collection('Registration')
                    .doc(data.uid)
                    .set({
                        Username: this.state.username,
                        Mobile: this.state.mobile_no
                    })
                    .then(() => {
                        //  this.getData(data.uid)
                    });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    getData = async (id) => {

        const result = await firestore()
            .collection('Registration')
            .doc(id)
            .get()
        console.log("UserData" + JSON.stringify(result))

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
                            Create an Account!
                    </Text>
                    </View>
                    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'lightgray', justifyContent: "center", alignItems: 'center', borderTopLeftRadius: 60, borderTopRightRadius: 60 }}>
                        <View style={{ width: wp(50), flexDirection: 'row', justifyContent: 'space-evenly', marginTop: -10 }}>
                            <Image
                                source={require('../../assets/Images/fb.png')}
                                style={{ width: 45, height: 45 }}
                            />
                            <Image
                                source={require('../../assets/Images/gmail.png')}
                                style={{ width: 45, height: 45 }}
                            />
                        </View>
                        <Text style={{ fontSize: 18, padding: 14 }}>Or use your Email Account</Text>

                        <View style={{ width: wp(85), height: hp(6), backgroundColor: '#424453', borderRadius: 40, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start' }}>

                            <View style={{ width: wp(70), height: hp(6), backgroundColor: 'white', borderRadius: 40, }}>
                                <TextInput
                                    placeholder='Please enter username'
                                    value={this.state.username}
                                    onChangeText={username =>
                                        this.setState({
                                            username
                                        })}
                                    style={{ paddingHorizontal: 30 }}
                                />
                            </View>
                            <View style={{ width: 45, height: 45, borderRadius: 40, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/Images/u_man.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                        </View>
                        <View style={{ width: wp(85), height: hp(6), backgroundColor: '#424453', borderRadius: 40, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-end', marginTop: hp(1.8) }}>


                            <View style={{ width: 45, height: 45, borderRadius: 40, marginRight: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/Images/email.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ width: wp(70), height: hp(6), backgroundColor: 'white', borderRadius: 40, }}>
                                <TextInput
                                    placeholder='Please enter your email'
                                    style={{ paddingHorizontal: 30 }}
                                    onChangeText={email => this.setState({ email })}

                                />
                            </View>

                        </View>
                        <View style={{ width: wp(85), height: hp(6), backgroundColor: '#424453', borderRadius: 40, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', marginTop: hp(1.8) }}>


                            <View style={{ width: wp(70), height: hp(6), backgroundColor: 'white', borderRadius: 40, }}>
                                <TextInput
                                    placeholder='Please enter your password'
                                    secureTextEntry={true}
                                    onChangeText={password => this.setState({ password })}
                                    style={{ paddingHorizontal: 30 }}
                                />
                            </View>
                            <View style={{ width: 45, height: 45, borderRadius: 40, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/Images/key.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>

                        </View>

                        <View style={{ width: wp(85), height: hp(6), backgroundColor: '#424453', borderRadius: 40, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-end', marginTop: hp(1.8) }}>


                            <View style={{ width: 45, height: 45, borderRadius: 40, marginRight: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/Images/phone.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ width: wp(70), height: hp(6), backgroundColor: 'white', borderRadius: 40, }}>
                                <TextInput
                                    placeholder='Your mobile number'
                                    value={this.state.mobile_no}
                                    onChangeText={(txt) =>
                                        this.setState({
                                            mobile_no: txt
                                        })}
                                    style={{ paddingHorizontal: 30 }

                                    }
                                />
                            </View>

                        </View>

                        <TouchableOpacity onPress={() => this.onSignUp(this.state.email, this.state.password, this.state.username, this.state.mobile_no)}>
                            <View style={{ width: wp(60), height: hp(6.5), alignItems: 'center', justifyContent: "center", backgroundColor: '#424453', marginTop: hp(3), borderRadius: 40 }}>
                                <Text style={{ color: 'white', fontSize: 26, padding: 5 }}>Register</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: hp(3), justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: 18 }}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                                <Text style={{ fontSize: 18, color: '#424453' }}>Login! </Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}