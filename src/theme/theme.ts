import { DefaultTheme } from 'react-native-paper';

const MyCustomTheme = {
  ...DefaultTheme, // Start with the default theme
  colors: {
    ...DefaultTheme.colors, // Keep default colors and override specific ones
    primary: '#B19CD9', // Your brand color for primary elements (e.g., focused input border, button background)
    accent: '#7FDBDA', // A secondary color for accents
    text: '#374151', // Default text color
    placeholder: '#888888', // Placeholder text color
    background: '#f5f5f5', // Background color for surfaces like inputs
    // You can also customize 'surface', 'error', 'onSurface', 'disabled', 'backdrop', 'notification'
  },
  roundness: 16, // Adjust global roundness for components like inputs and buttons
  // You can also define custom fonts here
  // fonts: { ...DefaultTheme.fonts, regular: { fontFamily: 'YourFont-Regular', fontWeight: 'normal' } },
};

export default MyCustomTheme;
