import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './Components/common/app-header/app-header.component';
import { AppFooterComponent } from './Components/common/app-footer/app-footer.component';
import { HomeBannerComponent } from './Components/home/home-banner/home-banner.component';
import { HomeCategoriesComponent } from './Components/home/home-categories/home-categories.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderCategoriesComponent } from './Components/categories/header-categories/header-categories.component';
import { AppMenuComponent } from './Components/common/app-menu/app-menu.component';
import { CategoryDetailComponent } from './Components/categories/category-detail/category-detail.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeBannerComponent,
    HomeCategoriesComponent,
    HomeComponent,
    HeaderCategoriesComponent,
    AppMenuComponent,
    CategoryDetailComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
