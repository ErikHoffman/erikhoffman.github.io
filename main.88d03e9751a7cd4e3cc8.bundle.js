webpackJsonp([1,4],{328:function(e,t,n){"use strict";var i=n(0),o=n(329),r=n(513),a=n(212);n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,n){this.route=e,this.zone=t,this.router=n,this.selectedPage={id:-1,name:"unrouted",imgUrl:""},this.defaultPage=o.a[0],this.pagesList=o.a,this.projectsList=r.a,this.showDropdown=!1}return e.prototype.ngOnInit=function(){var e=this;this.navigationSubscription=this.router.events.subscribe(function(t){t instanceof a.b&&e.routeToPage(t)})},e.prototype.routeToPage=function(e){var t=this,n=e.url.slice(1);Object.keys(this.pagesList).forEach(function(e){t.pagesList[e].name.toUpperCase()===n.toUpperCase()&&(t.selectedPage=t.pagesList[e])}),this.selectedPage.id===-1&&(this.selectedPage=this.defaultPage),console.log(this.route)},e.prototype.getDropdownStatus=function(){return this.showDropdown?"block":"none"},e.prototype.onSelect=function(e,t){this.selectedPage=e,this.showDropdown=!1,t&&(document.getElementById("mobile-dropdown-main").style.display="none"),this.router.navigateByUrl("/"+this.selectedPage.name.toLowerCase())},e.prototype.ngOnDestroy=function(){this.navigationSubscription&&this.navigationSubscription.unsubscribe()},e=s([n.i(i._6)({selector:"app-page-content",template:n(671),styles:[n(667)]}),c("design:paramtypes",["function"==typeof(t=void 0!==a.c&&a.c)&&t||Object,"function"==typeof(l=void 0!==i.S&&i.S)&&l||Object,"function"==typeof(d=void 0!==a.d&&a.d)&&d||Object])],e);var t,l,d}()},329:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=[{id:1,name:"Home",imgUrl:"../assets/house-icon_silver.svg"},{id:2,name:"About",imgUrl:"../assets/coffee-cup_silver.svg"},{id:3,name:"Projects",imgUrl:"../assets/code-icon_silver.svg"},{id:4,name:"Resume",imgUrl:"../assets/paper-icon_silver.svg"}];!function(){function e(){}e}()},330:function(e,t,n){"use strict";var i=n(0);n.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e=o([n.i(i._6)({selector:"app-osmosis-solitaire",styles:[n(668)],template:n(672)}),r("design:paramtypes",[])],e)}()},331:function(e,t,n){"use strict";var i=n(0);n.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e=o([n.i(i._6)({selector:"app-state-machine",template:n(673)}),r("design:paramtypes",[])],e)}()},390:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=390},391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(479),o=n(0),r=n(514),a=n(511);r.a.production&&n.i(o.a)(),n.i(i.a)().bootstrapModule(a.a)},509:function(e,t,n){"use strict";var i=n(0),o=n(212),r=n(329),a=n(328),s=n(330),c=n(331);n.d(t,"a",function(){return u});var l=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:a.a,data:{page:r.a[0]}},{path:"about",component:a.a,data:{page:r.a[1]}},{path:"projects",component:a.a,data:{page:r.a[2]},children:[{path:"osmosisSolitaire",component:s.a},{path:"stateMachineCreator",component:c.a}]},{path:"resume",component:a.a,data:{page:r.a[3]}}],u=function(){function e(){}return e=l([n.i(i.b)({imports:[o.a.forRoot(p)],exports:[o.a]}),d("design:paramtypes",[])],e)}()},510:function(e,t,n){"use strict";var i=n(0);n.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.title="Erik Hoffman Website!"}return e=o([n.i(i._6)({selector:"app-root",template:n(669),styles:[n(666)]}),r("design:paramtypes",[])],e)}()},511:function(e,t,n){"use strict";var i=n(146),o=n(0),r=n(469),a=n(475),s=n(510),c=n(328),l=n(512),d=n(330),p=n(331),u=n(509);n.d(t,"a",function(){return h});var f=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},g=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(){}return e=f([n.i(o.b)({declarations:[s.a,c.a,l.a,d.a,p.a],imports:[i.a,r.a,a.a,u.a],providers:[],bootstrap:[s.a]}),g("design:paramtypes",[])],e)}()},512:function(e,t,n){"use strict";var i=n(0);n.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e.prototype.getDescriptionDisplay=function(){return this.showDescription?"inline-block":"none"},e.prototype.rotateChevron=function(){return this.showDescription?"rotate(90deg)":"rotate(360deg)"},e=o([n.i(i._6)({selector:"app-portfolio-section",inputs:["name","description","dates","link"],template:n(670)}),r("design:paramtypes",[])],e)}()},513:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=[{id:1,name:"State Machine Creator",description:"A UI that lets you create simple state machines and save them to a file.<br><br>I enjoy using state machines to create very basic workflows in order to plan applications or algorithms so making this tool seemed to make sense.",dates:"Date: 2015 - Ongoing",link:"projects/stateMachineCreator"},{id:2,name:"Functional Connect Four in Elixir",description:"Created in a functional programming study group during my final semester at University of Guelph.<br><br>Used the Elixir programming language to create a connect four game to communicate over IRC with other members of the class. Learned about the advantages of functional as well as the hurdles one must overcome (mutability, recursion, etc.).",dates:"Date: 2016",link:"https://bitbucket.org/ErikHoffman/connect-four-elixir"},{id:3,name:"Truform - Android Workout App",description:"An app made in a team for a course at University of Guelph. The entire course followed the development of this app and was graded along the way during meetings with the professor.<br><br>Myself and three others created this using an Arduino computer with a gyroscope and accelerometer linked to a smartphone to measure workout form from a user. My major role in the project involved creating the algorithm that would measure the data of the workout and give output on whether or not the form of the workout was performed well.",dates:"Date: 2015",link:"https://bitbucket.org/benbaird/truform"}];!function(){function e(){}e}()},514:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i={production:!0}},666:function(e,t){e.exports="body{min-height:100%;margin:0;background-image:url(assets/ottawa-photo.png);background-repeat:no-repeat;background-attachment:fixed;background-size:cover;will-change:transform}"},667:function(e,t){e.exports=""},668:function(e,t){e.exports="*{font-family:Whitney SSm A,Whitney SSm B,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif}.osmosis-container{margin-top:50px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.osmosis-buttons,.osmosis-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.button{background-color:#88bbd6;border:1px solid #000;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}.suites{background:#2c3e50;background:-webkit-linear-gradient(90deg,#4ca1af,#2c3e50);background:-webkit-linear-gradient(left,#4ca1af,#2c3e50);background:linear-gradient(90deg,#4ca1af,#2c3e50);border:3px solid #000;width:45%;margin:10px;padding:10px;overflow-x:hidden}.suite{border:1px solid #000;width:100%;min-height:100px;background-color:#000}.suiteTitle{height:25px;margin-top:10px;text-align:center}.info{margin:10px;padding:10px;width:45%;background:#2c3e50;background:-webkit-linear-gradient(90deg,#4ca1af,#2c3e50);background:-webkit-linear-gradient(left,#4ca1af,#2c3e50);background:linear-gradient(90deg,#4ca1af,#2c3e50);border:3px solid #000}"},669:function(e,t){e.exports="<app-page-content>\n</app-page-content>\n"},670:function(e,t){e.exports='<div class="portfolio-section">\r\n  <div class="portfolio-section-header">\r\n    <img [style.transform]="rotateChevron()" class="portfolio-section-chevron" (click)="showDescription = !showDescription" alt="Show description" src="assets/chevron-right.svg">\r\n    <a class="portfolio-section-link" href={{link}}>{{name}}</a>\r\n  </div>\r\n  <br>\r\n  <div [style.display]="getDescriptionDisplay()" class="portfolio-section-description">\r\n    <div [innerHTML]="description"></div>\r\n  </div>\r\n  <div class="portfolio-section-date">{{dates}}</div>\r\n</div>\r\n'},671:function(e,t){e.exports='<div class="page-content" *ngIf="selectedPage.id >= 0 && !this.route._routerState.snapshot.url.includes(\'projects/\')">\n  <div class="header">\n    <div class="navbar">\n      <ul class="header-list">\n        <li *ngFor="let page of pagesList">\n          <a class="header-link"\n          [class.selected]="page === selectedPage || (page === defaultPage && !selectedPage)"\n          (click)="onSelect(page)">\n            <div class="header-link-row">\n              <img src={{page.imgUrl}} class="header-link-image">\n              <a>{{page.name}}</a>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <div class="mobile-header">\n        <div class="mobile-navigation">\n          <img (click)="showDropdown = !showDropdown" class="hamburger" src="assets/HAMBURGER_MENU-200.png">\n          <h1 class="mobile-header-title">Erik Hoffman</h1>\n        </div>\n        <div [style.display]="getDropdownStatus()" id="mobile-dropdown-main" class="mobile-dropdown">\n          <div *ngFor="let page of pagesList">\n            <button (click)="onSelect(page, \'true\')" class="mobile-dropdown-option">\n              <div class="header-link-row">\n                <img src={{page.imgUrl}} class="header-link-image">\n                {{page.name}}\n              </div>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="centre">\n    <div class="dialog">\n      <div class="curtain">\n        <div class="curtain__panel curtain__panel--left">\n        </div>\n        <div class="curtain__panel curtain__panel--right">\n        </div>\n      </div>\n      <div class="dialog-text">\n        <div #maintext id="main-text" *ngIf="selectedPage.id === 1">\n          <h1 class="page-title">Home</h1>\n          Welcome to my website and portfolio.<br><br>\n          My name is Erik Hoffman and I\'m a software developer who enjoys using algorithms to solve problems and create cool stuff!\n          <br><br>\n          I\'m currently employed by:\n          <br><br>\n          <b>CIBC as an Intermediate Application Developer (Full Stack)</b>\n          <br><br>\n          and I\'m currently learning:\n          <br><br>\n          <b>Amazon Web Services and Cloud Computing with the goal of becoming a cloud engineer or architect!</b>\n          <br><br>\n\n\n          <div class="portfolio-wrapper">\n            <div class="portfolio-section">\n                <div routerLink="projects/osmosisSolitaire" class="portfolio-section-link main-page-link">Current Side Project</div>\n            </div>\n          </div>\n          <br><br>\n        </div>\n\n\n\n        <div #abouttext id="about-text" *ngIf="selectedPage.id === 2">\n          <h1 class="page-title">About Me</h1>\n          I entered the Computer Science Honours program at University of Guelph in Fall 2012. <br><br> I have a minor\n          in mathematics and have completed a large variety of electives in Computer Science. Some of my favourites include artificial\n          intelligence and information organization and retrieval. <br><br>I graduated in Winter 2016.<br><br>\n          My current passions include cloud computing, artificial intelligence and web frameworks, particularly Angular4!<br><br>\n        </div>\n\n\n\n\n        <div #portfoliotext id="portfolio-text" *ngIf="selectedPage.id === 3">\n          <h1 class="page-title">Projects</h1>\n\n          <div class="portfolio-wrapper">\n            <div *ngFor="let project of projectsList">\n              <app-portfolio-section\n                name={{project.name}}\n                description={{project.description}}\n                dates={{project.dates}}\n                link={{project.link}}>\n              </app-portfolio-section>\n            </div>\n          </div>\n          <br><br><br>\n        </div>\n\n        <div #resumetext class="resume-text" *ngIf="selectedPage.id === 4">\n          <h1 class="page-title">Resume</h1>\n          <a class="uncontained-link" target="_blank" href="assets/Erik_CIS_Resume.pdf">Download as PDF</a>\n        </div>\n      </div>\n\n      <div class="footer">\n        <br>\n        <a class="link-orange" target="_blank" href="https://github.com/ErikHoffman?tab=repositories"><div id="github">This website is hosted on github pages</div></a><br>\n        <a class="link-orange" target="_blank" href="https://bitbucket.org/ErikHoffman/erik-hoffman-website-angular-4"><div id="bitbucket">Check out the unbuilt Angular4 code!</div></a>\n        <br>Contact Me:<br>\n        Email: erik_hoffman@outlook.com<br>\n        <a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button">\n        <img class="bounce-image" id ="linkedinlogo" src="../../assets/linkedin.png" title="Link to my linkedin profile" style="height:45px;width:45px;position:relative;"></a>\n        <a href="https://bitbucket.org/ErikHoffman/profile/repositories?visibility=all">\n        <img class="bounce-image" id ="bitbucketlogo" src="../../assets/bitbucket_new_logo.png" title="Link to my bitbucket" style="width:45px;height:45px;position:relative;"></a>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n'},672:function(e,t){e.exports='<div class="osmosis-container">\r\n  <div class="info" id="info">\r\n    <b>!!!Currently converting the javascript for this over to typescript</b><br><br>\r\n    <div class="osmosis-buttons">\r\n      <a routerLink="/home" style="text-decoration:none;">\r\n        <button class="button">Home</button>\r\n      </a>\r\n      <a target="_blank" href="https://en.wikipedia.org/wiki/Osmosis_(solitaire)" style="text-decoration:none;">\r\n        <button class="button">The Game Rules</button>\r\n      </a>\r\n      <button class="button" onclick="runGame()">Run 1000 Games</button>\r\n    </div>\r\n    <br>Games Ran: <p id="gameCounter"></p>\r\n    <br>Highest Suite Count (closeness to winning): <p id="suiteCount"></p>\r\n    <p id="winloss"></p>\r\n    Winning decks (bottom card is first):\r\n    <p id="winningDecks"></p>\r\n    About: A simple application that runs this very hard version of solitaire through simulations (there is no strategy to the game however)\r\n    to find out just how hard it is to win.\r\n  </div>\r\n  <div class="suites" id="suites">\r\n      Last Winning Suite Set\r\n      <div class="suiteTitle">Suite 1</div>\r\n    <div class="suite" id="suiteOne">\r\n    </div>\r\n\r\n      <div class="suiteTitle">Suite 2</div>\r\n    <div class="suite" id="suiteTwo">\r\n    </div>\r\n\r\n      <div class="suiteTitle">Suite 3</div>\r\n    <div class="suite" id="suiteThree">\r\n    </div>\r\n\r\n      <div class="suiteTitle">Suite 4</div>\r\n    <div class="suite" id="suiteFour">\r\n    </div>\r\n  </div>\r\n</div>\r\n'},673:function(e,t){e.exports='<div class="dialog">\r\n  <b><p>!!!Under construction</p></b>\r\n  <a routerLink="/home">\r\n    <button class="button">Home</button>\r\n  </a>\r\n</div>\r\n'},705:function(e,t,n){e.exports=n(391)}},[705]);