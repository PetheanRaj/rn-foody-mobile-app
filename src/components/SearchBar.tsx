import React from 'react';
import { View, TextInput } from 'react-native';
import searchBarStyles from '../styles/componentStyles/searchBarStyles';
import { SearchBarProps } from '../types';
import { SEARCH_BAR_PLACEHOLDER } from '../constants';



const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSearch = (text: string) => {
    onSearch(text);
  };

  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.input}
        placeholder={SEARCH_BAR_PLACEHOLDER}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBar;

