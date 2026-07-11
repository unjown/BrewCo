let products = [];
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartItems2 = document.getElementById("cartItems2");
const totalEl = document.getElementById("total");
const totalEl2 = document.getElementById("total2");

async function loadProducts(){
    try{
    const response = await fetch("../data/products.json");
    products = await response.json();
    renderProducts();
    renderCart();
    }catch(error){
        alert(error)
    }
}

function renderProducts(search = ""){
    productList.innerHTML = "";
    
    products.forEach(category=>{
                category.items.filter(product=>
                product.name.toLowerCase().includes(search) ||
                category.category.toLowerCase().includes(search)
            ).forEach(product=>
            {
        productList.innerHTML += `
        <div class="col-6 col-xl-4">
            <div class="product-card">
                <img src="../img/${product.image}" alt="${product.name}">
                <div class="product-body">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <div class="price">
                            ₱${product.price}
                        </div>
                        <button class="btn btn-coffee add-cart" onclick="addToCart(${product.id})">
                            <i class="bi bi-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;})});}

function addToCart(id){
    console.log(id);
    const item = cart.find(p=>p.id===id);
    if(item){
        item.quantity++;
    }
    else{

        const product = products.flatMap(category => category.items).find(p=>p.id===id);
        console.log(products);
        cart.push({
            ...product,
            quantity:1
        });
        
    }
    saveCart();
    renderConfirmCart();
}
function increase(id){
    cart.find(item=>item.id===id).quantity++;
    saveCart();
    renderConfirmCart();
}

function decrease(id){
    const item = cart.find(item=>item.id===id);
    item.quantity--;
    if(item.quantity<=0){
        removeItem(id);
        return;
    }
    saveCart();
    renderConfirmCart();
}

function removeItem(id){
    cart = cart.filter(item=>item.id!==id);
    saveCart();
    renderConfirmCart();
}

function saveCart(){
    sessionStorage.setItem("cart",JSON.stringify(cart));
    renderCart();
    renderConfirmCart();
}

function renderCart(){
    cartItems.innerHTML = "";
    if(cart.length===0){
        cartItems.innerHTML =
        "<p class='cartEmpty'>Your cart is empty.</p>";
        totalEl.innerHTML="₱0";
        return;
    }

    let total = 0;
    cart.forEach(item=>{
        total += item.price*item.quantity;
        cartItems.innerHTML += `
        <div class="cart-item">
            <div>
                <div class="cart-name">
                    ${item.name}
                </div>
                <div class="cart-price">
                    ₱${item.price}
                </div>
            </div>
            <div class="d-flex align-items-center gap-2">
                <button
                    class="btn btn-sm btn-outline-secondary"
                    onclick="decrease(${item.id})">
                    −
                </button>
                <span class="cartQuantity">
                    ${item.quantity}
                </span>
                <button
                    class="btn btn-sm btn-outline-secondary"
                    onclick="increase(${item.id})">
                    +
                </button>
                <button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
        `; });

    totalEl.innerHTML=`₱${total.toFixed(2)}`
renderConfirmCart();
    
}
function renderConfirmCart(){
    cartItems2.innerHTML = "";
    if(cart.length===0){
        cartItems2.innerHTML =
        "<p class='cartEmpty'>Your cart is empty.</p>";
        totalEl2.innerHTML="₱0";
        return;
    }

    let total = 0;
    cart.forEach(item=>{
        total += item.price*item.quantity;
        cartItems2.innerHTML += `
        <div class="cart-item">
            <div>
                <div class="cart-name">
                    ${item.name}
                </div>
                <div class="cart-price">
                    ₱${item.price}
                </div>
            </div>
            <div class="d-flex align-items-center gap-2">
                <button
                    class="btn btn-sm btn-outline-secondary"
                    onclick="decrease(${item.id})">
                    −
                </button>
                <span class="cartQuantity">
                    ${item.quantity}
                </span>
                <button
                    class="btn btn-sm btn-outline-secondary"
                    onclick="increase(${item.id})">
                    +
                </button>
                <button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
        `; });

    totalEl2.innerHTML=`₱${total.toFixed(2)}`
    
}

function checkOut(choice){
    renderCart();
    if (choice == 1 ){
        console.log("c1");
        displayConfirm();
    }else if(choice ==2){
    console.log("c2");
    const confirmCard = document.getElementById("confirmCard")
    confirmCard.style.display = "none";    
    const thanksCard = document.getElementById("thanksCard")
    thanksCard.style.display = "block";    
    cart = [];
    saveCart();
    
    }else{
        console.log("c3");
        const confirmOverlay = document.getElementById("confirmOverlay")
        confirmOverlay.style.display = "none";    
        const thanksCard = document.getElementById("thanksCard")
        thanksCard.style.display = "none";   
    }
    
}

function scrollToBottom(){
    document.getElementById("cartItems").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input",e=>{
    renderProducts(e.target.value.toLowerCase());
});

});
function displayConfirm(){
    const confirmOverlay = document.getElementById("confirmOverlay")
    confirmOverlay.style.display = "block";
    const confirmCard = document.getElementById("confirmCard")
    confirmCard.style.display = "block";   
    const thanksCard = document.getElementById("thanksCard")
    thanksCard.style.display = "none";    


}

loadProducts();