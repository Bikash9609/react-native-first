import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { Header, Item, Input, Button, Left, Tab, Tabs, TabHeading } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import _ from 'lodash';

import { setProfiles, setSelectedProfile } from '../../store/listing/reducers';
import * as listingActions from '../../store/listing/actions';

import Loader from '../../components/Loader/index';
import Card from './components/Card';
import SearchItem from './components/ListItem';

import { styles, gridStyles as gStyles } from './styles';
import * as ListingStyled from './listing-styled';
import { primaryColor } from 'styles/colors';

function GridDisplay({ data, onPress, totalResults, headerComponent }) {
  return (
    <View style={gStyles.gridWrapper}>
      <FlatList
        ListHeaderComponent={headerComponent}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.item}
        key={({ item }) => item._id}
        data={data}
        renderItem={({ item, index }) => <Card data={item} onPress={onPress} />}
      />
    </View>
  );
}

export function HeaderComponent({ searchData, searchText, totalResults }) {
  return (
    <>
      <View style={styles.searchSuggestion}>
        <Text style={styles.searchLabelText}>
          Showing results for "<Text style={styles.searchText}>{searchText}</Text>"
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
      </View>

      <View style={gStyles.header}>
        <Text style={gStyles.gridHeaderLeft}>RESULTS</Text>
        <Text style={gStyles.gridHeaderRight}>
          {totalResults} matching {totalResults > 1 ? 'results' : 'result'}
        </Text>
      </View>
    </>
  );
}

export function Index({ navigation }) {
  const dispatch = useDispatch();

  const { searchData, loading } = useSelector((state) => ({
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
    navigation.navigate('Details', { userId: id });
  };

  return (
    <SafeAreaView>
      <View style={styles.scrollView}>
        <Header searchBar transparent androidStatusBarColor="orange">
          <Left style={styles.backButton}>
            <Entypo name="chevron-left" size={32} onPress={() => navigation.navigate('Home')} />
          </Left>

          <Item style={styles.searchInput}>
            <AntDesign name="search1" size={19} />
            <Input placeholder="Search" value={searchText} onChangeText={onChangeText} />
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

        {loading && <Loader header="90%" />}

        {searchData?.data?.length > 0 ? (
          <>
            <GridDisplay
              headerComponent={
                <HeaderComponent
                  searchData={searchData}
                  searchText={searchText}
                  totalResults={searchData?.totalResultsCount}
                />
              }
              data={searchData.data}
              totalResults={searchData?.totalResultsCount}
              onPress={onCardPress}
            />
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

export default Index;
