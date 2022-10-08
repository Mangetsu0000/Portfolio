import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocialsComponent } from './socials/socials.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { LanguagesToolsComponent } from './languages-tools/languages-tools.component';
import { EducationComponent } from './education/education.component';
import { DiplomaComponent } from './education/diploma/diploma.component';
import { InternshipComponent } from './experience/internship/internship.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialsComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    LanguagesToolsComponent,
    EducationComponent,
    DiplomaComponent,
    InternshipComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
