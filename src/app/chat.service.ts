import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AppState } from './app.state';
import { Ichats } from './ichats';

@Injectable({ providedIn: 'root' })
export class ChatService {
  chatUrl =
    'https://raw.githubusercontent.com/NablaT/test-api/master/assets/messages.json.txt';

  constructor(private http: HttpClient) {}

  getChatList(): Observable<Ichats[]> {
    return this.http.get<Ichats[]>(this.chatUrl).pipe(map(res => res));
  }
  getParticularChatDetails(id: number): Observable<Ichats[]> {
    return this.http.get<Ichats[]>(this.chatUrl);
  }
}
