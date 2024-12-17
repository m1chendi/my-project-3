import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyLanguagesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Мои языки программирования</Text>
      <Text style={styles.sectionTitle}>Я студентка Хекслет Колледжа на специальности "Программист".</Text>
      <Text style={styles.text}>
        Я учусь на третьем курсе и хочу представить те языки программирования, которые я изучила за это время.
      </Text>

      <Text style={styles.sectionTitle}>1. Python</Text>
      <Text style={styles.text}>
        Python — один из моих любимых языков. Он очень гибкий и прост в использовании, особенно для написания скриптов, автоматизации задач, а также для научных и аналитических приложений.
      </Text>

      <Text style={styles.sectionTitle}>2. JavaScript</Text>
      <Text style={styles.text}>
        JavaScript — важнейший язык для веб-разработки. Он позволяет создавать интерактивные и динамичные веб-страницы.
      </Text>

      <Text style={styles.sectionTitle}>3. SQL</Text>
      <Text style={styles.text}>
        SQL (Structured Query Language) — язык запросов, используемый для работы с реляционными базами данных. В своей работе я часто использую SQL для написания запросов, управления данными и оптимизации баз данных.
      </Text>

      <Text style={styles.text}>
        Я продолжаю изучать новые языки и технологии, чтобы расширить свои знания и улучшить навыки. Каждый язык имеет свои особенности, и каждый из них может быть полезен в определенных проектах и задачах.
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

export default MyLanguagesScreen;
