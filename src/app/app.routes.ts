import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { ProductDatail } from './product-datail/product-datail';
import { ProductPage } from './product-page/product-page';
import { CheckOut } from './check-out/check-out';

export const routes: Routes = [
    {
        path: "", 
        component: Home
    },

    {
        path: "cart", 
        component: Cart
    },
    {
        path: "contact", 
        component: Contact
    },
    {
        path: "product-detail", 
        component: ProductDatail
    },
    {
        path: "product-page", 
        component: ProductPage
    },
    {
        path: "check-out", 
        component: CheckOut
    }
];
