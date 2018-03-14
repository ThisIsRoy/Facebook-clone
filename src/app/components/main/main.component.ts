import { Component, OnInit, ViewChild, ElementRef, SecurityContext } from '@angular/core';
import { FriendService } from './friend.service';
import { ArticleService } from './article.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SanitizeHtml } from './sanitizeHtml' 
//import { MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: ['./main.component.css'],
  providers: [FriendService, ArticleService, SanitizeHtml]
})
export class MainComponent implements OnInit {
  postText:string = '';
  status:string = '';
  inputStatus:string = '';
  inputFriend:string = '';
  friendHTML:string = '';
  friendArray:any;
  articleArray:any;
  //friendString:any;
  //@ViewChild('clearBtn') clearBtn: ElementRef;

  //sanitizes button
   //private _inputpdf: string = button;

  clearPost() {
    console.log(this.postText);
    this.postText = 'magic';
  } 

  updateStatus() {
  	this.status = this.inputStatus;
    this.inputStatus = '';
  }

  constructor(private friendService:FriendService, private articleService:ArticleService, private sanitizer: DomSanitizer, private sanitizeHtml: SanitizeHtml) { 
  }
  ngOnInit() {
    //get friends from friend json file 
    this.friendService.getJson().then(response => {
      let friendObject = response.json();
      this.friendArray = friendObject;
      console.log(this.friendArray.followers);
      return friendObject;
    }); 

    //get articles from article json file
    this.articleService.getJson().then(response => {
      let articleObject = response.json();
      this.articleArray = articleObject;
      console.log(this.articleArray);
      return articleObject;
    }); 

  }

  addFriend() {
      if (this.inputFriend !== '') {
        this.inputFriend = '';
        let friendNum = Math.floor(Math.random() * 5);
        let friendString = '<div class="friend"><img src=' + this.friendArray.followers[friendNum].link 
                          + ' class="img-responsive"><p class="bolded main-name">' + this.friendArray.followers[friendNum].name 
                          + '</p><p>' + this.friendArray.followers[friendNum].status + '</p><mat-button>Unfollow</mat-button></div>'; 
        //const sanitizedHtml = this.sanitizer.bypassSecurityTrustResourceUrl(friendString);
        //friendString = this.sanitizer.sanitize(SecurityContext.HTML, friendString);
        // this.followerHTML = this.sanitizer.bypassSecurityTrustHtml(friendString);
        //friendString = this.sanitizer.sanitize(SecurityContext.HTML, friendString);
        this.friendHTML += friendString;
      }
    }

  //this.clearBtn.nativeElement.innerHTML = "TEST";
  // public get cleanHTML() {
  //   return this.sanitizer.bypassSecurityTrustHtml(this.friendString);
  // }

}
