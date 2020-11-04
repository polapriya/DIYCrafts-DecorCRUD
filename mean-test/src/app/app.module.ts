import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { MenuComponent } from './menu/menu.component';
import { ViewEditorComponent } from './view-editor/view-editor.component';
import { FormsModule } from '@angular/forms';
import { GrabComponent } from './grab/grab.component';
import { HttpClientModule } from '@angular/common/http';
import { craftService } from './craft.service';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    MenuComponent,
    ViewEditorComponent,
    GrabComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [craftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
