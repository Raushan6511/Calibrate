import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';
import {styles} from './category-styles';
import ESText from '../../components/text/ESText';

const Category: React.FC = () => {
  const [productCategory, setProductCategory] = useState();
  //https://jsonplaceholder.typicode.com/users
  const getProductCategory = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      console.log('json', json);
      setProductCategory(json);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
      console.log('productCategory', productCategory);
    }
  };

  useEffect(() => {
    getProductCategory();
  }, []);

  console.log('productCategory', productCategory);

  const renderItem = (item: any) => {
    console.log('item:', item);
    return <ESText>{item.category}</ESText>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Category Screen</Text>
      <FlatList
        data={productCategory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // ListEmptyComponent={() => (
        //   <View style={{alignItems: 'center', marginTop: 20}}>
        //     <Text>No items found</Text>
        //   </View>
        // )}
      />
    </View>
  );
};

export default Category;
