/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  PaperProvider,
  Appbar,
  Card,
  Button,
  Text,
  FAB,
  Chip,
} from 'react-native-paper';
import { MinimalistLightTheme, MinimalistDarkTheme } from './src/theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? MinimalistDarkTheme : MinimalistLightTheme;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="React Native Paper" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: safeAreaInsets.bottom + 80 }}
      >
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title
            title="Welcome to React Native Paper"
            subtitle="Material Design for React Native"
          />
          <Card.Content>
            <Text variant="bodyMedium">
              React Native Paper is a high-quality, standard-compliant Material
              Design library that provides easy-to-use components following
              Material Design guidelines.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button mode="contained">Ok</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Title
            title="Features"
            subtitle="What's included"
            left={(props) => <Appbar.BackAction {...props} />}
          />
          <Card.Content>
            <Text variant="bodyMedium" style={styles.featureText}>
              • Material Design 3 (Material You) theming
            </Text>
            <Text variant="bodyMedium" style={styles.featureText}>
              • Dark mode support out of the box
            </Text>
            <Text variant="bodyMedium" style={styles.featureText}>
              • Customizable color schemes and typography
            </Text>
            <Text variant="bodyMedium" style={styles.featureText}>
              • 40+ production-ready components
            </Text>
            <Text variant="bodyMedium" style={styles.featureText}>
              • Accessibility-first approach
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Quick Actions" />
          <Card.Content>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.chipContainer}
            >
              <Chip icon="information" style={styles.chip}>
                Info
              </Chip>
              <Chip icon="heart" style={styles.chip}>
                Favorite
              </Chip>
              <Chip icon="share-variant" style={styles.chip}>
                Share
              </Chip>
              <Chip icon="account" style={styles.chip}>
                Profile
              </Chip>
            </ScrollView>
          </Card.Content>
        </Card>
      </ScrollView>

      <FAB
        icon="plus"
        style={[styles.fab, { bottom: safeAreaInsets.bottom + 16 }]}
        onPress={() => {}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
  },
  featureText: {
    marginVertical: 4,
  },
  chipContainer: {
    marginTop: 8,
  },
  chip: {
    marginRight: 8,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default App;
