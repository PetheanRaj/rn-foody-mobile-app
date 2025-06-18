import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import CategoryList from '../../components/CategoryList';
import RestaurantCard from '../../components/RestaurantCard';
import restaurantsData from '../../data/restaurants.json';
import { SafeAreaView } from 'react-native-safe-area-context';
import homeStyles from '../../styles/homeStyles';
import { categories } from '../../data';
import MediaPlayer from '../../components/MediaPlayer';

const HomeScreen = ({navigation} : any) => {
  const [restaurants, _] = useState(restaurantsData);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const videos = [
    require('../../assets/videos/food1.mp4'),
    require('../../assets/videos/food2.mp4'),
    require('../../assets/videos/food3.mp4'),
    require('../../assets/videos/food4.mp4'),
    require('../../assets/videos/food5.mp4'),
    require('../../assets/videos/food6.mp4'),
    require('../../assets/videos/food7.mp4'),
    require('../../assets/videos/food8.mp4'),
    require('../../assets/videos/food9.mp4'),
    require('../../assets/videos/food10.mp4'),
    require('../../assets/videos/food11.mp4'),
  ]

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  const handleSelectCategory = (category: { id: number; name: string }) => {
    setSelectedCategoryId(category.id);
    if (category.name === "All") {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(restaurant =>
        restaurant.tags.map(tag => tag.toLowerCase()).includes(category.name.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[homeStyles.container, { flex: filteredRestaurants.length > 2 ? 1 : 0 }]}>
        <Header navigation={navigation} />
        <MediaPlayer videos={videos}/>
        <SearchBar onSearch={handleSearch} />
        <CategoryList
          categories={categories}
          onSelectCategory={handleSelectCategory}
          selectedCategoryId={selectedCategoryId}
        />
        <FlatList
          data={filteredRestaurants}
          renderItem={({ item }) => (
            <RestaurantCard
              key={item.id.toString()}
              restaurant={{
                ...item,
                location: [item.location[0], item.location[1]] as [number, number],
              }}
            />
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
