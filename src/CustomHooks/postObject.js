
export const postObject = (obj) => {
  return new Promise((resolve, reject) => {
      fetch('https://dummyjson.com/users/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(obj)
      })
      .then(response => {
        
          if (response.ok) {
              resolve(response.json());
          } else {
              reject(`Error: ${response.status} - ${response.statusText}`);
          }
      })
      .catch(error => {
          reject(`Fetch Error: ${error}`);
      });
  });
};