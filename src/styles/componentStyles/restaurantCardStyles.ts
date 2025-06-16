import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const restaurantCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.primaryLight,
    borderRadius: 26,
    marginVertical: 12,
    marginHorizontal: 8,
    padding: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: colors.inputBackground,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 2,
    fontFamily: 'Sen-Bold',
  },
  desc: {
    color: colors.dark,
    marginBottom: 8,
    fontFamily: 'Sen-Regular',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rating: {
    color: colors.primary,
    fontWeight: 'bold',
    marginRight: 8,
    fontFamily: 'Sen-Bold',
  },
  delivery: {
    color: colors.dark,
    marginRight: 8,
    fontFamily: 'Sen-Medium',
  },
  time: {
    color: colors.dark,
    fontFamily: 'Sen-Medium',
  },
  tag: {
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    fontFamily: 'Sen-Medium',
    color: colors.primary,
    fontSize: 12,
    marginRight: 6,
  }
});

export default restaurantCardStyles;