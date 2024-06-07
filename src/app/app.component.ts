import { Component } from '@angular/core';
import { CometChatMessageHeader, CometChatUsersWithMessages, MessagesConfiguration } from '@cometchat/chat-uikit-angular'; //import the component in your module.ts file
import { CometChat } from '@cometchat/chat-sdk-javascript'
// const conversationsConfiguration:MessagesConfiguration = new MessagesConfiguration({
//       message
//   })



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CometChatUsersWithMessages, CometChatMessageHeader],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  user:CometChat.User = null as unknown as CometChat.User;
  constructor() {
    CometChat.getLoggedInUser().then((user: CometChat.User) => {
      this.user = user
    })
  }
}




