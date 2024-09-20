// JavaScript code as extracted from your HTML file
let cart = [];

function addToCart(product) {
    const productId = product.dataset.id;
    const productPrice = parseInt(product.dataset.price);
    const productName = product.querySelector('h2').innerText;

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    cartItems.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ₹${item.price} x ${item.quantity}`;
        cartItems.appendChild(listItem);
    });

    totalPriceEl.innerText = totalPrice;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        addToCart(product);
    });
});

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout');
    }
});
