import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  Item,
  Input,
  Container,
  Button,
  Content,
  Left,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {AntDesign, Entypo} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import _ from 'lodash';
import {Rating} from 'react-native-ratings';

import {setProfiles, setSelectedProfile} from '../../store/listing/reducers';
import * as listingActions from '../../store/listing/actions';
import Loader from '../../components/Loader/index';
import SearchItem from './components/ListItem';
import {styles, gridStyles as gStyles} from './styles';

const GridItem = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(data?._id)} activeOpacity={0.8}>
      <View style={gStyles.item}>
        <View style={gStyles.left}>
          <Image
            source={{
              uri: 'https://cdn.dribbble.com/users/155447/avatars/normal/cc39f2a5831c130e8e988b49d642cad9.png?1609199281',
            }}
            height="100%"
            width="100%"
            style={gStyles.avatar}
            resizeMode="cover"
          />
        </View>
        <View style={gStyles.right}>
          <View style={gStyles.top}>
            <Text style={gStyles.name} adjustsFontSizeToFit>
              {data.name?.firstName} {data.name?.lastName}
            </Text>
            <Text style={gStyles.price} adjustsFontSizeToFit>
              ₹{data.price} / day
            </Text>
          </View>
          <View style={gStyles.ratingView}>
            <Rating
              fractions={1}
              imageSize={20}
              showReadOnlyText={false}
              readonly
              startingValue={data?.rating || 0}
              ratingCount={5}
            />
            <Text style={gStyles.ratingText} adjustsFontSizeToFit>
              ({data?.rating || 0}) (20+ ratings)
            </Text>
          </View>
          <Text style={gStyles.description} adjustsFontSizeToFit>
            {data?.bio.substring(0, 60)}...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function GridDisplay({data, onPress, totalResults}) {
  return (
    <View style={gStyles.gridWrapper}>
      <View style={gStyles.header}>
        <Text style={gStyles.gridHeaderLeft}>RESULTS</Text>
        <Text style={gStyles.gridHeaderRight}>
          {totalResults} matching {totalResults > 1 ? 'results' : 'result'}
        </Text>
      </View>

      <FlatList
        scrollEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.item}
        data={data}
        renderItem={({item, index}) => (
          <GridItem data={item} onPress={onPress} />
        )}
      />
    </View>
  );
}

export function Index({navigation}) {
  const dispatch = useDispatch();

  const {searchData, loading} = useSelector((state) => ({
    searchData: state.listing.profiles,
    loading: state.listing.loading,
  }));

  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState(null);
  const [page, setPage] = useState(0);

  const onClearSearchText = () => {
    dispatch(setProfiles(null));
    setSearchText('');
    setSuggestions(null);
  };

  useEffect(() => {
    if (searchData?.data) dispatch(setProfiles(null));
  }, []);

  const onShowSuggestions = (text) => {
    const keyword = text ? text : null;
    if (!keyword) return; // TODO: throw notification error

    dispatch(listingActions.searchProfiles(keyword, page));
  };

  const debouncedSearch = useCallback(
    _.debounce((text) => onShowSuggestions(text), 900),
    [],
  );

  const onChangeText = (text) => {
    setSearchText(text);
    if (text === '') {
      return dispatch(setProfiles(null));
    }
    debouncedSearch(text);
  };

  const onCardPress = (id) => {
    dispatch(listingActions.searchProfilesById(id));
    navigation.navigate('Details', {userId: id});
  };

  return (
    <SafeAreaView>
      <View style={styles.scrollView}>
        <Header searchBar transparent androidStatusBarColor="orange">
          <Left style={styles.backButton}>
            <Entypo
              name="chevron-left"
              size={32}
              onPress={() => navigation.navigate('Home')}
            />
          </Left>

          <Item style={styles.searchInput}>
            <AntDesign name="search1" size={19} />
            <Input
              placeholder="Search"
              value={searchText}
              onChangeText={onChangeText}
            />
            <AntDesign
              name={!searchText ? '' : 'closecircleo'}
              size={22}
              onPress={onClearSearchText}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        {loading && <Loader containerHeight={'90%'} />}

        {searchData?.data?.length > 0 ? (
          <View style={styles.searchSuggestion}>
            <Text style={styles.searchLabelText}>
              Showing results for "
              <Text style={styles.searchText}>{searchText}</Text>"
            </Text>

            <ScrollView
              horizontal
              scrollEnabled
              style={{
                minHeight: 40,
                minWidth: '100%',
                maxHeight: '100%',
                width: '100%',
                marginBottom: 10,
              }}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.tagsWrapper}>
                <Text>Suggestions: </Text>
                {searchData?.matchingKeywords?.map((item) => (
                  <Text style={styles.tag} key={item?._id}>
                    {item?.tag}
                  </Text>
                ))}
              </View>
            </ScrollView>

            <GridDisplay
              data={searchData.data}
              totalResults={searchData?.totalResultsCount}
              onPress={onCardPress}
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

export default Index;
