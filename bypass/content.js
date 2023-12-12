// content.js

// Function to decode the JWT token and modify the hasSubscription field
function modifyToken() {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      try {
        // Decoding the JWT token
        const tokenParts = authToken.split('.');
        const tokenPayload = JSON.parse(atob(tokenParts[1]));
  
        // Modify hasSubscription to true
        tokenPayload.hasSubscription = true;
  
        // Update the token in localStorage
        const updatedToken = `${tokenParts[0]}.${btoa(JSON.stringify(tokenPayload))}.${tokenParts[2]}`;
        localStorage.setItem('authToken', updatedToken);
        console.log('Token updated:', updatedToken);
      } catch (error) {
        console.error('Error modifying token:', error);
      }
    }
  }
  
  // Run the function to modify the token
  modifyToken();
  