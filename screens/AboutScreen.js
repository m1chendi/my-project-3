import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>О Себе</Text>
        <Text style={styles.sectionTitle}>Привет!</Text>
        <Text style={styles.text}>
          Меня зовут Настя!
        </Text>
      </ScrollView>
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
  
  export default AboutScreen;
