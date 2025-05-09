import * as React from 'react';
import {SVGProps} from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';

export const FacebookIcon: React.FC<SvgProps> = props => (
  <Svg width={31} height={31} viewBox="0 0 31 31" fill="none" {...props}>
    <Rect width={30.7551} height={30.7551} rx={15.3776} fill="#1977F3" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0967 30.515C17.2141 30.6725 16.3055 30.7547 15.3777 30.7547C14.5554 30.7547 13.7481 30.6901 12.9607 30.5658V20.2757H8.7876V15.5405H12.9607V11.9314C12.9607 7.82681 15.413 5.55884 19.1684 5.55884C20.4008 5.576 21.6303 5.68299 22.8471 5.87893V9.9105H20.7735C18.7322 9.9105 18.0967 11.1731 18.0967 12.4699V15.5412H22.6547L21.926 20.2757H18.0967V30.515Z"
      fill="white"
    />
  </Svg>
);
