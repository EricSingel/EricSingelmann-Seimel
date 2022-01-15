import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ContactComponent } from './frontpage/contact/contact.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ImprintComponent } from './imprint/imprint.component';

const options: ExtraOptions = {
    anchorScrolling: 'enabled'
  }


const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent
  },
  {
    path: 'imprint',
    component: ImprintComponent
  },
  {
    path: 'data-protection',
    component: DataProtectionComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
