import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import {TEXT_SUMMARY} from '../../constants/Globals';

export default function TextSummary({string, longSummary = false, ...props}) {
  const [summary, setSummary] = useState('');
  const [originalString, setOriginalString] = useState(string);
  const [showFullString, setShowFullString] = useState(false);

  useEffect(() => {
    if (!originalString) {
      setOriginalString(string);
    }
    if (!summary) {
      const stringLength = originalString?.length;
      const showReadMore = longSummary
        ? stringLength > TEXT_SUMMARY.LONG
        : stringLength > TEXT_SUMMARY.SHORT;

      const summaryString = string.substring(
        0,
        longSummary ? TEXT_SUMMARY.LONG : TEXT_SUMMARY.SHORT,
      );

      setSummary(`${summaryString}${showReadMore && '...(Read more)'}`);
    }
  }, [string, originalString, longSummary, summary]);

  return (
    <Text
      {...props}
      onPress={() => setShowFullString(!showFullString)}
      selectable>
      {showFullString ? originalString : summary}
    </Text>
  );
}
