import { createHeroBanner } from "./components/createHeroBanner.js";
import { displayFeatured } from "./components/displayFeaturedProducts.js";
import { productsUrl } from "./setup.js";

createHeroBanner();
displayFeatured(productsUrl);

/** displayFeatured(productsUrl);
 * is not working */