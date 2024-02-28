import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';

const ProductDescription = ({ route, navigation }) => {
  const { product } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    };

    fetchData();
  }, []);


  return (
    <View className="flex-1 bg-white p-4">
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <Image source={{ uri: product.image }} className="w-full h-48 mb-4" />
          <View className="flex-1">
            <Text className="text-2xl font-bold mb-2">{product.title}</Text>
            <Text className="text-lg text-gray-700 mb-2">${product.price}</Text>
            <Text className="text-base mb-4">{product.description}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDescription;
