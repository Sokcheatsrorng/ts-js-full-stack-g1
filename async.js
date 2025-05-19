

// using async await to fetch data 
let dataFetching = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const response = await data.json();
    console.log(response.products);
    return response;
  

}

// console.log(dataFetching());
dataFetching();