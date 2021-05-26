import {StyleSheet} from 'react-native';
import * as colors from '../colors';

export const compStyles = StyleSheet.create({
  widgetHeader: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.textColors.secondary,
    marginBottom: 10,
    textAlign: 'left',
  },
  bodyText: {
    color: colors.textColors.secondaryLight,
    fontSize: 16,
  },
});

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },

  scrollView: {
    zIndex: 1,
    backgroundColor: '#fff',
    height: '100%',
    position: 'relative',
  },

  floatingBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 11,
    bottom: 0,

    width: '100%',
    padding: 10,
    paddingHorizontal: 40,
    marginBottom: 0,
    borderRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.iconBgColor,
    borderColor: '#ededed',
    borderWidth: 1,
  },

  buyNowButton: {
    borderWidth: 0,
    borderColor: '#fff',
    elevation: 20,
  },
  buyNowButtonText: {
    color: '#fff',
  },

  priceWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: '#fff',
  },
  extraItem: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  priceNumber: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },

  imageCarousel: {
    paddingBottom: 3,
    backgroundColor: '#eee',
  },

  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
    paddingHorizontal: 10,
  },

  avatar: {
    borderRadius: 20,
    padding: 4,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    marginTop: -40,
  },
  avatarImage: {
    borderRadius: 15,
    width: 100,
    height: 100,
  },

  rightInfo: {
    maxWidth: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },

  heartIconWrapper: {
    marginLeft: 20,
    paddingTop: 10,
    width: '40%',
    alignItems: 'flex-end',
  },
  rightInfoIcon_svg: {
    padding: 5,
    borderRadius: 50,
    color: '#FF0000',
  },

  header: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    paddingBottom: 0,
  },

  headerTitle: {
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'left',
  },

  details: {
    padding: 10,
    paddingVertical: 20,
    marginBottom: 10,
  },

  serviceableItems: {
    marginTop: 20,
    marginBottom: 50,
    paddingHorizontal: 10,
  },
});
