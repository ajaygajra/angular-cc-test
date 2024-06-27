import { Component } from '@angular/core';
import { CometChatConversationsWithMessages, CometChatDetails, CometChatGroupsWithMessages, CometChatIncomingCall, CometChatMessageHeader, CometChatUsersWithMessages, MessageHeaderConfiguration, MessageListConfiguration ,CometChatThemeService} from '@cometchat/chat-uikit-angular'; //import the component in your module.ts file
import { CometChat } from '@cometchat/chat-sdk-javascript'
import { SignalStateModule } from './signal-state/signal-state.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CometChatUsersWithMessages, CometChatMessageHeader, CometChatDetails, SignalStateModule, CometChatConversationsWithMessages, CometChatGroupsWithMessages, CometChatIncomingCall],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  user: CometChat.User = null as unknown as CometChat.User;

  constructor(private themeService:CometChatThemeService) {
    themeService.theme.palette.setMode("light")
    themeService.theme.palette.setPrimary({ light: "#0190A3", dark: "#0190A3" })
    themeService.theme.palette.setSecondary({ light: "#CDE9ED", dark:"#CDE9ED"})
    themeService.theme.palette.setPrimary({light:'#B39DDB',dark:'#B39DDB'})
    CometChat.getLoggedInUser().then((user: CometChat.User) => {
      setTimeout(() => {
        this.user = user
      }, 2000)
    })
  }
}
