import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind'; 
const ProductDescription = ({ route, navigation, cart, setCart }) => {
  const { product } = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err) {
        setError(err.message); 
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = () => {
    setCart([...cart, product]); // Add the selected product to the cart
    console.log('Product added to cart:', product);
  };

  return (
    <View className={`flex-1 bg-${colorScheme === 'dark' ? 'black' : 'white'} p-4`}>
      {loading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {error && (
        <View className="flex-1 justify-center items-center">
          <Text className="text-red-500 text-xl">Error: {error}</Text>
        </View>
      )}
      {product && !loading && !error && (
        <>
          <Image source={{ uri: product.image }} className="w-full h-48 mb-4" />
          <View className="flex-1">
            <Text className={`text-2xl font-bold mb-2 ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>{product.title}</Text>
            <Text className={`text-lg mb-2 ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>${product.price}</Text>
            <View className="mb-4">
              <Text
                className={`text-base ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}
              >
                {product.description}
              </Text>
              {product.details && (
                <View className="mt-4 border-top border-gray-300 pt-2">
                  <Text className="text-lg font-bold mb-2">Details:</Text>
                  <Text className="text-base">{product.details}</Text>
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={handleAddToCart}
              className={`flex-row justify-center self-center w-10/12 mt-5 bg-black rounded-xl px-6 py-3 ${colorScheme === 'dark' ? 'bg-blue-600' : 'bg-black'}`}
              disabled={false}
            >
              <Text className={`text-lg font-semibold ${colorScheme === 'dark' ? 'text-white' : 'text-white'}`}>{'Buy Now'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDescription;
