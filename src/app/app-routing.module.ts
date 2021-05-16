import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component'
import { SampleComponent } from './sample.component'

const routes: Routes = [
  { path: '', component: NewsListComponent},
  { path: 'sample', component: SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
