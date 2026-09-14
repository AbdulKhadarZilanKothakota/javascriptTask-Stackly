/*
// Task 1

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then( data => {
    
    console.log("ALL PRODUCTS : ", data);

    data.forEach(product => {
        console.log("Product Title : ", product.title );
        console.log("Price : ", product.price );
        console.log("Category : ", product.category );  
    });

    const titleAndPrice = data.map(product =>({
        title : product.title,
        price : product.price
    }))
    console.log("Title And Price : ", titleAndPrice);

    const productsAbove100 = data.filter(product => product.price > 100)
    console.log("Products Above 100 : ", productsAbove100);
    
    const electronicCategory = data.find(product => product.category === "electronics")
    console.log("First Electronics Item : ", electronicCategory);

    const totalPrice = data.reduce((acc, product) => {
        return acc + product.price
    },0)
    console.log("Total Price : ", totalPrice);

    const highestToLowest = data.sort((a, b) => {
        return b.price - a.price
    })
    console.log("Sorting Highest to Lowest Price", highestToLowest);
})

.catch(error => console.log(error))
.finally(() => console.log("Task 1 completed Successfully"));
*/


/*
// Task 2 -- Product Category Dashboard

console.log("===== PRODUCT DASHBOARD ====");

fetch("https://fakestoreapi.com/products")
.then(response => response.json())

.then(data => {

    const productsTotalLength = data.length
    console.log("Total Products : ", productsTotalLength)

    const electronicsLength = data.filter(product => 
        product.category === "electronics"
    )
    console.log("Electronics : ", electronicsLength.length);

    const jeweleryLength = data.filter(product => 
        product.category === "jewelery"
    )
    console.log("Jewelery : ", jeweleryLength.length);

    const menClothingLength = data.filter(product => 
        product.category === "men's clothing"
    )
    console.log("Men's Clothing : ", menClothingLength.length);

    const womenClothingLength = data.filter(product => 
        product.category === "women's clothing"
    )
    console.log("Women's Clothing : ", womenClothingLength.length);

    const sortedProducts = data.sort((a, b) => {
        return b.price - a.price
    })
    console.log("Height Price : ", sortedProducts[0].price);
    
    console.log("Lowest Price : ", sortedProducts.at(-1).price) // we can use [sortedProducts.length-1]
    
    const totalPrice = data.reduce((acc,product) => {
        return acc + product.price
    },0)
    
    const average = totalPrice / productsTotalLength

    console.log("Average Price : ", average);
    
})

.catch(error => console.log(error))
.finally(() => console.log("Task 2 Completed Successfully"))
*/


/*
// Task 3 -- User & Post API

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())

// Display all user names

.then(users => {
users.forEach(user => {
    console.log(user.name);
});

// Display user name + email

users.forEach(user => {
    console.log("Name:", user.name);
    console.log("Email:", user.email);
});

// Find the user with ID 5

const user5 = users.find(user => user.id === 5);
console.log(user5);

// Filter users from a particular city

const cityUsers = users.filter(
    user => user.address.city === "South Christy"
);
console.log(cityUsers);

})
.catch(error => console.log(error));

  

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(posts => {

// Display posts written by user ID 1

const user1Posts = posts.filter(
    post => post.userId === 1
);
console.log(user1Posts);

// Count how many posts user ID 1 created

console.log("Total Posts:", user1Posts.length);

// Find the first post with more than 50 characters in title

const longTitlePost = posts.find(
    post => post.title.length > 50
);
console.log(longTitlePost);
})

.catch(error => console.log(error))
.finally(() => console.log("Task 3 Successfully Completed"));
*/


/*
// Task 4 --  API + Search

function searchProducts() {
  const category = prompt("Enter product category:");
  const maxPrice = Number(prompt("Enter maximum price:"));

  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

      const filteredProducts = data.filter(product =>
        product.category === category &&
        product.price <= maxPrice
      );

      if (filteredProducts.length === 0) {
        console.log("No products found.");
      } else {
        filteredProducts.forEach(product => {
        console.log(product);
        });
      }
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Task 4 Successfully completed"));
}

searchProducts();
*/


