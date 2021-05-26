import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Rating} from 'react-native-ratings';
import {AntDesign} from '@expo/vector-icons';

import Loader from '../../components/Loader';
import ServiceItem from '../../components/ServiceItem';
import Button from '../../components/Button';
import Carousel from '../../components/carousel/carousel';
import TextSummary from '../../components/TextSummary';

import {
  styles,
  compStyles as cStyles,
} from '../../styles/screens/details-screen';
import {useSelector} from 'react-redux';

const Content = ({type, ...rest}) => {
  let component = null;

  switch (type) {
    case 'title':
      component = (
        <Text style={cStyles.widgetHeader} {...rest}>
          {rest.text}
        </Text>
      );
      break;
    case 'body':
      component = (
        <Text style={cStyles.bodyText} {...rest} selectable>
          {rest.text}
        </Text>
      );
    default:
  }

  return component;
};

const data = [
  {title: 'Name'},
  {title: 'Bikash'},
  {title: 'Tiwari'},
  {title: 'New'},
];

const Index = ({navigation}) => {
  const {profileDetails, loading, error, services} = useSelector((state) => ({
    profileDetails: state.listing.selectedProfile,
    loading: state.listing.loading,
    error: state.listing.error,
    services: state.listing.services,
  }));

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <StatusBar animated />
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.imageCarousel}>
            <Carousel carouselHeight={200} data={data} />
          </View>
          <View style={styles.headerWrapper}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarImage}
                resizeMode="cover"
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  height: '100%',
                  width: '100%',
                }}
                width={100}
                height={100}
              />
            </View>
            <View style={styles.rightInfo}>
              <Rating
                count={5}
                reviews={[]}
                ratingTextColor={'#444548'}
                fractions={1}
                jumpValue={0.5}
                showReadOnlyText={false}
                readonly
                showRating
                startingValue={profileDetails?.rating || 0}
                imageSize={22}
              />

              <View style={styles.heartIconWrapper}>
                <AntDesign
                  size={29}
                  name="hearto"
                  style={styles.rightInfoIcon_svg}
                />
              </View>
            </View>
          </View>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {profileDetails?.name?.firstName} {profileDetails?.name?.lastName}
            </Text>
          </View>

          <View style={styles.details}>
            <Content type="title" text="Description" />
            <Content
              type="body"
              text={
                <TextSummary string={profileDetails?.bio} longSummary={false} />
              }
            />
          </View>

          <View style={styles.serviceableItems}>
            {services.loading ? (
              <Loader containerHeight="20%" />
            ) : (
              services.items?.length > 0 && (
                <>
                  <Content type="title" text="Additional Services" />
                  {services.items.map((item) => (
                    <ServiceItem
                      key={item._id}
                      isAdded={false}
                      price={item?.price}
                      specialPrice={item?.specialPrice}
                      name={item?.name}
                      description={item?.description}
                    />
                  ))}
                </>
              )
            )}
          </View>
        </ScrollView>
        <LinearGradient
          colors={['#FFA500', '#cc8400']}
          start={{x: 0.9, y: 0}}
          style={styles.floatingBar}>
          <View style={styles.priceWrapper}>
            <Text style={styles.extraItem}> 1 Item </Text>
            <Text style={styles.priceNumber}>
              ₹{parseFloat(profileDetails?.price).toFixed(2)}
            </Text>
          </View>
          <Button
            boldText
            biggerFont
            buttonStyle={styles.buyNowButton}
            textStyle={styles.buyNowButtonText}>
            Book Now
          </Button>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

export default Index;
