import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation, cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedToCartMessage, setAddedToCartMessage] = useState('');

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
      <TouchableOpacity onPress={() => navigateToProductDescription(item)}>
        <View style={styles.productContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
          <Button
            title={isProductInCart ? 'Added to Cart' : 'Add to Cart'}
            disabled={isProductInCart}
            onPress={() => addToCart(item)}
          />
        </View>
      </TouchableOpacity>
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
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {addedToCartMessage ? (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{addedToCartMessage}</Text>
        </View>
      ) : null}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productList: {
    paddingBottom: 20,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align the button to the end
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productDetails: {
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
  messageContainer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  messageText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
