import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { RoomsComponentComponent } from './rooms-component/rooms-component.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // RouterModule.forRoot(
    //   // appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],

  declarations: [
    AppComponent,
    SignInComponentComponent,
    RoomsComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
