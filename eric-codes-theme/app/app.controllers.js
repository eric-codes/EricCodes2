app.controller("about",["$scope","$rootScope",function(o,c){o.SocialIcons=[{icon:iconFolder+"social_linkedin.svg"},{icon:iconFolder+"social_behance.svg"},{icon:iconFolder+"social_twitter.svg"}],o.skillIcons=[{icon:iconFolder+"code_jquery.svg",title:"jQuery"},{icon:iconFolder+"code_angular.svg",title:"Angular 1.x"},{icon:iconFolder+"code_sass.svg",title:"SASS / LESS"},{icon:iconFolder+"code_backend.svg",title:"PHP / MySQL"},{icon:iconFolder+"code_css3.svg",title:"CSS3"},{icon:iconFolder+"code_graphicdesign.svg",title:"Graphic Design"},{icon:iconFolder+"code_gulp.svg",title:"Gulp"},{icon:iconFolder+"code_html5.svg",title:"HTML5"},{icon:iconFolder+"code_typography.svg",title:"Typography"},{icon:iconFolder+"code_uidesign.svg",title:"UI Design"}]}]),app.controller("homepage",["$scope","$rootScope",function(o,c){o.LogoURL=themeURL+"images/mainLogo.svg",Log.Value("$scope.LogoURL",o.LogoURL),o.NavIcons=[{name:"About",URL:iconFolder+"nav_about.svg",link:"/#/about"},{name:"Work",URL:iconFolder+"nav_work.svg",link:"/#/work"},{name:"Contact",URL:iconFolder+"nav_contact.svg",link:"/#/contact"}]}]);