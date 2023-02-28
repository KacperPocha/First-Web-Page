const allCars = [];

fetch("http://localhost:3000/data").then((response) => {
  response.json().then((jsonData) => {
    allCars = jsonData;
  });
}); 



