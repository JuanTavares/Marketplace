import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { LandingComponent } from './components/landing/landing.component';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
  declarations: [HomeComponent, BannerComponent, LandingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule
  ]
})
export class HomeModule { }
