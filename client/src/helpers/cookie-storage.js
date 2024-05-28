// setting data in cookie
export const setItem = (key, data, expirationDays = 1) => {
  try {
      const expires = new Date();
      expires.setDate(expires.getDate() + expirationDays);
      document.cookie = `${key}=${data}; expires=${expires.toUTCString()}; path=/`;
  } catch (error) {
      console.log('Error saving data...');
  }
}

// Getting data from cookie
export const getItem = (key) => {
  try {
      const name = `${key}=`;
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');

      for (let i = 0; i < cookieArray.length; i++) {
          let cookie = cookieArray[i];
          while (cookie.charAt(0) === ' ') {
              cookie = cookie.substring(1);
          }
          if (cookie.indexOf(name) === 0) {
              return cookie.substring(name.length, cookie.length);
          }
      }

      return null; // Return null if cookie with the specified key is not found
  } catch (error) {
      console.log('Error getting data');
  }
}

// Remove Item from cookie
export const removeItem = (key) => {
  try {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  } catch (error) {
      console.log('Error removing data');
  }
}
