import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

// Define the LoginScreen functional component
function LoginScreen() {
    // State variables for email and password input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Access the theme from React Native Paper for consistent styling
    const theme = useTheme();

    // Handle the sign-in button press
    const handleSignIn = () => {
        // In a real application, you would integrate with your authentication service here.
        // For now, we'll just log the credentials.
        console.log('Sign In Pressed');
        console.log('Email:', email);
        console.log('Password:', password);
        // You would typically navigate to the main app screen after successful login
        // For example: navigation.navigate('Home');
    };

    // Handle the forgot password link press
    const handleForgotPassword = () => {
        console.log('Forgot Password Pressed');
        // Navigate to a password reset screen
        // For example: navigation.navigate('ForgotPassword');
    };

    // Handle the sign-up link press
    const handleSignUp = () => {
        console.log('Sign Up Pressed');
        // Navigate to a registration screen
        // For example: navigation.navigate('SignUp');
    };

    return (
        <LinearGradient
            colors={['#ffff', '#E6E6FA']} // Start, middle (white), and end colors
            style={styles.linearGradient} // Apply gradient styles
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <SafeAreaView style={styles.safeArea}>
                {/* Main container for the login form */}
                <View style={styles.container}>
                    {/* Logo Image */}
                    <Image
                        source={{ uri: 'https://placehold.co/150x150/007bff/ffffff?text=LOGO' }} // Placeholder logo image
                        style={styles.logo}
                        accessibilityLabel="App Logo" // Accessibility label for screen readers
                        importantForAccessibility="yes" // Ensures the image is important for accessibility
                    />

                    {/* Title of the Login Screen */}
                    <Text style={styles.title} accessibilityRole="header">
                        Welcome Back!
                    </Text>

                    {/* Email Address Input Field */}
                    <TextInput
                        label="Email Address" // Label for the input field
                        value={email} // Binds the input to the email state
                        onChangeText={setEmail} // Updates the email state on text change
                        mode="outlined" // Outlined style for the input
                        keyboardType="email-address" // Optimizes keyboard for email input
                        autoCapitalize="none" // Prevents auto-capitalization
                        style={styles.input} // Custom styling for the input
                        accessibilityLabel="Email address input field" // Accessibility label
                        importantForAccessibility="yes" // Ensures input is important for accessibility
                    />

                    {/* Password Input Field */}
                    <TextInput
                        label="Password" // Label for the input field
                        value={password} // Binds the input to the password state
                        onChangeText={setPassword} // Updates the password state on text change
                        mode="outlined" // Outlined style for the input
                        secureTextEntry // Hides the input text for security
                        style={styles.input} // Custom styling for the input
                        accessibilityLabel="Password input field" // Accessibility label
                        importantForAccessibility="yes" // Ensures input is important for accessibility
                    />

                    {/* Sign In Button */}
                    <Button
                        mode="contained" // Contained style for the button
                        onPress={handleSignIn} // Calls handleSignIn function on press
                        style={styles.button} // Custom styling for the button
                        labelStyle={styles.buttonLabel} // Styling for the button's text
                        accessibilityLabel="Sign in button" // Accessibility label
                        importantForAccessibility="yes" // Ensures button is important for accessibility
                    >
                        Sign In
                    </Button>

                    {/* Forgot Password Link */}
                    <TouchableOpacity
                        onPress={handleForgotPassword} // Calls handleForgotPassword on press
                        style={styles.linkContainer} // Container for touchable area
                        accessibilityRole="link" // Indicates it's a link for screen readers
                        accessibilityLabel="Forgot password link" // Accessibility label
                        importantForAccessibility="yes" // Ensures link is important for accessibility
                    >
                        <Text style={[styles.linkText, { color: theme.colors.primary }]}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>

                    {/* Don't have an account? Sign Up Link */}
                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Don't have an account? </Text>
                        <TouchableOpacity
                            onPress={handleSignUp} // Calls handleSignUp on press
                            accessibilityRole="link" // Indicates it's a link for screen readers
                            accessibilityLabel="Sign up link" // Accessibility label
                            importantForAccessibility="yes" // Ensures link is important for accessibility
                        >
                            <Text style={[styles.linkText, { color: theme.colors.primary }]}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

// StyleSheet for defining the component's styles
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1, // Takes up the full height of the screen
    },
    safeArea: {
        flex: 1, // Takes up the full height of the screen
    },
    container: {
        flex: 1, // Allows the container to grow and shrink
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        padding: 20, // Padding around the content
    },
    logo: {
        width: 150, // Fixed width for the logo
        height: 150, // Fixed height for the logo
        marginBottom: 20, // Space below the logo
        borderRadius: 75, // Makes the logo circular
        backgroundColor: '#e0e0e0', // Placeholder background for the logo
    },
    title: {
        fontSize: 28, // Larger font size for the title
        fontWeight: 'bold', // Bold font weight
        marginBottom: 30, // Space below the title
        color: '#333', // Darker text color
    },
    input: {
        width: '100%', // Full width of the container
        marginBottom: 15, // Space between input fields
    },
    button: {
        width: '100%', // Full width for the button
        paddingVertical: 8, // Vertical padding for the button
        marginTop: 10, // Space above the button
        borderRadius: 8, // Rounded corners for the button
    },
    buttonLabel: {
        fontSize: 18, // Larger font size for button text
        fontWeight: 'bold', // Bold font weight for button text
    },
    linkContainer: {
        marginTop: 15, // Space above the forgot password link
    },
    linkText: {
        fontSize: 16, // Font size for link text
        textDecorationLine: 'underline', // Underline for link appearance
    },
    signUpContainer: {
        flexDirection: 'row', // Arranges text and link in a row
        marginTop: 30, // Space above the sign-up section
        alignItems: 'center', // Aligns items vertically in the center
    },
    signUpText: {
        fontSize: 16, // Font size for "Don't have an account?" text
        color: '#555', // Slightly lighter text color
    },
});

export default LoginScreen;
