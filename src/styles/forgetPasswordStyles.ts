import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const forgetPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    marginBottom: 12,
  },
  error: {
    color: colors.error,
    marginBottom: 12,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: colors.link,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
});

export default forgetPasswordStyles;
