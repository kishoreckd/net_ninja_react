import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useColorScheme } from 'nativewind'; // Assuming nativewind provides useColorScheme hook

const ProductDescription = ({ route, navigation }) => {
  const { product } = route.params;
  const [loading, setLoading] = useState(true);
  const { colorScheme } = useColorScheme(); // Accessing color scheme

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    };

    fetchData();
  }, []);

  return (
    <View className={`flex-1 bg-${colorScheme === 'dark' ? 'black' : 'white'} p-4`}>
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <Image source={{ uri: product.image }} className="w-full h-48 mb-4" />
          <View className="flex-1">
            <Text className={`text-2xl font-bold mb-2 ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>{product.title}</Text>
            <Text className={`text-lg mb-2 ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>${product.price}</Text>
            <Text className={`text-base mb-4 ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>{product.description}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDescription;
