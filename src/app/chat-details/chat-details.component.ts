import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { MyAppState } from '../app.state';
import { ChatService } from '../chat.service';
import { Ichats } from '../ichats';
import { MessageStorageService } from '../message-storage.service';
import { addMessage } from '../message.action';
import { selectMsg } from '../message.reducer';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.css']
})
export class ChatDetailsComponent implements OnInit {
  // For displaying chat contact info
  selectedChatData: Ichats;

  messageForm: FormGroup;

  // For display messages from localstorage
  messageForDisplay: Observable<Ichats[]>;

  // For storing messages into observable
  getChats$: BehaviorSubject<Ichats[]> = new BehaviorSubject([]);

  id: number;
  messageData = [];
  messageDataForDisplay;

  constructor(
    private formBuilder: FormBuilder,
    private routeActivated: ActivatedRoute,
    private route: Router,
    private services: ChatService,
    private messageService: MessageStorageService,
    private store: Store<MyAppState>
  ) {}

  ngOnInit() {
    this.id = this.routeActivated.snapshot.params['id'];

    this.services.getParticularChatDetails(this.id).subscribe(res => {
      this.selectedChatData = res.find(item => item.id === this.id);
    });

    this.messageForm = this.formBuilder.group({
      message: ['']
    });

    if (this.messageService.getMessage(this.id)) {
      this.messageForDisplay = JSON.parse(
        this.messageService.getMessage(this.id)
      );
      this.getChats$.next(JSON.parse(this.messageService.getMessage(this.id)));
    }
  }

  saveMessage() {
    this.messageDataForDisplay = this.store.select(selectMsg);
    this.messageDataForDisplay.forEach(res => console.log(res));
    this.messageData = Object.assign([], this.messageData);
    this.messageData.push({
      chatId: this.id,
      chatParticular: [this.messageForm.value]
    });
    this.store.dispatch(addMessage({ messageData: this.messageData }));
    this.messageForm.reset();
  }

  goBack() {
    this.route.navigate(['/chat']);
  }
}
