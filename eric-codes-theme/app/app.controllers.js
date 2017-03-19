app.controller("about",["$scope","$rootScope","breadcrumbs",function(e,t,i){i.updateNav(0),t.BodyClass="about",t.NavHidden=!1,t.Footer=!0,i.updateFirstChild({text:".about()",link:"/about"}),e.skillIcons=[{icon:iconFolder+"code_jquery.svg",title:"jQuery"},{icon:iconFolder+"code_angular.svg",title:"Angular 1.x"},{icon:iconFolder+"code_sass.svg",title:"SASS / LESS"},{icon:iconFolder+"code_backend.svg",title:"PHP / MySQL"},{icon:iconFolder+"code_css3.svg",title:"CSS3"},{icon:iconFolder+"code_graphicdesign.svg",title:"Graphic Design"},{icon:iconFolder+"code_gulp.svg",title:"Gulp"},{icon:iconFolder+"code_html5.svg",title:"HTML5"},{icon:iconFolder+"code_typography.svg",title:"Typography"},{icon:iconFolder+"code_uidesign.svg",title:"UI Design"}],setTimeout(function(){$('[data-toggle="tooltip"]').tooltip()},500)}]),app.controller("contact",["$scope","$rootScope","breadcrumbs",function(e,t,i){i.updateNav(2),t.BodyClass="contact",t.NavHidden=!1,t.Footer=!0,i.updateFirstChild({text:".contact()",link:"/contact"}),e.SocialIcons=[{icon:iconFolder+"social_linkedin.svg"},{icon:iconFolder+"social_behance.svg"},{icon:iconFolder+"social_twitter.svg"}]}]),app.controller("homepage",["$scope","$rootScope","breadcrumbs",function(e,t,i){t.BodyClass="homepage",t.NavHidden=!0,i.homepage(),t.Footer=!1,e.LogoURL=themeURL+"images/mainLogo.svg",Log.Value("$scope.LogoURL",e.LogoURL),e.NavIcons=[{name:"About",URL:iconFolder+"nav_about.svg",link:"/about"},{name:"Work",URL:iconFolder+"nav_work.svg",link:"/work"},{name:"Contact",URL:iconFolder+"nav_contact.svg",link:"/contact"}],e.OpenLink=function(e){window.location.href=e}}]),app.controller("navbar",["$scope","$rootScope","breadcrumbs",function(e,t,i){function l(e,t,i){if(Log.Function("Updating Nav"),Log.Set("New Value",e),e[2])Log.Warning("Third value found"),a.In(e[2].text,2,function(){i&&i()});else if(e[1]){if(Log.Warning("Second value found"),t[2])Log.Warning("Old third value"),a.Out(2,function(){e[1].text!==t[1].text&&a.Out(1,function(){a.In(e[1].text,1,function(){i&&i()})})});else if(t[1])Log.Warning("Old second value! replacing..."),a.Out(1,function(){a.In(e[1].text,1,function(){i&&i()})});else if(t[0])a.In(e[1].text,1,function(){i&&i()});else{if(Log.Warning("First load! Running full anim..."),!e[0])return!1;a.In(e[0].text,0,function(){a.In(e[1].text,1,function(){i&&i()})})}$(".crumb:eq(0)").text().length<1&&a.In(e[0].text,0)}else{if(e[1])return!1;Log.Warning("No second value!"),Log.Set("newv[0].text",e[0].text),t[2]?a.Out(2,function(){a.Out(1,function(){i&&i()})}):t[1]?a.Out(1,function(){i&&i()}):a.In(e[0].text,0,function(){i&&i()})}}Log.Heading("Navbar Controller Loaded"),t.NavText=[{text:"eric.codes",link:"/"}],t.NavHidden=!0,e.NavText=[{text:"eric.codes",link:"/"}],e.NavBar=[{icon:GetShared("nav_about"),link:"/about",slug:"about"},{icon:GetShared("nav_work"),link:"/work",slug:"work"},{icon:GetShared("nav_contact"),link:"/contact",slug:"contact"}];var a={Time:150,In:function(e,t,i){var l=e.split("");$.each(l,function(l,n){Log.Value("Text Length",l),setTimeout(function(){var a=e,n=a.substr(0,l+1);Log.Value("Timeout fired",n);var u=".crumb:eq("+t+")";Log.Set("Selector",$(u)),$(u).text(n),l+1==e.length&&i&&i()},a.Time*l)})},Out:function(e,t){var i=".crumb:eq("+e+")",l=$(i).text(),n=l.split("");$.each(n,function(e,n){Log.Value("Text Length",e),setTimeout(function(){var a=l,n=a.substr(0,l.length-e);Log.Value("Timeout fired",n),Log.Set("Selector",$(i)),$(i).text(n),e+1==l.length&&t&&t()},.75*a.Time*e)})}};t.$watch("NavText",function(t,i){function a(){Log.Warning("Firing anims.."),$.each(n,function(e,t){n[e].class="crumb-"+e}),Log.Set("NewVal",n),t.length>i.length?(Log.Msg("Old length greater than new length!"),e.NavText=n,l(n,i)):(Log.Msg("New length equal to or greater than old length"),l(n,i,function(){e.NavText=n}))}Log.Function("NavText watcher triggered!");var n=t;n[0]&&a()},!0),t.$watch("NavHidden",function(e,t){e===!0?$(".navbar").addClass("not-shown"):$(".navbar").removeClass("not-shown")},!0)}]),app.controller("work",["$scope","$rootScope","breadcrumbs",function(e,t,i){i.updateNav(1),t.BodyClass="work",t.NavHidden=!1,t.Footer=!0,i.updateFirstChild({text:".work",link:"/work"}),e.WorkItems=[{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])}],setTimeout(function(){$('[data-toggle="tooltip"]').tooltip(),$(".work-item").click(function(e){Log.Msg("Clicked!"),Log.Value("Window width",$(window).width()),$(window).width()<768&&(Log.Value("Firing scroll top",$(this).position().top),$("body, html").animate({scrollTop:$(this).position().top+50},400))})},500)}]),app.controller("work_single",["$scope","$rootScope","breadcrumbs",function(e,t,i){i.updateNav(1),t.BodyClass="work-single",t.NavHidden=!1,t.Footer=!0,i.updateSecondChild({text:".chisel.cartel",link:"/chisel-cartel"},{text:".work",link:"/work"}),e.AllProjects=[{name:"Chisel Cartel",slug:"chisel-cartel"},{name:"Chisel Cartel 2",slug:"chisel-cartel"},{name:"Chisel Cartel 3",slug:"chisel-cartel"},{name:"Chisel Cartel 4",slug:"chisel-cartel"}],e.WorkData={title:"chisel.cartel",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","gulp","uidesign","backend"]),hero:[{image:"http://placehold.it/500x500"},{image:"http://placehold.it/500x500"},{image:"http://placehold.it/500x500"}]},e.Sections=[{title:"design()",tags:returnTags(["typography","html5","css3","graphicdesign"])},{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{gallery:[{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1281x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1282x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1283x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1284x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1285x1024"}]},{title:"development",tags:returnTags(["jquery","gulp","backend","angular"]),textSections:[{title:"frontEnd()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{title:"backEnd()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{title:"automation()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "}]},{gallery:[{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1210x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1220x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1230x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1240x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1250x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1260x1024"},{thumbnail:"http://placehold.it/640x480",URL:"http://placehold.it/1270x1024"}]}]}]);