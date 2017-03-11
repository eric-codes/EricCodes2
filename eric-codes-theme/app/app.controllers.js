app.controller("about",["$scope","$rootScope",function(e,i){e.SocialIcons=[{icon:iconFolder+"social_linkedin.svg"},{icon:iconFolder+"social_behance.svg"},{icon:iconFolder+"social_twitter.svg"}],e.skillIcons=[{icon:iconFolder+"code_jquery.svg",title:"jQuery"},{icon:iconFolder+"code_angular.svg",title:"Angular 1.x"},{icon:iconFolder+"code_sass.svg",title:"SASS / LESS"},{icon:iconFolder+"code_backend.svg",title:"PHP / MySQL"},{icon:iconFolder+"code_css3.svg",title:"CSS3"},{icon:iconFolder+"code_graphicdesign.svg",title:"Graphic Design"},{icon:iconFolder+"code_gulp.svg",title:"Gulp"},{icon:iconFolder+"code_html5.svg",title:"HTML5"},{icon:iconFolder+"code_typography.svg",title:"Typography"},{icon:iconFolder+"code_uidesign.svg",title:"UI Design"}]}]),app.controller("homepage",["$scope","$rootScope",function(e,i){e.LogoURL=themeURL+"images/mainLogo.svg",Log.Value("$scope.LogoURL",e.LogoURL),e.NavIcons=[{name:"About",URL:iconFolder+"nav_about.svg",link:"/about"},{name:"Work",URL:iconFolder+"nav_work.svg",link:"/work"},{name:"Contact",URL:iconFolder+"nav_contact.svg",link:"/contact"}],e.OpenLink=function(e){window.location.href=e}}]),app.controller("navbar",["$scope",function(e){e.NavBar=[{icon:iconFolder+"nav_about.svg",link:"/about"},{icon:iconFolder+"nav_work.svg",link:"/work"},{icon:iconFolder+"nav_contact.svg",link:"/contact"}]}]),app.controller("work",["$scope","$rootScope",function(e,i){e.WorkItems=[{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])}]}]),app.controller("work_single",["$scope","$rootScope",function(e,i){e.WorkData={title:"chisel.cartel",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","gulp","uidesign","backend"]),hero:[{image:"http://placehold.it/500x500"},{image:"http://placehold.it/500x500"},{image:"http://placehold.it/500x500"}]},e.Sections=[{title:"design()",tags:returnTags(["typography","html5","css3","graphicdesign"])},{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{gallery:[{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"}]},{title:"development",tags:returnTags(["jquery","gulp","backend","angular"]),textSections:[{title:"frontEnd()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{title:"backEnd()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{title:"automation()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "}]},{gallery:[{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"}]}]}]);