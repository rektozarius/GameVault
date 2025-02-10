export const responseHandler = async (response) => {
    try {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }