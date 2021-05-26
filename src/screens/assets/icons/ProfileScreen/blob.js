import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <Path
        fill="#09f"
        d="M0 320l40-5.3c40-5.7 120-15.7 200-48C320 235 400 181 480 165.3c80-16.3 160 5.7 240 32C800 224 880 256 960 240s160-80 240-122.7c80-42.3 160-64.3 200-74.6l40-10.7v288H0z"
      />
    </Svg>
  );
}

export default SvgComponent;
