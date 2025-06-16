import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CategoryListProps } from '../types';
import categoryStyles from '../styles/componentStyles/categoryStyles';

interface CategoryListWithActiveProps extends CategoryListProps {
  selectedCategoryId: number | null;
}

const CategoryList: React.FC<CategoryListWithActiveProps> = ({
  categories,
  onSelectCategory,
  selectedCategoryId,
}) => {
  const renderCategoryItem = ({ item }: { item: { id: number; name: string } }) => {
    const isActive = item.id === selectedCategoryId;
    return (
      <TouchableOpacity onPress={() => onSelectCategory(item)}>
        <View style={[
          categoryStyles.categoryItem,
          isActive ? categoryStyles.activeCategoryItem : null
        ]}>
          <Text style={[
            categoryStyles.categoryText,
            isActive ? categoryStyles.activeCategoryText : null
          ]}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={item => item?.id?.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={categoryStyles.categoryList}
      ListEmptyComponent={
        <View style={{ padding: 20 }}>
          <Text>No categories available.</Text>
        </View>
      }
    />
  );
};

export default CategoryList;