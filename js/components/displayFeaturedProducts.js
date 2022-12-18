import { featuredProductsContainer } from "../setup.js";

export async function displayFeatured(url) {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const products = await results.results;
        featuredProductsContainer.innerHTML = "";
        for (let i=0; i< products.length; i++) {
            if(products[i].featured) {
                featuredProductsContainer.innerHTML += `
                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img src="${products[i].image.formats.medium.url}" class="card-img-top" alt="${image.formats.medium.title}">
                            <div class="card-body">
                                <h5 class="card-title">${products[i].title}</h5>
                                <h6 class="card-text">${products[i].price}</h6>
                            </div>
                        </div>
                    </div>`
            }
        }            
    }
    catch (error) {
        console.log("An error occurred when calling the API:", error);
        featuredProductsContainer.innerHTML = "";
        featuredProductsContainer.innerHTML = alert("An error occurred when calling the API");
    }
};