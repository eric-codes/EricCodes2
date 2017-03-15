app.controller("about",["$scope","$rootScope","breadcrumbs",function(e,t,i){t.BodyClass="about",i.updateFirstChild({text:".about()",link:"/about"}),e.SocialIcons=[{icon:iconFolder+"social_linkedin.svg"},{icon:iconFolder+"social_behance.svg"},{icon:iconFolder+"social_twitter.svg"}],e.skillIcons=[{icon:iconFolder+"code_jquery.svg",title:"jQuery"},{icon:iconFolder+"code_angular.svg",title:"Angular 1.x"},{icon:iconFolder+"code_sass.svg",title:"SASS / LESS"},{icon:iconFolder+"code_backend.svg",title:"PHP / MySQL"},{icon:iconFolder+"code_css3.svg",title:"CSS3"},{icon:iconFolder+"code_graphicdesign.svg",title:"Graphic Design"},{icon:iconFolder+"code_gulp.svg",title:"Gulp"},{icon:iconFolder+"code_html5.svg",title:"HTML5"},{icon:iconFolder+"code_typography.svg",title:"Typography"},{icon:iconFolder+"code_uidesign.svg",title:"UI Design"}]}]),app.controller("homepage",["$scope","$rootScope","breadcrumbs",function(e,t,i){t.BodyClass="homepage",i.homepage(),e.LogoURL=themeURL+"images/mainLogo.svg",Log.Value("$scope.LogoURL",e.LogoURL),e.NavIcons=[{name:"About",URL:iconFolder+"nav_about.svg",link:"/about"},{name:"Work",URL:iconFolder+"nav_work.svg",link:"/work"},{name:"Contact",URL:iconFolder+"nav_contact.svg",link:"/contact"}],e.OpenLink=function(e){window.location.href=e}}]),app.controller("navbar",["$scope","$rootScope","breadcrumbs",function(e,t,i){function l(e,t,i){if(Log.Function("Updating Nav"),Log.Set("New Value",e),e[2])Log.Warning("Third value found"),u.In(e[2].text,2,function(){i&&i()});else if(e[1])if(Log.Warning("Second value found"),t[2])Log.Warning("Third value found"),u.Out(2,function(){e[1].text!==t[1].text&&u.Out(1,function(){u.In(e[1].text,1,function(){i&&i()})})});else if(t[1])u.Out(1,function(){u.In(e[1].text,1,function(){i&&i()})});else if(t[0])u.In(e[1].text,1,function(){i&&i()});else{if(!e[0])return!1;u.In(e[0].text,0,function(){u.In(e[1].text,1,function(){i&&i()})})}else{if(e[1])return!1;Log.Warning("No second value!"),Log.Set("newv[0].text",e[0].text),t[2]?u.Out(2,function(){u.Out(1,function(){i&&i()})}):t[1]?u.Out(1,function(){i&&i()}):u.In(e[0].text,0,function(){i&&i()})}}Log.Heading("Navbar Controller Loaded"),t.NavText=[{text:"eric.codes",link:"/"}],e.NavText=[{text:"eric.codes",link:"/"}],e.NavBar=[{icon:iconFolder+"nav_about.svg",link:"/about"},{icon:iconFolder+"nav_work.svg",link:"/work"},{icon:iconFolder+"nav_contact.svg",link:"/contact"}];var u={Time:150,In:function(e,t,i){var l=e.split("");$.each(l,function(l,s){Log.Value("Text Length",l),setTimeout(function(){var u=e,s=u.substr(0,l+1);Log.Value("Timeout fired",s);var n=".crumb:eq("+t+")";Log.Set("Selector",$(n)),$(n).text(s),l+1==e.length&&i&&i()},u.Time*l)})},Out:function(e,t){var i=".crumb:eq("+e+")",l=$(i).text(),s=l.split("");$.each(s,function(e,s){Log.Value("Text Length",e),setTimeout(function(){var u=l,s=u.substr(0,l.length-e);Log.Value("Timeout fired",s),Log.Set("Selector",$(i)),$(i).text(s),e+1==l.length&&t&&t()},.75*u.Time*e)})}};t.$watch("NavText",function(t,i){var u=t;u[0]&&($.each(u,function(e,t){u[e].class="crumb-"+e}),t.length>=i.length&&(e.NavText=u),l(u,i,function(){t.length<i.length&&(e.NavText=u)}))},!0)}]),app.controller("work",["$scope","$rootScope","breadcrumbs",function(e,t,i){t.BodyClass="work",i.updateFirstChild({text:".work",link:"/work"}),e.WorkItems=[{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])},{name:"Chisel Cartel",codeName:"chisel.cartel",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","angular","uidesign","typography"])}],setTimeout(function(){$('[data-toggle="tooltip"]').tooltip()},500)}]),app.controller("work_single",["$scope","$rootScope","breadcrumbs",function(e,t,i){t.BodyClass="work-single",i.updateSecondChild({text:".chisel.cartel",link:"/chisel-cartel"}),e.AllProjects=[{name:"Chisel Cartel",slug:"chisel-cartel"},{name:"Chisel Cartel 2",slug:"chisel-cartel"},{name:"Chisel Cartel 3",slug:"chisel-cartel"},{name:"Chisel Cartel 4",slug:"chisel-cartel"}],e.WorkData={title:"chisel.cartel",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",tags:returnTags(["jquery","gulp","uidesign","backend"]),hero:[{image:"http://placehold.it/500x500"},{image:"http://placehold.it/500x500"},{image:"http://placehold.it/500x500"}]},e.Sections=[{title:"design()",tags:returnTags(["typography","html5","css3","graphicdesign"])},{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{gallery:[{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"}]},{title:"development",tags:returnTags(["jquery","gulp","backend","angular"]),textSections:[{title:"frontEnd()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{title:"backEnd()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "},{title:"automation()",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "}]},{gallery:[{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"},{URL:"http://placehold.it/640x480"}]}]}]);