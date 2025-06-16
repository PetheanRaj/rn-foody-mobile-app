import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const registerStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: colors.dark,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: 48,
    paddingBottom: 32,
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 24,
    top: 48,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backButtonText: {
    color: colors.dark,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Sen-Bold',
  },
  headerTitle: {
    color: colors.cardBackground,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
    fontFamily: 'Sen-Bold',
  },
  headerSubtitle: {
    color: colors.gray,
    fontSize: 16,
    fontFamily: 'Sen-Regular',
  },
  form: {
    backgroundColor: colors.cardBackground,
    marginHorizontal: 0,
    marginTop: -32,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    flex: 1,
  },
  label: {
    color: colors.dark,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 16,
    fontSize: 13,
    letterSpacing: 1,
    fontFamily: 'Sen-SemiBold',
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 8,
    borderWidth: 0,
    color: colors.dark,
    fontFamily: 'Sen-Regular',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeButton: {
    marginLeft: -36,
    padding: 8,
  },
  signupButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  signupButtonText: {
    color: colors.cardBackground,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'Sen-Bold',
  },
  loginLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  loginLinkText: {
    color: colors.dark,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Sen-Regular',
  },
});

export default registerStyles;