import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const CartPage = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View className="flex-row items-center justify-between border-b border-gray-300 py-2">
      <Image source={{ uri: item.image }} className="w-12 h-12 mr-4" />
      <View className="flex-1">
        <Text className="text-base font-semibold">{item.title}</Text>
        <Text className="text-sm text-gray-600">${item.price}</Text>
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
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Cart</Text>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <Text className="text-lg font-bold mt-4">Total: ${totalPrice.toFixed(2)}</Text>
        </>
      ) : (
        <Text className="text-lg text-center">Your cart is empty</Text>
      )}
      {cart.length > 0 && (
        <TouchableOpacity
          className="bg-blue-500 rounded-md py-3 mt-4 items-center"
          onPress={handleBuyNow}
        >
          <Text className="text-white font-bold text-lg">Buy Now - ${totalPrice.toFixed(2)}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartPage;
