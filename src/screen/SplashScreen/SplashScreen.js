import React, { Component } from 'react'
import { Text, View, StyleSheet, AsyncStorage, Image } from 'react-native'
import styles from './SplashStyle'


export default class SplashScreen extends Component {
    

    componentDidMount() {
        setTimeout(() => {

            AsyncStorage.getItem('id').then((data) => {
                console.log("asyncdata" + data)
                if (data === null) {
                    this.props.navigation.navigate("Welcome");
                } else {
                    this.props.navigation.navigate("Bottom")
                }
            }).catch((error)=>{
                console.log(JSON.stringify(error))
            })
        }, 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image 
                source={require('../../assets/Images/Newslogo.png')}
                style={{width: 200, height: 200}}
                />
                <Text style={styles.title}> NewsLetter </Text>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>{`\u2022 Search`}</Text>
                    <Text style={styles.subtitle}>{`\u2022 Explore`}</Text>
                    <Text style={styles.subtitle}>{`\u2022 Discover`}</Text>
                </View>
            </View>
        )
    }
}
