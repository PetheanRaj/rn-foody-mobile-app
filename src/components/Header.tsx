import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import headerStyles from '../styles/componentStyles/headerStyles';
import { ADD_TO_CART_PATH } from '../constants';

const Header = ({navigation} : any  ) => (
  <View style={headerStyles.header}>
    <View style={headerStyles.row}>
      <Text style={headerStyles.menuIcon}>
        <Image source={require('../assets/images/logo.png')} style={{ width: 80, height: 40 }} />
      </Text>
      <View>
        <Text style={headerStyles.deliverTo}>DELIVER TO</Text>
        <Text style={headerStyles.location}>Native Lab office ▼</Text>
      </View>
      <View style={headerStyles.cartIconContainer}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate(ADD_TO_CART_PATH)
        }}>
        <Text style={headerStyles.cartIcon} >🛒</Text>
        </TouchableOpacity>
        <View style={headerStyles.badge}>
          <Text style={headerStyles.badgeText}>2</Text>
        </View>
      </View>
    </View>
    <Text style={headerStyles.greeting}>
      Hey Buddy, <Text style={{ fontWeight: 'bold' }}>Good Afternoon!</Text>
    </Text>
  </View>
);

export default Header;