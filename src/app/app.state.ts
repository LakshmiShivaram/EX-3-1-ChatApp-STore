export interface chatActionState {
  chatId: number;
  chatParticular_message: string[];
}

export interface MyAppState {
  messages: chatActionState[];
}
