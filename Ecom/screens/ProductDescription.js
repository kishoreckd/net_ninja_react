import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
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
    <View style={styles.container}>
     
      {loading ? (
         <View style={styles.loaderContainer}>
         <ActivityIndicator size="large" color="#0000ff" />
       </View>
      ) : (
        <>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>
        </>
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
  },
});

export default ProductDescription;
