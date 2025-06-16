import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const categoryStyles = StyleSheet.create({
  categoryList: {
    paddingVertical: 10,
  },
  categoryItem: {
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark,
  },
  activeCategoryItem: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  activeCategoryText: {
    color: colors.white,
  }
});

export default categoryStyles;