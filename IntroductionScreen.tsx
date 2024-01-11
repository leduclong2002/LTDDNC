import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface IntroductionScreenProps {
  navigation: any; 
}

const IntroductionScreen: React.FC<IntroductionScreenProps> = ({ navigation }) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(interval);
      navigation.navigate('Home');
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin sinh viên</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Tên:</Text>
        <Text style={styles.value}>Lê Đức Long</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>MSSV:</Text>
        <Text style={styles.value}>20110299</Text>
      </View>

      <Image source={require('./avatar1.jpg')} style={styles.image} />

      <Text style={styles.countdownText}>Chuyển sang trang chủ sau: {countdown} giây</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Màu nền
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
    borderWidth: 5,
    borderColor: 'white', // Màu viền ảnh
  },
  countdownText: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});

export default IntroductionScreen;
