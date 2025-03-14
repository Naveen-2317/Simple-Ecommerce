$(document).ready(function () {
    
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

    });
})