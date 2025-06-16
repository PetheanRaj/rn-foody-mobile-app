interface Category {
  id: number;
  name: string;
}

export interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: string;
  blurhash: string;
  city: string;
  currency: string;
  delivery_price: number;
  location: [number, number];
  online: boolean;
  tags: string[];
}

export interface RestaurantCardProps {
  restaurant: Restaurant;
}



export type SearchBarProps = {
  onSearch: (text: string) => void;
};


export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Restaurant: undefined; 
  SuccessScreen: undefined; 
  RestaurantView: { restaurantId: string };
  Order: { restaurant: any; quantity: number };
  AddtoCart: { restaurant: any; quantity: number };
};

export interface OrderProps {
    restaurant: any;
    quantity: number;
}

export interface OrderScreenProps {
  route: {
    params: {
      restaurant: Restaurant;
      quantity?: number;
    };
  };
  navigation: {
    navigate: (route: string, params?: { restaurant: Restaurant; quantity?: number }) => unknown;
    setParams: (params: any) => void;
  };
}