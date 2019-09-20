const URL = 'http://localhost:3000';
const list = document.querySelector('#printdata');
const addPostButton = document.getElementById('add-post');
const articleSection = document.querySelector('section');

async function fetchProducts(){
    const response = await fetch (`${URL}/products`)
    const products = await response.json()
    printData(products);

}
fetchProducts()

function formatData(products) {
    list.innerHTML += `
    <tr>
        <td>${products.id}</td>
        <td>${products.name}</td>
        <td>${products.price}</td>
        <td>${products.quantity}</td>
        <td>${products.type}</td>
        <td><button type="button">update</button></td>
        <td><button type="button">delete</button></td>
      </tr>
    `
}

 

const printData = products => {
    for(let i = 0; i <products.length; i++){
        formatData(products[i]);
    }
}


