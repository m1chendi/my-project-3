import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Страница не найдена</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      marginTop: 20,
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      marginVertical: 10,
    },
  });

export default NotFoundScreen;
