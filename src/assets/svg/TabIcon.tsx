import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = {
  Home: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        fill="#333333"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22V12H15V22"
        stroke="#515151"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  HomeActive: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        fill="#1AB6FA"
        stroke="#1AB6FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22V12H15V22"
        stroke="#78D4FC"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  Earn: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
        fill="#333333"
      />
      <Path
        d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
        stroke="#515151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  EarnActive: () => (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M16.1667 4H18.1667C18.6972 4 19.2059 4.21071 19.581 4.58579C19.956 4.96086 20.1667 5.46957 20.1667 6V20C20.1667 20.5304 19.956 21.0391 19.581 21.4142C19.2059 21.7893 18.6972 22 18.1667 22H6.16675C5.63632 22 5.12761 21.7893 4.75253 21.4142C4.37746 21.0391 4.16675 20.5304 4.16675 20V6C4.16675 5.46957 4.37746 4.96086 4.75253 4.58579C5.12761 4.21071 5.63632 4 6.16675 4H8.16675"
        fill="#1AB6FA"
      />
      <Path
        d="M16.1667 4H18.1667C18.6972 4 19.2059 4.21071 19.581 4.58579C19.956 4.96086 20.1667 5.46957 20.1667 6V20C20.1667 20.5304 19.956 21.0391 19.581 21.4142C19.2059 21.7893 18.6972 22 18.1667 22H6.16675C5.63632 22 5.12761 21.7893 4.75253 21.4142C4.37746 21.0391 4.16675 20.5304 4.16675 20V6C4.16675 5.46957 4.37746 4.96086 4.75253 4.58579C5.12761 4.21071 5.63632 4 6.16675 4H8.16675"
        stroke="#1AB6FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1667 2H9.16675C8.61446 2 8.16675 2.44772 8.16675 3V5C8.16675 5.55228 8.61446 6 9.16675 6H15.1667C15.719 6 16.1667 5.55228 16.1667 5V3C16.1667 2.44772 15.719 2 15.1667 2Z"
        stroke="#78D4FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  SwapTab: () => (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M4.83325 9.32637L0.833252 12.9264M0.833252 12.9264L4.83325 16.5264M0.833252 12.9264H14.8333M10.8333 1.52637L14.8333 5.12637M14.8333 5.12637L10.8333 8.72637M14.8333 5.12637H0.833252"
        stroke="#333333"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  ),
  SwapActive: () => (
    <Svg width="17" height="18" viewBox="0 0 17 18" fill="none">
      <Path
        d="M5.33325 9.32637L1.33325 12.9264M1.33325 12.9264L5.33325 16.5264M1.33325 12.9264H15.3333M11.3333 1.52637L15.3333 5.12637M15.3333 5.12637L11.3333 8.72637M15.3333 5.12637H1.33325"
        stroke="#1AB6FA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  Stats: () => (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M22.5 12H18.5L15.5 21L9.5 3L6.5 12H2.5"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  StatsActive: () => (
    <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <Path
        d="M21 10H17L14 19L8 1L5 10H1"
        stroke="#1AB6FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
};

export default Icon;
