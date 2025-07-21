import { StyleSheet } from "react-native";

export const loginScreenStyles = StyleSheet.create({
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