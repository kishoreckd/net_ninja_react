import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind';

const CartPage = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const { colorScheme } = useColorScheme(); // Accessing color scheme

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View className={`flex-row items-center w-full shadow-md bg-${colorScheme === 'dark' ? 'white' : 'white'} rounded-3xl p-5 my-5 justify-between border-b border-gray-300 shadow-md`}>
      <Image source={{ uri: item.image }} className="w-12 h-12 mr-4" />
      <View className="flex-1">
        <Text numberOfLines={1} className={`text-base font-semibold ${colorScheme === 'dark' ? 'text-hie' : 'text-black'}`}>{item.title}</Text>
        <Text className={`text-sm ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text className="text-red-600 font-semibold">Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const handleBuyNow = () => {
    console.log('Buy Now:', cart);
  };

  return (
    <View className={`flex-1 bg-${colorScheme === 'dark' ? 'black' : 'white'} p-4 shadow-md`}>
      <Text className={`text-2xl font-bold mb-4 ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>Cart</Text>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <Text className={`text-lg font-bold mt-4 ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>Total: ${totalPrice.toFixed(2)}</Text>
        </>
      ) : (
        <Text className={`text-lg text-center ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>Your cart is empty</Text>
      )}
      {cart.length > 0 && (
        <TouchableOpacity
          className={`bg-blue-500 rounded-xl py-3 mt-4 items-center shadow-md ${colorScheme === 'dark' ? 'bg-blue-600' : ''}`}
          onPress={handleBuyNow}
        >
          <Text className="text-white font-bold text-lg">Buy Now - ${totalPrice.toFixed(2)}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartPage;
