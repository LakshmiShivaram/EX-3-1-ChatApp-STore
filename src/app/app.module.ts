import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { StoreModule } from '@ngrx/store';
import { messageReducer } from './message.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'chat-details/:id', component: ChatDetailsComponent },
  { path: '', redirectTo: 'chat', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ chats: messageReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
    // EffectsModule.forRoot([ChatEffects])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ChatComponent,
    ChatDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
