import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { NewsService } from './service/news.service';
import { Limit } from '../pipes/limit';


@NgModule({
  declarations: [
    NewsfeedComponent,
    Limit
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers:[NewsService]

})
export class NewsModule { }
