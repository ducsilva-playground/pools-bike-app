import React from 'react';
import { Path, Svg, Line, Circle } from 'react-native-svg';

const SecuritySvg = {
  Event: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 2V6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 10H21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  Secur: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  Referral: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle
        cx="12.1653"
        cy="6.07692"
        r="2.32692"
        stroke="white"
        strokeWidth="1.5"
      />
      <Line
        x1="10.4069"
        y1="8.08076"
        x2="6.58818"
        y2="12.9065"
        stroke="white"
        strokeWidth="1.5"
      />
      <Circle
        cx="5.07692"
        cy="17.6154"
        r="2.32692"
        stroke="white"
        strokeWidth="1.5"
      />
      <Line
        x1="7.38464"
        y1="17.6346"
        x2="13.5385"
        y2="17.6346"
        stroke="white"
        strokeWidth="1.5"
      />
      <Circle
        cx="18.9231"
        cy="17.6154"
        r="2.32692"
        stroke="white"
        strokeWidth="1.5"
      />
      <Line
        x1="14.9377"
        y1="10.2853"
        x2="18.2772"
        y2="15.4542"
        stroke="white"
        strokeWidth="1.5"
      />
    </Svg>
  ),
  Wallet: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <Path
        d="M16.5 14C16.3674 14 16.2402 13.9473 16.1464 13.8536C16.0527 13.7598 16 13.6326 16 13.5C16 13.3674 16.0527 13.2402 16.1464 13.1464C16.2402 13.0527 16.3674 13 16.5 13C16.6326 13 16.7598 13.0527 16.8536 13.1464C16.9473 13.2402 17 13.3674 17 13.5C17 13.6326 16.9473 13.7598 16.8536 13.8536C16.7598 13.9473 16.6326 14 16.5 14Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 6.99996V5.60296C17.9999 5.29646 17.9294 4.99408 17.7939 4.71918C17.6583 4.44427 17.4614 4.20419 17.2184 4.01747C16.9753 3.83075 16.6926 3.7024 16.3921 3.64232C16.0915 3.58224 15.7812 3.59204 15.485 3.67096L4.485 6.60396C4.05905 6.71747 3.68254 6.96852 3.41399 7.31809C3.14544 7.66765 2.9999 8.09615 3 8.53696V8.99996"
        stroke="white"
        strokeWidth="1.5"
      />
    </Svg>
  ),
  News: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 19C12 14.8 9.2 12 5 12M19 19C19 10.6 13.4 5 5 5M5 19.01L5.01 18.999"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  AboutUs: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 9H13V7H11M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 17H13V11H11V17Z"
        fill="white"
      />
    </Svg>
  ),
  Support: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 21V19.5H19.5V11.9C19.5 10.9333 19.2917 10.0042 18.875 9.1125C18.4583 8.22083 17.9 7.43333 17.2 6.75C16.5 6.06667 15.7 5.52083 14.8 5.1125C13.9 4.70417 12.9667 4.5 12 4.5C11.0333 4.5 10.1 4.70417 9.2 5.1125C8.3 5.52083 7.5 6.06667 6.8 6.75C6.1 7.43333 5.54167 8.22083 5.125 9.1125C4.70833 10.0042 4.5 10.9333 4.5 11.9V18H4C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V14C2 13.6167 2.09167 13.2792 2.275 12.9875C2.45833 12.6958 2.7 12.4583 3 12.275L3.075 10.95C3.225 9.73333 3.57083 8.63333 4.1125 7.65C4.65417 6.66667 5.32917 5.83333 6.1375 5.15C6.94583 4.46667 7.85417 3.9375 8.8625 3.5625C9.87083 3.1875 10.9167 3 12 3C13.1 3 14.1542 3.1875 15.1625 3.5625C16.1708 3.9375 17.075 4.47083 17.875 5.1625C18.675 5.85417 19.3458 6.6875 19.8875 7.6625C20.4292 8.6375 20.775 9.725 20.925 10.925L21 12.225C21.3 12.375 21.5417 12.5958 21.725 12.8875C21.9083 13.1792 22 13.5 22 13.85V16.15C22 16.5167 21.9083 16.8417 21.725 17.125C21.5417 17.4083 21.3 17.625 21 17.775V19.5C21 19.9125 20.8531 20.2656 20.5594 20.5594C20.2656 20.8531 19.9125 21 19.5 21H11ZM9 13.75C8.8 13.75 8.625 13.675 8.475 13.525C8.325 13.375 8.25 13.1958 8.25 12.9875C8.25 12.7792 8.325 12.6042 8.475 12.4625C8.625 12.3208 8.80417 12.25 9.0125 12.25C9.22083 12.25 9.39583 12.3219 9.5375 12.4656C9.67917 12.6094 9.75 12.7875 9.75 13C9.75 13.2 9.67812 13.375 9.53438 13.525C9.39062 13.675 9.2125 13.75 9 13.75ZM15 13.75C14.8 13.75 14.625 13.675 14.475 13.525C14.325 13.375 14.25 13.1958 14.25 12.9875C14.25 12.7792 14.325 12.6042 14.475 12.4625C14.625 12.3208 14.8042 12.25 15.0125 12.25C15.2208 12.25 15.3958 12.3219 15.5375 12.4656C15.6792 12.6094 15.75 12.7875 15.75 13C15.75 13.2 15.6781 13.375 15.5344 13.525C15.3906 13.675 15.2125 13.75 15 13.75ZM6.025 12.45C5.95833 11.4667 6.09583 10.575 6.4375 9.775C6.77917 8.975 7.2375 8.29583 7.8125 7.7375C8.3875 7.17917 9.05 6.75 9.8 6.45C10.55 6.15 11.3 6 12.05 6C13.5667 6 14.8417 6.47917 15.875 7.4375C16.9083 8.39583 17.5417 9.59167 17.775 11.025C16.2083 11.0083 14.8292 10.5875 13.6375 9.7625C12.4458 8.9375 11.525 7.86667 10.875 6.55C10.6083 7.9 10.0458 9.09583 9.1875 10.1375C8.32917 11.1792 7.275 11.95 6.025 12.45Z"
        fill="white"
      />
    </Svg>
  ),
  Policy: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 12V5.749C20.0001 5.67006 19.9845 5.59189 19.9543 5.51896C19.9241 5.44603 19.8798 5.37978 19.824 5.324L16.676 2.176C16.5636 2.06345 16.4111 2.00014 16.252 2H4.6C4.44087 2 4.28826 2.06321 4.17574 2.17574C4.06321 2.28826 4 2.44087 4 2.6V21.4C4 21.5591 4.06321 21.7117 4.17574 21.8243C4.28826 21.9368 4.44087 22 4.6 22H13M8 10H16M8 6H12M8 14H11"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5.4C16 5.55913 16.0632 5.71174 16.1757 5.82426C16.2883 5.93679 16.4409 6 16.6 6H20M19.992 15.125L22.548 15.774C22.814 15.842 23.001 16.084 22.993 16.358C22.821 22.116 19.5 23 19.5 23C19.5 23 16.179 22.116 16.007 16.358C16.0039 16.2246 16.0463 16.0941 16.1271 15.988C16.208 15.8819 16.3226 15.8064 16.452 15.774L19.008 15.125C19.331 15.043 19.669 15.043 19.992 15.125Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  Terms: () => (
    <Svg width="22" height="21" viewBox="0 0 22 21" fill="none">
      <Path
        d="M22 2.5598C21.9995 3.23858 21.73 3.88927 21.2509 4.36926C20.7718 4.84934 20.1221 5.11935 19.4444 5.12016H18.6435V18.4406C18.6427 19.1191 18.3732 19.7698 17.8941 20.2495C17.415 20.7294 16.7653 20.9993 16.0877 21H2.55855C1.88022 21.0007 1.22946 20.7313 0.749537 20.2513C0.269618 19.7711 0 19.1197 0 18.4404C0 17.7611 0.269618 17.1096 0.749537 16.6295C1.22946 16.1494 1.88022 15.88 2.55855 15.8808H3.35853V2.55983C3.35916 1.88114 3.6287 1.23045 4.1079 0.750464C4.5871 0.270568 5.23693 0.000651243 5.91463 0H19.4443C20.1219 0.000817682 20.7715 0.270847 21.2506 0.75072C21.7298 1.23059 21.9993 1.88121 21.9999 2.5598H22ZM2.55845 19.2416H13.6599C13.4886 18.7211 13.4888 18.1593 13.6604 17.639H2.55844C2.27294 17.6394 2.00929 17.7923 1.86669 18.04C1.72407 18.2877 1.72407 18.5928 1.86669 18.8405C2.0093 19.0883 2.27295 19.2411 2.55845 19.2416ZM16.8877 2.5598C16.8876 2.2877 16.9306 2.01732 17.0151 1.75875H5.91455C5.7361 1.7583 5.56281 1.81826 5.42274 1.92892L5.42074 1.93037V1.93047C5.22687 2.08137 5.11373 2.31386 5.11464 2.55982V15.8808H15.1536C15.3721 15.8785 15.585 15.9504 15.7574 16.0848C15.9298 16.2193 16.0517 16.4083 16.103 16.621C16.1636 16.825 16.1578 17.0429 16.0864 17.2433C16.0151 17.4436 15.8819 17.6162 15.7062 17.7356C15.5397 17.826 15.4106 17.9726 15.3418 18.1493C15.2731 18.326 15.2691 18.5213 15.3306 18.7007C15.3921 18.88 15.5152 19.0318 15.6779 19.1288C15.8405 19.2259 16.0323 19.2621 16.2191 19.2308C16.4059 19.1997 16.5756 19.1031 16.698 18.9584C16.8204 18.8137 16.8877 18.6303 16.8877 18.4407L16.8877 2.5598ZM15.5245 4.84106H6.39964V6.59981H15.5245V4.84106ZM15.5245 8.42662H6.39964V10.1848L15.5245 10.1849V8.42662ZM15.5245 12.0112L6.39964 12.0113V13.7701H15.5245V12.0112ZM20.2445 2.55962V2.55971C20.2442 2.34729 20.1598 2.14359 20.0098 1.99341C19.8599 1.84322 19.6566 1.75873 19.4444 1.75854C19.2662 1.75763 19.0929 1.8175 18.9531 1.92826L18.9507 1.92971C18.7563 2.08071 18.6429 2.31338 18.6436 2.55969V3.3613H19.4444C19.6565 3.36094 19.86 3.27636 20.0099 3.12609C20.1599 2.97582 20.2442 2.77211 20.2445 2.55962Z"
        fill="white"
      />
    </Svg>
  ),
  Logout: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 17L21 12L16 7"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 12H9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  Finger: () => (
    <Svg width="33" height="34" viewBox="0 0 33 34" fill="none">
      <Path
        d="M20.0103 0.48861C17.6883 -0.0905916 15.2449 -0.173356 12.8674 0.339901C12.6837 0.379566 12.5669 0.560672 12.6065 0.744411C12.6462 0.92815 12.8273 1.04495 13.011 1.00528C15.2879 0.513748 17.6334 0.594794 19.8643 1.15395C25.1995 2.49113 29.6403 6.50244 31.3318 11.7423C31.9859 13.7687 32.2638 15.9265 32.3194 18.1878C32.324 18.3757 32.4801 18.5243 32.668 18.5197C32.8559 18.5151 33.0045 18.359 32.9999 18.1711C32.9435 15.8787 32.6624 13.6654 31.9921 11.5721C30.2355 6.08639 25.5941 1.88144 20.0103 0.48861Z"
        fill="#B1B1B1"
      />
      <Path
        d="M11.1402 1.51837C11.3214 1.46838 11.4278 1.28096 11.3778 1.09976C11.3278 0.918553 11.1404 0.812183 10.9592 0.862171C8.47276 1.5481 4.97514 3.9182 2.81357 7.08448C2.81273 7.08572 2.8119 7.08695 2.81107 7.0882C0.913076 9.94849 -0.276698 13.5429 0.0554832 17.0309C0.0557994 17.0342 0.0561645 17.0375 0.0565783 17.0408C0.136189 17.6777 0.269835 18.3134 0.403639 18.9498C0.685455 20.2903 0.967966 21.6341 0.747764 22.9992C0.71783 23.1848 0.844 23.3595 1.02957 23.3894C1.21515 23.4193 1.38985 23.2932 1.41978 23.1076C1.64997 21.6806 1.36415 20.2887 1.07828 18.8965C0.946071 18.2527 0.81385 17.6088 0.732651 16.9613C0.420227 13.6655 1.54556 10.2273 3.37703 7.46643C5.45637 4.42168 8.82346 2.15748 11.1402 1.51837Z"
        fill="#B1B1B1"
      />
      <Path
        d="M15.6065 2.27879C19.8796 2.01785 24.1519 3.76177 27.0211 7.1028C27.1435 7.24541 27.1272 7.46029 26.9846 7.58275C26.842 7.70521 26.6271 7.68889 26.5046 7.54628C23.7762 4.36909 19.7107 2.7095 15.6459 2.95836C15.6445 2.95845 15.643 2.95853 15.6416 2.9586C10.5011 3.20733 5.68705 6.69454 3.91634 11.581C3.8523 11.7577 3.65712 11.8491 3.48039 11.785C3.30366 11.721 3.21231 11.5258 3.27635 11.3491C5.14173 6.20139 10.1968 2.54147 15.6065 2.27879Z"
        fill="#B1B1B1"
      />
      <Path
        d="M28.058 8.58971C27.9532 8.43367 27.7417 8.39212 27.5856 8.49692C27.4296 8.60172 27.3881 8.81318 27.4929 8.96922C29.0834 11.3376 29.7411 13.9149 30.0011 16.9733C30.017 17.1606 30.1818 17.2995 30.3691 17.2836C30.5563 17.2677 30.6953 17.1029 30.6794 16.9156C30.4137 13.7904 29.7355 11.0875 28.058 8.58971Z"
        fill="#B1B1B1"
      />
      <Path
        d="M30.4518 18.3607C30.6394 18.3489 30.801 18.4915 30.8127 18.6791C30.941 20.7315 30.9422 23.0535 30.7152 24.7694C30.6905 24.9558 30.5194 25.0868 30.3331 25.0622C30.1468 25.0375 30.0157 24.8665 30.0403 24.6801C30.2592 23.0263 30.2603 20.7535 30.1334 18.7216C30.1216 18.534 30.2642 18.3724 30.4518 18.3607Z"
        fill="#B1B1B1"
      />
      <Path
        d="M3.40237 13.2295C3.44649 13.0468 3.33413 12.8629 3.1514 12.8188C2.96868 12.7746 2.78479 12.887 2.74068 13.0697C2.49086 14.1044 2.36118 15.1673 2.35604 16.2311C2.35075 17.3277 2.5552 18.398 2.75974 19.4688C2.92706 20.3447 3.09443 21.2209 3.14708 22.1119C3.21624 23.2823 2.97004 24.4545 2.54462 25.5701C2.47764 25.7457 2.56572 25.9424 2.74136 26.0094C2.91699 26.0764 3.11367 25.9883 3.18065 25.8127C3.63033 24.6334 3.90291 23.3632 3.8266 22.0717C3.77431 21.1868 3.60696 20.3157 3.43966 19.445C3.23553 18.3824 3.03149 17.3204 3.03674 16.2344C3.04162 15.2235 3.16487 14.2131 3.40237 13.2295Z"
        fill="#B1B1B1"
      />
      <Path
        d="M12.3331 5.66612C12.4032 5.84055 12.3186 6.03874 12.1441 6.10879C8.61561 7.5258 5.96589 10.7235 5.42535 14.4942C5.19951 16.0696 5.4435 17.6301 5.68742 19.1902C5.82479 20.0687 5.96213 20.9471 6.01553 21.828C6.13132 23.7381 5.91375 25.8361 4.67067 27.7451C4.56809 27.9026 4.35725 27.9471 4.19973 27.8445C4.04221 27.742 3.99767 27.5311 4.10025 27.3736C5.23282 25.6344 5.44721 23.7026 5.33607 21.8692C5.28189 20.9754 5.1454 20.0868 5.009 19.1988C4.76427 17.6055 4.51982 16.014 4.75153 14.3976C5.32869 10.3715 8.15067 6.97897 11.8905 5.47712C12.0649 5.40707 12.2631 5.49168 12.3331 5.66612Z"
        fill="#B1B1B1"
      />
      <Path
        d="M24.2815 7.60386C21.4979 4.99664 17.4633 4.08667 13.7966 4.89092C13.613 4.93119 13.4968 5.11268 13.537 5.29629C13.5773 5.4799 13.7588 5.5961 13.9424 5.55582C17.4145 4.79425 21.2136 5.663 23.8162 8.10068C26.0099 10.1553 27.2838 13.145 27.6172 16.4068C27.6363 16.5938 27.8034 16.7299 27.9904 16.7108C28.1774 16.6916 28.3135 16.5245 28.2944 16.3375C27.9481 12.9506 26.6205 9.79456 24.2815 7.60386Z"
        fill="#B1B1B1"
      />
      <Path
        d="M28.2232 17.9585C28.4102 17.9393 28.5773 18.0753 28.5965 18.2623C28.9197 21.4095 28.7804 24.8088 28.2925 28.0973C28.2649 28.2832 28.0918 28.4116 27.9058 28.384C27.7199 28.3564 27.5915 28.1833 27.6191 27.9973C28.1003 24.7546 28.2358 21.413 27.9194 18.3318C27.9002 18.1448 28.0362 17.9777 28.2232 17.9585Z"
        fill="#B1B1B1"
      />
      <Path
        d="M16.3571 6.91706C11.1416 6.91706 6.90399 11.078 6.90399 16.2224C6.90399 16.7719 6.95275 17.3104 7.04571 17.8339C7.07857 18.019 7.25525 18.1424 7.44032 18.1095C7.6254 18.0767 7.7488 17.9 7.71594 17.7149C7.62987 17.2302 7.5847 16.7316 7.5847 16.2224C7.5847 11.4644 11.507 7.59776 16.3571 7.59776C18.5489 7.59776 20.5515 8.38774 22.0885 9.69305C22.2318 9.81473 22.4466 9.79722 22.5682 9.65394C22.6899 9.51067 22.6724 9.29588 22.5291 9.1742C20.8728 7.76758 18.7152 6.91706 16.3571 6.91706Z"
        fill="#B1B1B1"
      />
      <Path
        d="M23.2917 10.4432C23.4274 10.3131 23.6428 10.3176 23.7729 10.4533C25.275 12.0196 25.7558 14.4814 26.0739 16.5474C26.4323 18.8746 26.487 21.1448 26.487 22.1975C26.487 22.3855 26.3346 22.5378 26.1466 22.5378C25.9587 22.5378 25.8063 22.3855 25.8063 22.1975C25.8063 21.1619 25.7521 18.93 25.4011 16.651C25.1058 14.733 24.68 12.3827 23.2816 10.9244C23.1515 10.7888 23.156 10.5733 23.2917 10.4432Z"
        fill="#B1B1B1"
      />
      <Path
        d="M26.4006 24.1467C26.4155 23.9593 26.2757 23.7953 26.0883 23.7803C25.901 23.7654 25.737 23.9052 25.722 24.0926C25.5549 26.1891 25.3365 28.2833 24.8933 30.2178C24.8513 30.401 24.9658 30.5836 25.149 30.6256C25.3323 30.6675 25.5148 30.553 25.5568 30.3698C26.0117 28.3843 26.233 26.2488 26.4006 24.1467Z"
        fill="#B1B1B1"
      />
      <Path
        d="M7.59356 19.0866C7.77799 19.0503 7.95694 19.1703 7.99326 19.3548C8.71289 23.0092 8.21575 26.329 6.31003 29.237C6.207 29.3942 5.99603 29.4381 5.83881 29.3351C5.68159 29.2321 5.63766 29.0211 5.74069 28.8639C7.53377 26.1278 8.01634 22.9951 7.32538 19.4863C7.28906 19.3019 7.40913 19.1229 7.59356 19.0866Z"
        fill="#B1B1B1"
      />
      <Path
        d="M16.3571 9.13157C12.9716 9.13157 9.65031 11.7523 9.31131 15.0459C9.1629 16.4879 9.37138 17.9082 9.57995 19.3292C9.76207 20.5699 9.94425 21.8111 9.88894 23.0674C9.76234 25.9428 8.91869 28.3163 7.46906 30.2712C7.3571 30.4222 7.38873 30.6354 7.53972 30.7473C7.69071 30.8593 7.90388 30.8277 8.01584 30.6767C9.55334 28.6033 10.437 26.0962 10.569 23.0974C10.624 21.8467 10.4413 20.6095 10.2587 19.373C10.0499 17.9592 9.84119 16.5463 9.98844 15.1156C10.2862 12.2222 13.2644 9.81227 16.3571 9.81227C17.7996 9.81227 21.5318 10.5933 22.7189 14.4607C23.4629 16.8843 23.6658 20.1642 23.4856 23.3506C23.3055 26.5366 22.745 29.5839 21.9913 31.5379C21.9236 31.7133 22.011 31.9103 22.1863 31.978C22.3617 32.0456 22.5587 31.9583 22.6264 31.7829C23.4149 29.7385 23.9829 26.6141 24.1653 23.389C24.3476 20.1643 24.1472 16.7937 23.3697 14.261C22.0519 9.96803 17.9208 9.13157 16.3571 9.13157Z"
        fill="#B1B1B1"
      />
      <Path
        d="M11.1194 29.2375C11.2768 29.3402 11.3212 29.5511 11.2185 29.7085C11.0075 30.0321 10.8218 30.3707 10.6361 30.7092C10.4504 31.0478 10.2647 31.3865 10.0536 31.7101C9.95096 31.8676 9.74008 31.912 9.58264 31.8093C9.42519 31.7066 9.38081 31.4957 9.4835 31.3383C9.69455 31.0147 9.88022 30.6761 10.0659 30.3375C10.2516 29.9989 10.4373 29.6603 10.6484 29.3366C10.751 29.1792 10.9619 29.1348 11.1194 29.2375Z"
        fill="#B1B1B1"
      />
      <Path
        d="M14.0337 12.6646C14.1899 12.5601 14.2319 12.3487 14.1274 12.1925C14.0229 12.0362 13.8115 11.9943 13.6553 12.0988C12.3075 13.0002 11.4806 14.2398 11.4806 16.0558C11.4806 17.1371 11.6722 18.021 11.8687 18.9275C12.1627 20.2841 12.3621 21.6377 12.3263 23.0311C12.2827 24.7231 11.9517 26.2692 11.3153 27.7421C11.2408 27.9147 11.3202 28.115 11.4928 28.1896C11.6653 28.2641 11.8656 28.1847 11.9402 28.0121C12.6131 26.4548 12.9611 24.8224 13.0067 23.0486C13.044 21.6007 12.839 20.1935 12.5341 18.7836C12.3372 17.8731 12.1613 17.0602 12.1613 16.0558C12.1613 14.4999 12.8458 13.4591 14.0337 12.6646Z"
        fill="#B1B1B1"
      />
      <Path
        d="M15.3621 11.4687C16.7745 11.1808 18.2943 11.5366 19.413 12.442C21.4111 14.0594 21.6769 17.0088 21.8922 19.3989L21.9032 19.5206C22.1815 22.6015 21.863 25.5939 21.2213 28.5991C21.182 28.783 21.0012 28.9002 20.8174 28.8609C20.6335 28.8217 20.5163 28.6408 20.5556 28.457C21.1876 25.4968 21.4957 22.5756 21.2253 19.5819C21.2163 19.4827 21.2074 19.3822 21.1984 19.2805L21.1983 19.279C21.007 17.1192 20.7674 14.4141 18.9847 12.9711C18.0283 12.197 16.7166 11.8873 15.4981 12.1357C15.3139 12.1733 15.1342 12.0544 15.0966 11.8702C15.0591 11.686 15.1779 11.5063 15.3621 11.4687Z"
        fill="#B1B1B1"
      />
      <Path
        d="M20.7402 30.2927C20.7866 30.1105 20.6765 29.9253 20.4944 29.8789C20.3122 29.8325 20.1269 29.9426 20.0806 30.1248C19.8748 30.933 19.5578 31.6625 19.1558 32.3341C19.0592 32.4954 19.1117 32.7044 19.273 32.801C19.4343 32.8975 19.6433 32.845 19.7398 32.6837C20.1731 31.9599 20.517 31.1696 20.7402 30.2927Z"
        fill="#B1B1B1"
      />
      <Path
        d="M19.0759 25.3536C19.2626 25.3756 19.396 25.5449 19.3739 25.7315C19.0524 28.4479 18.3267 30.8706 17.1623 32.9718C17.0712 33.1362 16.864 33.1956 16.6996 33.1045C16.5352 33.0134 16.4758 32.8062 16.5669 32.6418C17.6813 30.6309 18.3849 28.2963 18.6979 25.6516C18.72 25.4649 18.8892 25.3315 19.0759 25.3536Z"
        fill="#B1B1B1"
      />
      <Path
        d="M19.0057 15.8773C18.7698 14.6165 17.6877 13.6521 16.374 13.6521C14.5951 13.6521 13.347 15.4452 13.7868 17.1134C14.531 20.0582 14.6532 22.8963 14.1494 25.6298L14.149 25.6318C13.7118 28.086 12.8723 30.2939 11.7271 32.1648C11.629 32.3251 11.6794 32.5346 11.8397 32.6328C12 32.7309 12.2095 32.6805 12.3077 32.5202C13.4997 30.5727 14.3678 28.2844 14.819 25.7522C15.3421 22.9132 15.2125 19.9756 14.4463 16.9449L14.4454 16.9413C14.1155 15.6934 15.035 14.3328 16.374 14.3328C17.3402 14.3328 18.1561 15.0436 18.3362 16.0002C18.8316 18.8738 19.0897 21.5385 18.9059 23.8329C18.8909 24.0202 19.0307 24.1843 19.218 24.1993C19.4054 24.2143 19.5695 24.0746 19.5845 23.8872C19.7749 21.5091 19.5061 18.7788 19.0066 15.8821C19.0063 15.8805 19.006 15.8789 19.0057 15.8773Z"
        fill="#B1B1B1"
      />
      <Path
        d="M15.3584 30.6183C15.5256 30.7042 15.5915 30.9094 15.5056 31.0766L14.6037 32.8316C14.5178 32.9988 14.3126 33.0647 14.1454 32.9788C13.9782 32.8928 13.9123 32.6877 13.9983 32.5205L14.9001 30.7654C14.986 30.5982 15.1912 30.5324 15.3584 30.6183Z"
        fill="#B1B1B1"
      />
      <Path
        d="M16.6271 16.2055C16.5841 16.0225 16.4009 15.909 16.218 15.952C16.035 15.995 15.9215 16.1782 15.9645 16.3612C17.1122 21.247 16.9546 25.5372 15.5565 29.1918C15.4894 29.3674 15.5773 29.5641 15.7528 29.6313C15.9284 29.6985 16.1252 29.6106 16.1923 29.435C17.65 25.6244 17.7982 21.1905 16.6271 16.2055Z"
        fill="#B1B1B1"
      />
    </Svg>
  ),
  Edit: () => (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <Path
        d="M9.1665 3.90698H3.33317C2.89114 3.90698 2.46722 4.08258 2.15466 4.39514C1.8421 4.7077 1.6665 5.13162 1.6665 5.57365V17.2403C1.6665 17.6823 1.8421 18.1063 2.15466 18.4188C2.46722 18.7314 2.89114 18.907 3.33317 18.907H14.9998C15.4419 18.907 15.8658 18.7314 16.1783 18.4188C16.4909 18.1063 16.6665 17.6823 16.6665 17.2403V11.407"
        stroke="#7E7E7E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.4165 2.65693C15.748 2.32541 16.1977 2.13916 16.6665 2.13916C17.1353 2.13916 17.585 2.32541 17.9165 2.65693C18.248 2.98845 18.4343 3.43809 18.4343 3.90693C18.4343 4.37577 18.248 4.82541 17.9165 5.15693L9.99984 13.0736L6.6665 13.9069L7.49984 10.5736L15.4165 2.65693Z"
        stroke="#7E7E7E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  delete: () => (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <Path
        d="M2.5 5.57361H4.16667H17.5"
        stroke="#7E7E7E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8332 5.57357V17.2402C15.8332 17.6823 15.6576 18.1062 15.345 18.4187C15.0325 18.7313 14.6085 18.9069 14.1665 18.9069H5.83317C5.39114 18.9069 4.96722 18.7313 4.65466 18.4187C4.3421 18.1062 4.1665 17.6823 4.1665 17.2402V5.57357M6.6665 5.57357V3.9069C6.6665 3.46487 6.8421 3.04095 7.15466 2.72839C7.46722 2.41583 7.89114 2.24023 8.33317 2.24023H11.6665C12.1085 2.24023 12.5325 2.41583 12.845 2.72839C13.1576 3.04095 13.3332 3.46487 13.3332 3.9069V5.57357"
        stroke="#7E7E7E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.3335 9.74023V14.7402"
        stroke="#7E7E7E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.6665 9.74023V14.7402"
        stroke="#7E7E7E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  backSpace: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 9L12 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 9L18 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
};

export default SecuritySvg;
