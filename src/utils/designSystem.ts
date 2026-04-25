import {
  responsiveFontSize as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from 'react-native-responsive-dimensions';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const fontSize = (px: number): number => 
  rf((px / BASE_HEIGHT) * 100);

export const vertical = (px: number): number => 
  rh((px / BASE_HEIGHT) * 100);

export const horizontal = (px: number): number => 
  rw((px / BASE_WIDTH) * 100);