export const get = async <T>(URL: string): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(response.statusText);
        /**
         * We also can throw  the error based on
         * status code.
         *
         * if(response.status < 200 || response.status > 300){
         *   ...custom error message for specific status code
         * }
         */
      }
      const data = await response.json();
      resolve(data);
    } catch (error: unknown) {
      reject(error);
    }
  });
};
