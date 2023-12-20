import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {COLORS} from '../theme/theme';
import {useStore} from '../store/store';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';

const DetailsScreen = ({navigation, route}: any) => {
  const [fullDesc, setFullDesc] = useState(false);
  const ItemOfItem = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeansList,
  )[route.params.index];
  const BackHandler = () => {
    navigation.pop();
  };
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );

  const ToggleFavourite = (favourite: boolean, id: string, type: string) => {
    {
      favourite
        ? deleteFromFavoriteList(type, id)
        : addToFavoriteList(type, id);
    }
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemOfItem.imagelink_portrait}
          type={ItemOfItem.type}
          id={ItemOfItem.id}
          favourite={ItemOfItem.favourite}
          name={ItemOfItem.name}
          special_ingredient={ItemOfItem.special_ingredient}
          ingredients={ItemOfItem.ingredients}
          average_rating={ItemOfItem.average_rating}
          ratings_count={ItemOfItem.ratings_count}
          roasted={ItemOfItem.roasted}
          BackHandle={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />
        <View style={styles.InfoContainer}>
          <Text style={styles.InfoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback>
              <Text style={{color:'white'}}>{route.params.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  InfoContainer: {},
  InfoTitle: {},
});
