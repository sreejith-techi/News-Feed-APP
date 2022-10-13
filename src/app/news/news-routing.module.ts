import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';

const routes: Routes = [
  {
    path:"", component: NewsfeedComponent
  },
  {
    path:"news-feed", component: NewsfeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
