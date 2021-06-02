import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function CarouselComp({
  data,
  notImageCarousel,
  renderComponent,
  carouselHeight,
  ...rest
}) {
  const { height, width } = Dimensions.get('window');
  const _data = [
    {
      title: 'text',
    },
    {
      title: 'Text2',
    },
    {
      title: 'text',
    },
  ];

  const _renderItem = (item, index) => {
    return (
      <View style={styles({ carouselHeight }).slide}>
        <ImageBackground
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmAmekGXJcSLKiQGdkLxeqz6lQCONqubZ5g&usqp=CAU',
          }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
          imageStyle={styles().slideImage}>
          {/* <Text style={styles().slideText}>This is a content</Text> */}
        </ImageBackground>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        style={styles().carousel}
        data={data || _data}
        renderItem={({ item, index }) =>
          notImageCarousel ? renderComponent(item, index) : _renderItem(item, index)
        }
        sliderWidth={width && width}
        sliderHeight={height && (30 / 100) * height}
        itemWidth={width && width}
        itemHeight={height && (30 / 100) * height}
        fadingEdgeLength={0}
        hasParallaxImages
        centerContent
        layout="stack"
        {...rest}
      />
    </View>
  );
}

const styles = (props) =>
  StyleSheet.create({
    carousel: {
      width: '100%',
      height: '100%',
      marginTop: 5,
      fontSize: 29,
      backgroundColor: '#eee',
      elevation: 100,
      marginVertical: 20,
      marginHorizontal: 20,
    },
    slide: {
      height: props?.carouselHeight || 400,
      borderRadius: 15,
      backgroundColor: '#000',
    },
    slideImage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    slideText: {
      alignSelf: 'flex-end',
      height: '100%',
    },
  });
