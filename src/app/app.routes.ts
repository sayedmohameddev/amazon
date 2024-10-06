import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { PagesLayoutComponent } from './layout/pages-layout/pages-layout.component';
import { LoginComponent } from './AllComponents/login/login.component';
import { RegisterComponent } from './AllComponents/register/register.component';
import { HomeComponent } from './AllComponents/home/home.component';
import { CartComponent } from './AllComponents/cart/cart.component';
import { NotFoundComponent } from './AllComponents/not-found/not-found.component';
import { authGuard } from './sheard/guardes/auth.guard';
import { logedGuard } from './sheard/guardes/loged.guard';
import { ForgetPasswordComponent } from './AllComponents/forget-password/forget-password.component';
import { WishlistComponent } from './AllComponents/wishlist/wishlist.component';

export const routes: Routes = [
    {
        path: "", component: AuthLayoutComponent, canActivate: [logedGuard], children: [
            { path: '', redirectTo: "login", pathMatch: "full" },
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent },
            { path: "forgetpassword", component: ForgetPasswordComponent }
        ]
    },
    {
        path: "", component: PagesLayoutComponent, canActivate: [authGuard], children: [
            { path: '', redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "cart", component: CartComponent },
            { path: "wishlist", component: WishlistComponent },
            { path: "clothes", loadComponent: () => import("./AllComponents/clothes/clothes.component").then((c) => c.ClothesComponent) },
            { path: "profile", loadComponent: () => import("./AllComponents/profile/profile.component").then((c) => c.ProfileComponent) },
            { path: "product", loadComponent: () => import("./AllComponents/product/product.component").then((c) => c.ProductComponent) },
            { path: "allorders", loadComponent: () => import('./AllComponents/allorders/allorders.component').then((c) => c.AllordersComponent) },
            { path: "brand", loadComponent: () => import('./AllComponents/brands/brands.component').then((c) => c.BrandsComponent) },
            { path: "categories", loadComponent: () => import('./AllComponents/categories/categories.component').then((c) => c.CategoriesComponent) },
            { path: "checkout/:id", loadComponent: () => import('./AllComponents/checkout/checkout.component').then((c) => c.CheckoutComponent) },
            { path: "productDetilse/:id", loadComponent: () => import('./AllComponents/product-detils/product-detils.component').then((c) => c.ProductDetilsComponent) },
        ]
    },
    { path: "**", component: NotFoundComponent }
];
