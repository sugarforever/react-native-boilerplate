/**
 * Minimalist Theme Configuration
 *
 * A sleek, minimal design with rich brown tones,
 * clean white backgrounds, and modern geometric shapes.
 */

import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper';

// Sleek brown color palette
const minimalistColors = {
  light: {
    primary: '#3E2723',                    // Deep espresso brown
    onPrimary: '#ffffff',                  // White text on primary
    primaryContainer: '#D7CCC8',           // Light warm brown
    onPrimaryContainer: '#3E2723',         // Dark text on primary container

    secondary: '#5D4037',                  // Rich chocolate brown
    onSecondary: '#ffffff',                // White text on secondary
    secondaryContainer: '#BCAAA4',         // Medium warm brown
    onSecondaryContainer: '#3E2723',       // Dark text on secondary container

    tertiary: '#795548',                   // Warm brown
    onTertiary: '#ffffff',                 // White text on tertiary
    tertiaryContainer: '#D7CCC8',          // Light brown
    onTertiaryContainer: '#3E2723',        // Dark text on tertiary container

    error: '#6D4C41',                      // Brown error (sleek)
    onError: '#ffffff',                    // White text on error
    errorContainer: '#FFCCBC',             // Light error container
    onErrorContainer: '#3E2723',           // Dark text on error container

    background: '#FFFFFF',                 // Pure white
    onBackground: '#3E2723',               // Dark brown text

    surface: '#FAFAFA',                    // Off-white surface
    onSurface: '#3E2723',                  // Dark brown text
    surfaceVariant: '#F5F5F5',             // Light gray surface
    onSurfaceVariant: '#5D4037',           // Medium brown text

    outline: '#A1887F',                    // Brown outline
    outlineVariant: '#D7CCC8',             // Light brown outline

    shadow: '#000000',                     // Black shadow
    scrim: '#000000',                      // Black scrim

    inverseSurface: '#3E2723',             // Dark brown inverse
    inverseOnSurface: '#FFFFFF',           // White text on inverse
    inversePrimary: '#BCAAA4',             // Light brown inverse primary

    elevation: {
      level0: 'transparent',
      level1: '#FAFAFA',
      level2: '#F5F5F5',
      level3: '#EFEBE9',
      level4: '#EFEBE9',
      level5: '#EFEBE9',
    },

    surfaceDisabled: 'rgba(62, 39, 35, 0.12)',
    onSurfaceDisabled: 'rgba(62, 39, 35, 0.38)',
    backdrop: 'rgba(62, 39, 35, 0.4)',
  },
  dark: {
    primary: '#BCAAA4',                    // Warm light brown
    onPrimary: '#3E2723',                  // Dark brown text
    primaryContainer: '#5D4037',           // Medium brown container
    onPrimaryContainer: '#EFEBE9',         // Light text on container

    secondary: '#A1887F',                  // Muted brown
    onSecondary: '#3E2723',                // Dark brown text
    secondaryContainer: '#4E342E',         // Dark chocolate container
    onSecondaryContainer: '#D7CCC8',       // Light text on container

    tertiary: '#8D6E63',                   // Medium warm brown
    onTertiary: '#FFFFFF',                 // White text
    tertiaryContainer: '#4E342E',          // Dark container
    onTertiaryContainer: '#BCAAA4',        // Light text on container

    error: '#FFAB91',                      // Light coral error
    onError: '#3E2723',                    // Dark text on error
    errorContainer: '#6D4C41',             // Brown error container
    onErrorContainer: '#FFCCBC',           // Light text on error container

    background: '#1C1B1F',                 // Very dark brown-black
    onBackground: '#E6E1E5',               // Light text

    surface: '#1C1B1F',                    // Dark brown-black surface
    onSurface: '#E6E1E5',                  // Light text
    surfaceVariant: '#3E2723',             // Dark brown variant
    onSurfaceVariant: '#BCAAA4',           // Light brown text

    outline: '#6D4C41',                    // Dark brown outline
    outlineVariant: '#4E342E',             // Darker outline

    shadow: '#000000',                     // Black shadow
    scrim: '#000000',                      // Black scrim

    inverseSurface: '#E6E1E5',             // Light inverse
    inverseOnSurface: '#3E2723',           // Dark text on inverse
    inversePrimary: '#5D4037',             // Brown inverse primary

    elevation: {
      level0: 'transparent',
      level1: '#2B2930',
      level2: '#322F37',
      level3: '#38353F',
      level4: '#3B3841',
      level5: '#3F3C45',
    },

    surfaceDisabled: 'rgba(230, 225, 229, 0.12)',
    onSurfaceDisabled: 'rgba(230, 225, 229, 0.38)',
    backdrop: 'rgba(62, 39, 35, 0.4)',
  },
};

// Light minimalist theme with sleek brown palette
export const MinimalistLightTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 3,
  colors: {
    ...MD3LightTheme.colors,
    ...minimalistColors.light,
  },
};

// Dark minimalist theme with sleek brown palette
export const MinimalistDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 3,
  colors: {
    ...MD3DarkTheme.colors,
    ...minimalistColors.dark,
  },
};

// Export types
export type MinimalistTheme = typeof MinimalistLightTheme;
