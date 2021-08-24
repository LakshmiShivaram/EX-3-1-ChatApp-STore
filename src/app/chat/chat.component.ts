import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from '../app.state';
import { ChatService } from '../chat.service';
import { Ichats } from '../ichats';
import { MessageStorageService } from '../message-storage.service';
import { addMessage } from '../message.action';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // chatListDataForDisplay: ChatData[];
  chatData: Ichats[];
  messageData = [];
  chatMsgArray: string[];
  constructor(
    private services: ChatService,
    private messageService: MessageStorageService,
    private store: Store<MyAppState>
  ) {}

  ngOnInit() {
    // this.services.getChatList().subscribe(result => {
    //   this.chatData = result.map(
    //     res =>
    //       ({
    //         ...res,
    //         message: JSON.parse(this.messageService.getMessage(res.id))
    //       } as Ichats)
    //   );
    // });
    this.services.getChatList().subscribe(resultData => {
      this.chatData = resultData.map(res => {
        this.chatMsgArray = Object.assign([], []);

        // this.store.pipe(
        //   select('messages'),
        //   map(state => {
        //     console.log('asdasdasd');
        //     for (let key in state) {
        //       if (state[key].chatId == res.id) {
        //         this.chatMsgArray = [...state[key].chatParticular];
        //         console.log(this.chatMsgArray);
        //       }
        //     }
        //   })
        // );

        this.store.select('messages').subscribe(res1 => {
          console.log('I am in select' + res1 + '  ' + typeof res1);
          console.log(res1.filter(resData => resData.chatId == res.id));
        });

        this.chatMsgArray.push(res.content);
        let mData = {
          chatId: res.id,
          chatParticular: this.chatMsgArray
        };
        this.messageData = Object.assign([], this.messageData);
        this.messageData.push(mData);
        this.store.dispatch(addMessage({ messageData: this.messageData }));
        return res;
      });
    });
  }
}
