import restaurants from '../data/restaurants.json';

export const FORGET_PWD_SUCCESS_MESSAGE = 'Please check your email for the reset link.';
export const FORGET_PWD_ERROR_MESSAGE = 'Failed to send reset link. Please try again later.';
export const RESET_PWD_SUCCESS_MESSAGE = 'Your password has been successfully reset.';

export const SEARCH_BAR_PLACEHOLDER = 'Search dishes, restaurants';

export const LOGIN_USER_NOT_FOUND = 'No user found. Please register.';
export const LOGIN_INVALID_CREDENTIALS = 'Invalid email or password. Please try again.';
export const LOGIN_SUCCESS_MESSAGE = 'Login successful. Welcome back!';
export const LOGIN_ERROR_MESSAGE = 'Failed to login';

export const REGISTER_ERROR_MESSAGE = 'Registration failed. Please try again.';
export const REGISTER_INPUT_VALIDATION = 'Please fill all fields';
export const REGISTER_PASSWORD_MISMATCH = 'Passwords do not match. Please try again.';
export const REGISTER_SUCCESS_MESSAGE = 'Registration successful. Please log in.';

export const LOGIN_PATH = 'Login';
export const REGISTER_PATH = 'Register';
export const FORGOT_PASSWORD_PATH = 'ForgotPassword';
export const RESET_PASSWORD_PATH = 'ResetPassword';
export const HOME_PATH = 'Home';
export const PROFILE_PATH = 'Profile';
export const ONBOARDING_PATH = 'Onboarding';
export const RESTAURANT_PATH = 'RestaurantView';
export const ORDER_PATH = 'Order';
export const ADD_TO_CART_PATH = 'AddtoCart';
export const PAYMENT_SUCCESS = 'SuccessScreen';

const categorySet = new Set();
restaurants.forEach(r => {
  if (Array.isArray(r.tags)) {
    r.tags.forEach(tag => categorySet.add(tag));
  }
});

export const CATEGORIES = Array.from(categorySet).sort();

CATEGORIES.forEach(cat => {
  const constName = cat
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
  exports[constName] = cat;
});
