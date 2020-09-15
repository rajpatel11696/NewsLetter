import * as React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  Animated,
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  AsyncStorage,
} from 'react-native';
import ForwardArrow from '../../assets/Images/backArrow.svg';
import { StackActions } from '@react-navigation/native';
import styles from './WelcomeStyle'

const { width } = Dimensions.get('window');

const CIRCLE_SIZE = 100;
const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;

const quotes = [
  {
    quote: 'Stay Updated with the latest news around the world.',
    imagebg: require('../../assets/Images/Illustrations-laying.png'),
  },
  {
    quote:
      "You can follow your interests for which you want to see the news.",
    imagebg: require('../../assets/Images/Illustrations-laying.png'),
  },
  {
    quote:
      'You can recieve the latest news on your whatsapp.',
    imagebg: require('../../assets/Images/Illustrations-laying.png'),
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    imagebg: require('../../assets/Images/Illustrations-laying.png'),
  }
];

const Circle = ({ onPress, index, quotes, animatedValue, animatedValue2 }) => {
  const { initialBgColor, nextBgColor, bgColor } = colors[index];
  const inputRange = [0, 0.001, 0.5, 0.501, 1];
  const backgroundColor = animatedValue2.interpolate({
    inputRange,
    outputRange: [
      initialBgColor,
      initialBgColor,
      initialBgColor,
      bgColor,
      bgColor,
    ],
  });
  const dotBgColor = animatedValue2.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 0.9, 1],
    outputRange: [
      bgColor,
      bgColor,
      bgColor,
      initialBgColor,
      initialBgColor,
      nextBgColor,
    ],
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.container,
        { backgroundColor },
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: dotBgColor,

            transform: [
              { perspective: 400 },
              {
                rotateY: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },

              {
                scale: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 8, 1],
                }),
              },

              // {
              //   translateX: animatedValue2.interpolate({
              //     inputRange: [0, 0.5, 1],
              //     outputRange: ['0%', '50%', '0%'],
              //   }),
              // },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={onPress}>
          <Animated.View
            style={[
              styles.button,
              {
                transform: [
                  {
                    scale: animatedValue.interpolate({
                      inputRange: [0, 0.05, 0.5, 1],
                      outputRange: [1, 0, 0, 1],
                      // extrapolate: "clamp"
                    }),
                  },
                  {
                    rotateY: animatedValue.interpolate({
                      inputRange: [0, 0.5, 0.9, 1],
                      outputRange: ['0deg', '180deg', '180deg', '180deg'],
                    }),
                  },
                ],
                opacity: animatedValue.interpolate({
                  inputRange: [0, 0.05, 0.9, 1],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          >
            <ForwardArrow width={50} height={50} />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const colors = [
  {
    initialBgColor: 'goldenrod',
    bgColor: '#222',
    nextBgColor: '#222',
  },
  {
    initialBgColor: 'goldenrod',
    bgColor: '#222',
    nextBgColor: 'yellowgreen',
  },
  {
    initialBgColor: '#222',
    bgColor: 'yellowgreen',
    nextBgColor: 'midnightblue',
  },
  {
    initialBgColor: 'yellowgreen',
    bgColor: 'midnightblue',
    nextBgColor: 'turquoise',
  }
];

export default function App(props) {

  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animatedValue2 = React.useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(quotes.length).keys()];
  const [index, setIndex] = React.useState(0);

  const animate = (i) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]);

  const onPress = () => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);
    if (index === 3) {
      AsyncStorage.setItem('id', '0').then((data)=>{
        console.log(data)
      })
     
      
      props.navigation.dispatch(
        StackActions.replace('Dash')
      );
    }
    else {

      animate((index + 1) % colors.length).start();
      setIndex((index + 1) % colors.length);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar hidden />
      <Circle
        index={index}
        onPress={onPress}
        quotes={quotes}
        animatedValue={animatedValue}
        animatedValue2={animatedValue2}
      />
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [
            {
              translateX: sliderAnimatedValue.interpolate({
                inputRange,
                outputRange: quotes.map((_, i) => -i * width * 2),
              }),
            },
          ],
          opacity: sliderAnimatedValue.interpolate({
            inputRange: [...Array(quotes.length * 2 + 1).keys()].map(
              (i) => i / 2
            ),
            outputRange: [...Array(quotes.length * 2 + 1).keys()].map((i) =>
              i % 2 === 0 ? 1 : 0
            ),
          }),
        }}
      >
        {quotes.slice(0, colors.length).map(({ quote, imagebg }, i) => {
          return (
            <View style={{ paddingRight: width, width: width * 2, }} key={i}>

              <Image
                style={[
                  styles.imageContainer,
                  {
                    color: colors[i].nextBgColor,
                    alignSelf: 'center',
                    width: 350,
                    height: 200,
                  },
                ]}
                source={imagebg}
              />
              <Text
                style={[styles.paragraph, { color: colors[i].nextBgColor }]}
              >
                {quote}
              </Text>

            </View>
          );
        })}
      </Animated.View>
    </View>
  );
}
