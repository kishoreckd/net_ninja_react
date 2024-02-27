import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const CartPage = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const handleBuyNow = () => {

    console.log('Buy Now:', cart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cartItemsContainer}
          />
          <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
        </>
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      )}
      {cart.length > 0 && (
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buyNowButtonText}>Buy Now - ${totalPrice.toFixed(2)}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItemsContainer: {
    flexGrow: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  emptyCart: {
    fontSize: 16,
    textAlign: 'center',
  },
  buyNowButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buyNowButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
  },
});

export default CartPage;
