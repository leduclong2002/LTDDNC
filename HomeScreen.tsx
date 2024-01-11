import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Trang chủ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Màu nền
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue', // Màu văn bản
  },
});

export default HomeScreen;
