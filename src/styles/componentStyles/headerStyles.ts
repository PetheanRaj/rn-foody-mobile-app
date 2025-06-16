import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const headerStyles = StyleSheet.create({
  header: {
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: colors.cardBackground,
    paddingBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuIcon: {
    fontSize: 28,
    marginRight: 12,
    fontFamily: 'Sen-Bold', // bold icon
  },
  deliverTo: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Sen-Bold',
  },
  location: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Sen-SemiBold',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartIcon: {
    fontSize: 28,
    color: colors.dark,
    fontFamily: 'Sen-Bold',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.cardBackground,
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Sen-Bold',
  },
  greeting: {
    marginTop: 18,
    fontSize: 17,
    color: colors.dark,
    fontFamily: 'Sen-Regular',
  },
});

export default headerStyles;