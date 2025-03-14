$(document).ready(function () {
    // let urlMap = new Map([["Jewellery", "https://fakestoreapi.com/products/category/jewelery"],
    // ["Women'sCloths", "https://fakestoreapi.com/products/category/women's clothing"],
    // ["Men'sCloths", "https://fakestoreapi.com/products/category/men's clothing"],
    // ["Electronics", "https://fakestoreapi.com/products/category/electronics"],
    // ["All Products", "https://fakestoreapi.com/products"]]);
    let urlMap = new Map([["Jewellery", "jewellery.html"],
        ["Women'sCloths", "womens.html"],
        ["Men'sCloths", "mens.html"],
        ["Electronics", "electronics.html"],
        ["All Products", "productList.html"]]);

    $("ul li").on('click', function () {
        let requiredCat = $(this).text();
        console.log(requiredCat);
        if(urlMap.has(requiredCat)){
            window.location.href = urlMap.get(requiredCat);

        }


        // let categoryUrl = urlMap.get(requiredCat)
        // console.log(categoryUrl);

        // $.ajax({
        //     url: categoryUrl,
        //     method: "GET",
        //     dataType: "JSON",
        //     success: function (response) {
        //         let productsGallery;
        //         $("#gallery").empty();
        //         response.forEach(function (product) {
        //             $("#gallery").append(`
        //                     <div class="image-item">
        //                         <img src=${product.image} alt="Image" class="images">
        //                         <div class="price">Price : ₹ ${product.price}</div>
        //                         <div><button class="btn" data-price="${product.price}">Add to Bag</button></div>
        //                     </div>
        //                 `);
        //         });
        //     },
        //     error: function (error) {
        //         console.log(error);

        //     }
        // });
    });
})