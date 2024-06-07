/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { CometChat } from '@cometchat/chat-sdk-javascript';
import { AppConstants } from './AppConstants';
import { UIKitSettingsBuilder } from '@cometchat/uikit-shared';
import { CometChatUIKit } from '@cometchat/chat-uikit-angular';


const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(AppConstants.APP_ID)
  .setRegion(AppConstants.REGION)
  .setAuthKey(AppConstants.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();


CometChatUIKit.init(uiKitSettings)!.then(() => {

  const authToken = "AUTH_TOKEN"; //Replace with your auth token


  CometChatUIKit!.getLoggedinUser()?.then(user => {
    if (!user) {
  
  
      CometChatUIKit.login({ uid: 'superhero1', authToken: AppConstants?.AUTH_KEY })?.then(user => {
  
        console.log("Login Successful:", { user });
        
  
        bootstrapApplication(AppComponent,
          { providers: [provideProtractorTestingSupport()] })
          .catch(err => console.error(err));
      
      
      }).catch(console.log);
    } else {
  
      bootstrapApplication(AppComponent,
        { providers: [provideProtractorTestingSupport()] })
        .catch(err => console.error(err));
    
      }
  }).catch(console.log);

})


