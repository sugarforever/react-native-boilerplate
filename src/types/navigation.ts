/**
 * Navigation Type Definitions
 *
 * Type-safe navigation for React Navigation
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the route params for each screen
export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

// Screen-specific props types
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

// Generic navigation prop
export type RootStackNavigationProp = NativeStackScreenProps<RootStackParamList>['navigation'];
export type RootStackRouteProp = NativeStackScreenProps<RootStackParamList>['route'];

// Declare global navigation types for React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
