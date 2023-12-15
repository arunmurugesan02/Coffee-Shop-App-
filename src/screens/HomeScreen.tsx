import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
    // console.log(temp);
  }
  let categories = Object.keys(temp);
  // console.log(categories);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: any) => item.name == category);
    return coffeeList;
  }
};

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeansList = useStore((state: any) => state.BeansList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  // console.log(categoryIndex);
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );
  // console.log(sortedCoffee);
  const TabBar = useBottomTabBarHeight();

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollFlexView}>
        {/*App Header*/}
        <HeaderBar />

        <Text style={styles.ScreenTitle}>
          Find the best {'\n'}coffee for you
        </Text>
        {/*Search Input*/}
        <View style={styles.searchContainer}>
          <Pressable onPress={() => {}}>
            <CustomIcon
              name="search"
              size={FONTSIZE.size_20}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryGreyHex
              }
              style={styles.InputIcon}
            />
          </Pressable>
          <TextInput
            placeholder="Find your coffe..."
            placeholderTextColor={COLORS.primaryGreyHex}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            style={styles.TextInputContainer}
          />
        </View>
        {/*Category Scroller */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
            key={index.toString()}
            >
              <TouchableOpacity onPress={()=>{}}>
                <Text style={styles.CategoryActiveText}>{data}</Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory}></View>
                ) : (
                    <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollFlexView: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: SPACING.space_28,
    color: COLORS.primaryWhiteHex,
    padding: SPACING.space_30,
  },
  searchContainer: {
    margin: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },

  InputIcon: {
    margin: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {},
  CategoryActiveText: {color:'white',padding:10},
  ActiveCategory:{}
});
