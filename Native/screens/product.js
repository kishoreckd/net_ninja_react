import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind'; // Assuming nativewind provides useColorScheme hook

const Product = ({ navigation, cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedToCartMessage, setAddedToCartMessage] = useState('');
  const { colorScheme, toggleColorScheme } = useColorScheme();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const navigateToProductDescription = (product) => {
    navigation.navigate('ProductDescription', { product });
  };

  const renderProductItem = ({ item }) => {
    const isProductInCart = cart.some((product) => product.id === item.id);
  
    return (
      <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
        <TouchableOpacity onPress={() => navigateToProductDescription(item)}>
          <View className="bg-white rounded-xl">
            <Image source={{ uri: item.image }} className="w-full h-72" style={{ resizeMode: "contain" }} />
          </View>
          <View className="mt-5">
            <Text className="text-sm text-black/60 dark:text-white/70">{item.category}</Text>
            <Text className="text-lg font-semibold dark:text-white">{item.title}</Text>
            <Text className="text-2xl font-extrabold dark:text-white">${item.price}</Text>
            <Text numberOfLines={2} className="text-sm text-black/40 dark:text-white">{item.description}</Text>
          </View>
          <TouchableOpacity
            onPress={() => addToCart(item)}
            className="flex-row justify-center self-center w-10/12 mt-5 bg-black rounded-xl px-6 py-3 dark:bg-white"
          >
            <Text className="text-white dark:text-black font-bold">
              {isProductInCart ? 'Added to Cart' : 'Add to Cart'}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };
  

  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedToCartMessage(`${product.title} added to cart`);
    setTimeout(() => {
      setAddedToCartMessage('');
    }, 1000);
  };

  if (loading) {
    return (
      <View style="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style="flex-1 justify-center bg-white p-4">
      {addedToCartMessage ? (
        <View style="bg-green-500 py-2 px-4 mb-4 rounded">
          <Text style="text-white font-bold text-center">{addedToCartMessage}</Text>
        </View>
      ) : null}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Product;
