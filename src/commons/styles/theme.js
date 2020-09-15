import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import ScreenUtil from '../utility/ScreenUtil';
import {isXL, hp} from '../utility/diamensions';
// import Success from '../../assets/images/success.svg';
// import Failure from '../../assets/images/failure.svg';
const colors = {
  transparentDarkBlue: 'rgba(139,0,0,0.5);',
  fontBlack: '#2E2E2E',
  itemShadow: '#DBD8EA',
  themeRed: '#ED3237',
  themeRedLight: '#ED323726',
  themeTeal: '#239F95',
  themeTealLight: '#4ECCC22B',
  themeLightGray: '#707070',
  themeLightGrayView: '#F1F1F1',
  labelFont: '#454F63',
};

const shadowView = {
  shadowColor: colors.itemShadow,
  shadowOpacity: 1,
  shadowRadius: 9,
  shadowOffset: {height: 10, width: 0},
};
const fonts = {
  smallFont: isXL() ? hp(1) * 0.75 : ScreenUtil.getPercentage(1),
  smallMediumFont: isXL() ? hp(1.25) * 0.75 : ScreenUtil.getPercentage(1.25),
  mediumFont: isXL() ? hp(1.9) * 0.75 : hp(1.9),
  mediumLargeFont: isXL() ? hp(2.3) * 0.75 : hp(2.3),
  largeFont: isXL() ? hp(2.8) * 0.75 : hp(2.8),
  normalElevation: 16,
  highElevation: 24,
  // fontFamilyPoppins: 'poppins',
  // fontFamilyMonoRegular: 'Share Tech Mono',
  fontStyles: {
    roboto: {
      regular: 'Roboto',
      light: 'Roboto',
      medium: 'Roboto',
      bold: 'Roboto',
    },
  },
};

const spacings = {
  smallSpace: ScreenUtil.getPercentage(2),
  smallMediumSpace: ScreenUtil.getPercentage(2.5),
  mediumSpace: ScreenUtil.getPercentage(2.5),
  mediumLargeSpace: ScreenUtil.getPercentage(2.75),
  largeSpace: ScreenUtil.getPercentage(3),
};

const defaultColors = {
  white: 'white',
  black: 'black',
  transparent: 'transparent',
  red: 'red',
  gray: 'gray',
};
const appIcons = {
  success: require('../../assets/images/success/success.png'),
  failure: require('../../assets/images/exclamation.png'),
};
export {colors, fonts, spacings, defaultColors, appIcons, shadowView};