/*
// Task 5 --  API Shopping Cart


fetch("https://fakestoreapi.com/products")
.then(response => response.json())

// Display available products

.then(products => {
products.forEach(product => {
    console.log(
        `ID: ${product.id} | ${product.title} | $${product.price}`
    );
});

// Select products using their IDs

const input = prompt(
    "Enter product IDs separated by commas:\nExample: 1, 3, 5"
);

const selectedIds = input
    .split(",")
    .map(id => Number(id.trim()));

// Add selected products to an array

const cart = [];

selectedIds.forEach(id => {
    const product = products.find(product => product.id === id);

    if (product) {
        cart.push(product);
    }
});


// Display cart

cart.forEach((product, index) => {
    console.log(`Product ${index + 1}: ${product.title}`);
    console.log(`Price: $${product.price}`);
});


// Calculate cart total using reduce()
const total = cart.reduce((acc, product) => {
    return acc + product.price;
}, 0);

//  Apply discount
let discount = 0;

if (total > 200) {
    discount = 20;
} 
else if (total > 100) {
    discount = 10;
}


// Calculate final amount
const discountAmount = total * discount / 100;
const finalAmount = total - discountAmount;


// Display final amount
console.log("Total: $" + total.toFixed(2));
console.log("Discount: " + discount + "%");
console.log("Final Amount: $" + finalAmount.toFixed(2));

})

.catch(error => console.log(error))
.finally(() => console.log("Task 5 completed"));
*/

/*
// Task 6 -- FakeStore Product Report

const apiLink = "https://fakestoreapi.com/products";

console.log("========== PRODUCT REPORT ==========");

fetch(apiLink)
  .then(response => response.json())
  .then(data => {

    // Total Products
    console.log("Total Products:", data.length);


    // Display all products using forEach()
    console.log("\nProduct Details:");

    data.forEach(product => {
      console.log(
        `ID: ${product.id} | ${product.title} | $${product.price} | ${product.category}`
      );
    });


    // Create product names array using map()
    const productNames = data.map(product => product.title);

    console.log("Product Names:");

    productNames.forEach(name => {
      console.log("-", name);
    });


    // Filter expensive products using filter()
    const expensiveProducts = data.filter(
      product => product.price > 100
    );

    console.log("Products Above $100:");

    expensiveProducts.forEach(product => {
      console.log(
        `${product.title} - $${product.price}`
      );
    });


    // Find electronics product using find()
    const electronicsProduct = data.find(
      product => product.category === "electronics"
    );

    console.log("Electronics Product:");

    if (electronicsProduct) {
      console.log(
        `${electronicsProduct.title} - $${electronicsProduct.price}`
      );
    } else {
      console.log("No electronics product found.");
    }


    // Calculate total price using reduce()
    const totalPrice = data.reduce(
      (acc, product) => acc + product.price,
      0
    );

    console.log("Total Product Value:");
    console.log("$" + totalPrice.toFixed(2));


    // Check if any product is above $500 using some()
    const anyAbove500 = data.some(
      product => product.price > 500
    );

    console.log("Any Product Above $500:");
    console.log(anyAbove500);


    // Check if every product is above $1 using every()
    const allAbove1 = data.every(
      product => product.price > 1
    );

    console.log("All Products Above $1:");
    console.log(allAbove1);


    // Sort highest price → lowest price
    const sortedProducts = [...data].sort(
      (a, b) => b.price - a.price
    );

    console.log("Highest → Lowest:");

    sortedProducts.forEach(product => {
      console.log(
        `${product.title} - $${product.price}`
      );
    });

  })
  .catch(error => {console.log("Error:", error)})
  .finally(() => {console.log("Task 6 successfully completed")});
*/
