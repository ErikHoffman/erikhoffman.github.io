webpackJsonp([1,4],{328:function(e,t,n){"use strict";var o=n(0),i=n(329),r=n(511),a=n(212);n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,n){this.route=e,this.zone=t,this.router=n,this.selectedPage={id:-1,name:"unrouted"},this.defaultPage=i.a[0],this.pagesList=i.a,this.projectsList=r.a,this.showDropdown=!1}return e.prototype.ngOnInit=function(){var e=this;this.navigationSubscription=this.router.events.subscribe(function(t){t instanceof a.b&&e.routeToPage(t)})},e.prototype.routeToPage=function(e){var t=this,n=e.url.slice(1);Object.keys(this.pagesList).forEach(function(e){t.pagesList[e].name.toUpperCase()===n.toUpperCase()&&(t.selectedPage=t.pagesList[e])}),this.selectedPage.id===-1&&(this.selectedPage=this.defaultPage)},e.prototype.getDropdownStatus=function(){return this.showDropdown?"block":"none"},e.prototype.onSelect=function(e,t){this.selectedPage=e,t&&(document.getElementById("mobile-dropdown-main").style.display="none"),this.router.navigateByUrl("/"+this.selectedPage.name.toLowerCase())},e.prototype.ngOnDestroy=function(){this.navigationSubscription&&this.navigationSubscription.unsubscribe()},e=s([n.i(o._6)({selector:"app-page-content",template:n(668),styles:[n(665)]}),c("design:paramtypes",["function"==typeof(t=void 0!==a.c&&a.c)&&t||Object,"function"==typeof(l=void 0!==o.S&&o.S)&&l||Object,"function"==typeof(p=void 0!==a.d&&a.d)&&p||Object])],e);var t,l,p}()},329:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=[{id:1,name:"Home"},{id:2,name:"About"},{id:3,name:"Projects"},{id:4,name:"Resume"}];!function(){function e(){}e}()},388:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=388},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(477),i=n(0),r=n(512),a=n(509);r.a.production&&n.i(i.a)(),n.i(o.a)().bootstrapModule(a.a)},507:function(e,t,n){"use strict";var o=n(0),i=n(212),r=n(329),a=n(328);n.d(t,"a",function(){return p});var s=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:a.a,data:{page:r.a[0]}},{path:"about",component:a.a,data:{page:r.a[1]}},{path:"projects",component:a.a,data:{page:r.a[2]}},{path:"resume",component:a.a,data:{page:r.a[3]}}],p=function(){function e(){}return e=s([n.i(o.b)({imports:[i.a.forRoot(l)],exports:[i.a]}),c("design:paramtypes",[])],e)}()},508:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.title="Erik Hoffman Website!"}return e=i([n.i(o._6)({selector:"app-root",template:n(666),styles:[n(664)]}),r("design:paramtypes",[])],e)}()},509:function(e,t,n){"use strict";var o=n(146),i=n(0),r=n(467),a=n(473),s=n(508),c=n(328),l=n(510),p=n(507);n.d(t,"a",function(){return f});var d=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(){}return e=d([n.i(i.b)({declarations:[s.a,c.a,l.a],imports:[o.a,r.a,a.a,p.a],providers:[],bootstrap:[s.a]}),u("design:paramtypes",[])],e)}()},510:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e.prototype.getDescriptionDisplay=function(){return this.showDescription?"inline-block":"none"},e.prototype.rotateChevron=function(){return this.showDescription?"rotate(180deg)":"rotate(360deg)"},e=i([n.i(o._6)({selector:"app-portfolio-section",inputs:["name","description","link"],template:n(667)}),r("design:paramtypes",[])],e)}()},511:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=[{id:1,name:"Functional Connect Four in Elixir",description:"Created in a functional programming study group during my final semester at University of Guelph.Used the Elixir programming language to create a connect four game to communicate over IRC with other members of the class.Learned about the advantages of functional as well as the hurdles one must overcome (mutability, recursion, etc.).",link:"https://bitbucket.org/ErikHoffman/connect-four-elixir"},{id:2,name:"State Machine Creator",description:"A UI made in phaserJS that lets you create simple state machines and save them to a file.This is a work in progress as I want to keep up to date with javascript and also try different 2d engines for web.",link:"../stateM_creator/stateM_creator.html"},{id:3,name:"Truform - Android Workout App",description:"An app made in a team for a course at University of Guelph. The entire course followed the development ofthis app and was graded along the way during meetings with the professor.Myself and three others created this using an Arduino computer with a gyroscope and accelerometerlinked to a smartphone to measure workout form from a user.My major role in the project involved creating the algorithm that would measure the data ofthe workout and give output on whether or not the form of theworkout was performed well.",link:"https://bitbucket.org/benbaird/truform"}];!function(){function e(){}e}()},512:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={production:!0}},664:function(e,t){e.exports=""},665:function(e,t){e.exports=""},666:function(e,t){e.exports="<app-page-content><router-outlet></router-outlet></app-page-content>\n"},667:function(e,t){e.exports='<div class="portfolio-section">\r\n  <a class="link-portfolio" href={{link}}>{{name}}</a>\r\n  <br>\r\n  <p [style.display]="getDescriptionDisplay()" class="portfolio-section-description">\r\n    {{description}}\r\n  </p>\r\n  <img [style.transform]="rotateChevron()" class="portfolio-section-chevron" (click)="showDescription = !showDescription" alt="Show description" src="assets/chevron-bottom-512.png">\r\n</div>\r\n'},668:function(e,t){e.exports='<div class="header">\n  <div class="navbar">\n    <ul class="header-list">\n      <li *ngFor="let page of pagesList">\n        <a class="header-link"\n        [class.selected]="page === selectedPage || (page === defaultPage && !selectedPage)"\n        (click)="onSelect(page)">\n        {{page.name}}</a>\n      </li>\n    </ul>\n    <div class="mobile-header">\n      <div class="mobile-navigation">\n        <img (click)="showDropdown = !showDropdown" class="hamburger" src="assets/HAMBURGER_MENU-512.png">\n        <h1 class="mobile-header-title">Erik Hoffman</h1>\n      </div>\n      <div [style.display]="getDropdownStatus()" id="mobile-dropdown-main" class="mobile-dropdown">\n        <div *ngFor="let page of pagesList">\n          <button (click)="onSelect(page, \'true\')" class="mobile-dropdown-option">{{page.name}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="centre">\n  <div class="dialog">\n    <div class="curtain">\n      <div class="curtain__panel curtain__panel--left">\n      </div>\n      <div class="curtain__panel curtain__panel--right">\n      </div>\n    </div>\n    <div class="dialog-text">\n      <div #maintext id="main-text" *ngIf="selectedPage.id === 1">\n        <h1 class="page-title">Home</h1>\n        Welcome to my website and portfolio.\n        <br><br>\n        Currently employed by:\n        <br><br>\n        <b>CIBC as an Intermediate Application Developer (Full Stack)</b>\n        <br><br>\n        Currently learning:\n        <br><br>\n        <b>Amazon Web Services through Linuxacademy.com</b>\n        <br><br>\n        <div class="portfolio-section">\n          <a href="projects/toughCardGameSimulator/toughCardGameSimulator.html" class="linkind">\n            <div id="cardGameLink"><font size="6">Current Side Project</font></div>\n          </a>\n        </div>\n        <br><br>\n      </div>\n\n\n\n      <div #abouttext id="about-text" *ngIf="selectedPage.id === 2">\n        <h1 class="page-title">About Me</h1>\n        I entered the Computer Science Honours program at University of Guelph in Fall 2012. <br><br> I have a minor\n        in mathematics and have completed a large variety of electives in Computer Science. Some of my favourites include artificial\n        intelligence and information organization and retrieval. <br><br>I graduated in Winter 2016.<br><br><br>\n      </div>\n\n\n\n\n      <div #portfoliotext id="portfolio-text" *ngIf="selectedPage.id === 3">\n        <h1 class="page-title">Projects</h1>\n\n        <div *ngFor="let project of projectsList">\n          <app-portfolio-section\n            name={{project.name}}\n            description={{project.description}}\n            link={{project.link}}>\n          </app-portfolio-section>\n        </div>\n        <br><br><br>\n      </div>\n\n      <div #resumetext class="resume-text" *ngIf="selectedPage.id === 4">\n        <h1 class="page-title">Resume</h1>\n        <a class="linkind" target="_blank" href="assets/Erik_CIS_Resume.pdf">Download as PDF</a>\n      </div>\n    </div>\n\n    <div class="footer">\n      <br>\n      <a class="link-orange" href="https://github.com/ErikHoffman?tab=repositories"><div id="github">This website is hosted on github pages</div></a><br>\n      <a class="link-orange" href="https://bitbucket.org/ErikHoffman/erik-hoffman-website-angular-4"><div id="bitbucket">Check out the unbuilt Angular4 code!</div></a>\n      <br>Contact Me:<br>\n      Email: erik_hoffman@outlook.com<br>\n      <a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button">\n      <img class="bounce-image" id ="linkedinlogo" src="../../assets/linkedin.png" title="Link to my linkedin profile" style="height:45px;width:45px;position:relative;"></a>\n      <a href="https://bitbucket.org/ErikHoffman/profile/repositories?visibility=all">\n      <img class="bounce-image" id ="bitbucketlogo" src="../../assets/bitbucket_new_logo.png" title="Link to my bitbucket" style="width:45px;height:45px;position:relative;"></a>\n    </div>\n  </div>\n</div>\n'},700:function(e,t,n){e.exports=n(389)}},[700]);