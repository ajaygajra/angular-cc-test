import { Component } from '@angular/core';
import {  CometChatConversationsWithMessages, CometChatDetails, CometChatGroupsWithMessages, CometChatMessageHeader, CometChatUsersWithMessages, MessageHeaderConfiguration, MessageListConfiguration } from '@cometchat/chat-uikit-angular'; //import the component in your module.ts file
import { CometChat } from '@cometchat/chat-sdk-javascript'
import { SignalStateModule } from './signal-state/signal-state.module';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CometChatUsersWithMessages, CometChatMessageHeader, CometChatDetails, SignalStateModule,CometChatConversationsWithMessages,CometChatGroupsWithMessages],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  user:CometChat.User = null as unknown as CometChat.User;
  
  constructor() {
    CometChat.getLoggedInUser().then((user: CometChat.User) => {
      setTimeout(()=>{
        this.user = user
      },2000)
    })
  }
}




