import { heroBanner } from "../setup.js";

export const createHeroBanner = () => {
    heroBanner.style.backgroundImage = "url('http://localhost:1337/uploads/large_jakob_owens_Jz_J_Syb_P_Fb3s_unsplash_0840f6de0c.jpg')";
    heroBanner.innerHTML = `<div class="container text-lg-end position-absolute bottom-0 end-0 px-5" "> 
                                <h1 class="display-4">Fluid jumbotron</h1>
                                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            </div>`
    };