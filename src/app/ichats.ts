import { Isender } from './Isender';
export interface Ichats {
  id: number;
  content: string;
  read: string;
  date: Date;
  sender: Isender;
  // name: string;
  // profileImage: string;
  message: string; //sender messages
}

// export interface chatAppState {
//   chats: Array<Ichats>;
// }

// export interface Action {
//   add_chats: 'ADD_CHATS';
//   remove_chats: 'REMOVE_CHATS';
// }
