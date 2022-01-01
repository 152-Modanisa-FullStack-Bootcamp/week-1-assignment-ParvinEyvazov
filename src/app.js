import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
    console.log(`-- RESPONSE: `, response);

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response?.data;
    console.log(`-- PRODUCTS: `, products);

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((element) => {
      console.log(element.name);
    });

    // Get all products that contain "Şal" in their name (use filter method)
    const salProducts = products.filter((element) =>
      element.name.includes("Şal")
    );
    console.log(`-- ŞAL PRODUCTS: `, salProducts);

    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = salProducts.map((element) => {
      return {
        image: element.image,
        name: element.name,
      };
    });
    console.log(`-- MAPPED PRODUCTS: `, mappedProducts);

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    mappedProducts.forEach((element) => {
      const product = document.createElement("div");
      product.className = "product";

      const image = document.createElement("img");
      image.src = element.image;

      const text = document.createElement("h1");
      text.innerHTML = element.name;

      product.appendChild(image);
      product.appendChild(text);

      document.querySelector(".products").appendChild(product);
    });
  });
