import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const searchBarStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 16,
    margin: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  input: {
    fontSize: 16,
    color: colors.dark,
    padding: 8,
    fontFamily: 'Sen-Regular',
  },
});

export default searchBarStyles;