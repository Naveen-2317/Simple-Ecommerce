$(document).ready(function () {

    let urlMap = new Map([["Jewellery", "jewellery.html"],
    ["Women'sCloths", "womens.html"],
    ["Men'sCloths", "mens.html"],
    ["Electronics", "electronics.html"],
    ["All Products", "productList.html"]]);

    $("ul li").on('click', function () {
        let requiredCat = $(this).text();
        console.log(requiredCat);
        if (urlMap.has(requiredCat)) {
            window.location.href = urlMap.get(requiredCat);

        }
    });


    let cartTotal = 0;
    let items = 0;
    let userCartTotal = 0;
    let userCartCount = 0;
    let price;

    let userName = sessionStorage.getItem('username');

    if (userName) {
        $('#user').html(userName);
        $('#SignIn').replaceWith('<span class="logout">LogOut</span>');
        userCartTotal = parseFloat(localStorage.getItem(`${userName}_cartTotal`)) || 0;
        userCartCount = parseInt(localStorage.getItem(`${userName}_items`)) || 0;
        console.log(userCartTotal, userCartCount);

        $('#cartTotal').html(userCartTotal.toFixed(2));
        $('#count').html(userCartCount);
    } else {
        cartTotal = parseFloat(sessionStorage.getItem('cartTotal')) || 0;
        items = parseInt(sessionStorage.getItem('items')) || 0;
        $('#cartTotal').html(cartTotal.toFixed(2));
        $('#count').text(items);
    }
    let grocery = "https://dummyjson.com/products";

    //Add to cart
    $(document).on('click', '.btn', function () {
        price = parseFloat($(this).data('price'));
        let storedIds = JSON.parse(sessionStorage.getItem("buttonIds")) || [];

        if (userName) {
            userCartTotal += price;
            userCartCount++;
            localStorage.setItem(`${userName}_cartTotal`, userCartTotal.toFixed(2));
            localStorage.setItem(`${userName}_items`, userCartCount);
            $('#cartTotal').html(userCartTotal.toFixed(2));
            $('#count').html(userCartCount);
        } else {
            cartTotal += price;
            items++;
            sessionStorage.setItem('cartTotal', cartTotal.toFixed(2));
            sessionStorage.setItem('items', items);
            $('#cartTotal').html(cartTotal.toFixed(2));
            $('#count').text(items);
            let btnId = $(this).attr("data-id");  // Get clicked button ID

            // if (!storedIds.includes(btnId)) {
            storedIds.push(btnId);
            sessionStorage.setItem("buttonIds", JSON.stringify(storedIds));
            // }

            console.log("Stored Button IDs:", storedIds);
        }
    });


    //User logout
    $(document).on('click', '.logout', function () {
        $('#user').html('');
        $(this).replaceWith('<a href="/signin.html" id="SignIn">SignIn</a>');
        sessionStorage.clear();
        location.reload();
    });
    
    //Redirect to Cartpage
    $(document).on('click', '#cartImage', function () {
        location.href = 'cart.html';
    });

    //Remove CartItems
    $(document).on('click', '.remove-btn', function () {
        let row = $(this).closest('.product-item');
        let count = parseInt($('#count').text());
        let totalPrice =parseFloat($('#cartTotal').text());
        console.log(count);
        let productId = row.attr("data-id");
        let price = parseFloat(row.attr("data-price"));
        console.log(totalPrice,price);
        totalPrice -=price;
        console.log(totalPrice);
        
        $('#cartTotal').text(totalPrice.toFixed(2));
        sessionStorage.setItem('cartTotal',totalPrice.toFixed(2))
        // Retrieve the array from localStorage
        let productIds = JSON.parse(sessionStorage.getItem('buttonIds')) || [];
        let productIdToRemove = productId;
        let index = productIds.indexOf(productIdToRemove);

        // If the element exists in the array, remove it
        if (index !== -1) {
            productIds.splice(index, 1);
        }

        // Save the updated array back to localStorage
        sessionStorage.setItem('buttonIds', JSON.stringify(productIds));


        row.remove();
        $('#count').text(--count);
        sessionStorage.setItem('items',count)
        
    });

    $(document).on('click','.checkout-btn',function () {
        let cartCont = sessionStorage.getItem('items');
        if (cartCont === '0') {
            alert("Cart is Empty! please add products...!")
        }
        else {
            location.href = 'shipping.html'
        }
    });

});
