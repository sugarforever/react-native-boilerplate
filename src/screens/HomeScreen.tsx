import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Text,
  Button,
  Card,
  useTheme,
  Surface,
  IconButton,
} from 'react-native-paper';
import type { HomeScreenProps } from '../types/navigation';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Surface style={styles.iconContainer} elevation={2}>
          <IconButton
            icon="home"
            size={48}
            iconColor={theme.colors.primary}
          />
        </Surface>

        <Text variant="displaySmall" style={[styles.title, { color: theme.colors.onBackground }]}>
          Welcome Home
        </Text>

        <Text variant="bodyLarge" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
          This is your modern React Native boilerplate powered by React Native Paper
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.cardTitle}>
              Features
            </Text>
            <Text variant="bodyMedium" style={styles.featureText}>
              • Material Design 3 theming
            </Text>
            <Text variant="bodyMedium" style={styles.featureText}>
              • Brown minimalist color palette
            </Text>
            <Text variant="bodyMedium" style={styles.featureText}>
              • React Navigation integration
            </Text>
            <Text variant="bodyMedium" style={styles.featureText}>
              • TypeScript support
            </Text>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          icon="cog"
          onPress={() => navigation.navigate('Settings')}
          style={styles.button}
        >
          Go to Settings
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 60,
    marginBottom: 24,
  },
  title: {
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 32,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    marginBottom: 24,
  },
  cardTitle: {
    marginBottom: 12,
  },
  featureText: {
    marginVertical: 4,
  },
  button: {
    width: '100%',
  },
});

export default HomeScreen;
