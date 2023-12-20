import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ImageProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BGIcon from './BGIcon';

interface CoffeeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  name: string;
  special_ingredient: string;
  average_rating?: number;
  price: any;
  buttonPressHandler: any;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
// console.log(id.includes('C'));

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.CardLinearGradientContainer}>
      <ImageBackground
        source={imagelink_square}
        style={styles.CardImageBackground}
        resizeMode="cover">
        {id.includes('C') ? (
        <View style={styles.CardRatingContainer}>
          <CustomIcon
            name="star"
            color={COLORS.primaryOrangeHex}
            size={SPACING.space_16}
          />
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
          
        ):(<></>)}
      </ImageBackground>
      <Text style={styles.CardTitle}>{name}</Text>
      <Text style={styles.CardSubTitle}>{special_ingredient}</Text>

      <View style={styles.CardFooterRow}>
        <Text style={styles.CardPriceSymbol}>
          $ <Text style={styles.PriceColor}>{price.price}</Text>
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <BGIcon
            name={'add'}
            color={COLORS.primaryWhiteHex}
            size={FONTSIZE.size_10}
            BGcolor={COLORS.primaryOrangeHex}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  CardContainer: {},
  CardLinearGradientContainer: {
    padding: SPACING.space_16,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CardImageBackground: {
    height: 140,
    width: 140,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlackRGBA,
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
  },
  CardRatingText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_medium,
    lineHeight:22
  },
  CardTitle: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  CardSubTitle: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_light,
  },

  CardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:SPACING.space_15
  },
  CardPriceSymbol: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
  },
  PriceColor: {
    color: COLORS.primaryWhiteHex,
  },
});
export default CoffeeCard;
