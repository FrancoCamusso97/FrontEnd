import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './componentes/education/education.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { RegisterComponent } from './componentes/register/register.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    ExperienceComponent,
    NavbarComponent,
    PortadaComponent,
   
    LoginComponent,
    MainComponent,
    RegisterComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
