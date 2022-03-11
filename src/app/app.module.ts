import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutComponent } from './frontpage/about/about.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './frontpage/introduction/introduction.component';
import { SkillsComponent } from './frontpage/skills/skills.component';
import { PortfolioComponent } from './frontpage/portfolio/portfolio.component';
import { ContactComponent } from './frontpage/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InViewportModule } from 'ng-in-viewport';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    DataProtectionComponent,
    FrontpageComponent,
    AboutComponent,
    ImprintComponent,
    NavbarComponent,
    FooterComponent,
    IntroductionComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
