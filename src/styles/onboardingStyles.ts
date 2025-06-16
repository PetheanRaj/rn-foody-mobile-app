import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    fontFamily: 'Sen-Regular',
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  title: {
    color: colors.accent,
    fontFamily: 'Sen-Bold',
    fontSize: 24
  },
  subTitle: {
    color: colors.gray,
    fontFamily: 'Sen-Regular',
    fontSize: 16
  }
})

export default onboardingStyles;