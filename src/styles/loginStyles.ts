import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const loginStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    fontFamily: 'Sen-Regular',
  },
  header: {
    backgroundColor: colors.dark,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: 48,
    paddingBottom: 32,
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.cardBackground,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Sen-Bold',
  },
  headerSubtitle: {
    color: colors.gray,
    fontSize: 16,
    marginBottom: 8,
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
    fontSize: 16,
    marginBottom: 8,
    borderWidth: 0,
    color: colors.dark,
    fontFamily: 'Sen-Regular',
  },
  passwordRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxTick: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Sen-Bold',
  },
  rememberMe: {
    color: colors.dark,
    fontSize: 14,
    fontFamily: 'Sen-Regular',
  },
  forgot: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Sen-Bold',
  },
  loginButton: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  loginButtonText: {
    color: colors.cardBackground,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'Sen-Bold',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  signupText: {
    color: colors.dark,
    fontSize: 14,
    fontFamily: 'Sen-Regular',
  },
  signupLink: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Sen-Bold',
  },
  orText: {
    textAlign: 'center',
    color: colors.gray,
    marginVertical: 8,
    fontSize: 15,
    fontFamily: 'Sen-Regular',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  socialIcon: {
    color: colors.cardBackground,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Sen-Bold',
  },
});

export default loginStyles;