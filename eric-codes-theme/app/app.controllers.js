app.controller("about",["$scope","$rootScope","breadcrumbs",function(o,t,e){e.updateNav(0),t.BodyClass="about",t.NavHidden=!1,t.Footer=!0,e.updateFirstChild({text:".about()",link:"/about"}),o.skillIcons=[{icon:iconFolder+"code_jquery.svg",title:"jQuery"},{icon:iconFolder+"code_angular.svg",title:"Angular 1.x"},{icon:iconFolder+"code_sass.svg",title:"SASS / LESS"},{icon:iconFolder+"code_backend.svg",title:"PHP / MySQL"},{icon:iconFolder+"code_css3.svg",title:"CSS3"},{icon:iconFolder+"code_graphicdesign.svg",title:"Graphic Design"},{icon:iconFolder+"code_gulp.svg",title:"Gulp"},{icon:iconFolder+"code_html5.svg",title:"HTML5"},{icon:iconFolder+"code_typography.svg",title:"Typography"},{icon:iconFolder+"code_uidesign.svg",title:"UI Design"}],setTimeout(function(){$('[data-toggle="tooltip"]').tooltip()},500)}]),app.controller("contact",["$scope","$rootScope","breadcrumbs",function(o,t,e){e.updateNav(2),t.BodyClass="contact",t.NavHidden=!1,t.Footer=!0,e.updateFirstChild({text:".contact()",link:"/contact"}),o.SocialIcons=[{icon:iconFolder+"social_linkedin.svg"},{icon:iconFolder+"social_behance.svg"},{icon:iconFolder+"social_twitter.svg"}]}]),app.controller("homepage",["$scope","$rootScope","breadcrumbs",function(o,t,e){function n(){function o(o,t,e){setTimeout(function(){$(o).addClass("in"),e&&e()},t)}o("#br_l",400,function(){o("#b_e",200,function(){o("#b_r",200,function(){o("#b_i",200,function(){o("#b_c",200,function(){o("#dot",400,function(){o("#t_c",200/3*2,function(){o("#t_o",200/3*2,function(){o("#t_d",200/3*2,function(){o("#t_e",200/3*2,function(){o("#t_s",200/3*2,function(){o("#br_r",400)})})})})})})})})})})})}t.BodyClass="homepage",t.NavHidden=!0,e.homepage(),t.Footer=!1,o.LogoURL=themeURL+"images/mainLogo.svg",Log.Value("$scope.LogoURL",o.LogoURL),o.Logo=themeURL+"app/shared/logo-homepage.html",o.NavIcons=[{name:"About",URL:iconFolder+"nav_about.svg",link:"/about"},{name:"Work",URL:iconFolder+"nav_work.svg",link:"/work"},{name:"Contact",URL:iconFolder+"nav_contact.svg",link:"/contact"}],o.OpenLink=function(o){window.location.href=o},o.BGVidURL=themeURL+"images/background.mp4",o.BGVidPoster=themeURL+"assets/images/bg-still.jpg",$(document).ready(function(){setTimeout(function(){$("video")[0].play(),n(),$(".nav-icon-img").mouseover(function(){$(this).parents(".nav-icon-single").addClass("over")}).mouseout(function(){$(this).parents(".nav-icon-single").removeClass("over")})},500)})}]),app.controller("modalController",["$scope","modal","$rootScope",function(o,t,e){t.ModalSettings,t.ModalToggle=!1,o.ModalSettings,o.ModalToggle=t.ModalToggle,o.ModalStatus="",o.Modal={Open:function(){o.ModalStatus="open"},Close:function(){o.ModalStatus=""}},o.GetImage=function(t){return themeURL+"assets/img/"+o.ModalSettings.slug+"/"+t},o.CloseModal=function(){e.Close()},t.$watch("ModalSettings",function(t,e){o.ModalSettings=t}),t.$watch("ModalToggle",function(t,e){t===!0?o.Modal.Open():o.Modal.Close()})}]),app.controller("navbar",["$scope","$rootScope","breadcrumbs",function(o,t,e){function n(o,t,e){if(Log.Function("Updating Nav"),Log.Set("New Value",o),o[2])Log.Warning("Third value found"),a.In(o[2].text,2,function(){e&&e()});else if(o[1]){if(Log.Warning("Second value found"),t[2])Log.Warning("Old third value"),a.Out(2,function(){o[1].text!==t[1].text&&a.Out(1,function(){a.In(o[1].text,1,function(){e&&e()})})});else if(t[1])Log.Warning("Old second value! replacing..."),a.Out(1,function(){a.In(o[1].text,1,function(){e&&e()})});else if(t[0])a.In(o[1].text,1,function(){e&&e()});else{if(Log.Warning("First load! Running full anim..."),!o[0])return!1;a.In(o[0].text,0,function(){a.In(o[1].text,1,function(){e&&e()})})}$(".crumb:eq(0)").text().length<1&&a.In(o[0].text,0)}else{if(o[1])return!1;Log.Warning("No second value!"),Log.Set("newv[0].text",o[0].text),t[2]?a.Out(2,function(){a.Out(1,function(){e&&e()})}):t[1]?a.Out(1,function(){e&&e()}):a.In(o[0].text,0,function(){e&&e()})}}Log.Heading("Navbar Controller Loaded"),t.NavText=[{text:"eric.codes",link:"/"}],t.NavHidden=!0,o.NavText=[{text:"eric.codes",link:"/"}],o.NavBar=[{icon:GetShared("nav_about"),link:"/about",slug:"about"},{icon:GetShared("nav_work"),link:"/work",slug:"work"},{icon:GetShared("nav_contact"),link:"/contact",slug:"contact"}];var a={Time:150,In:function(o,t,e){var n=o.split("");$.each(n,function(n,i){Log.Value("Text Length",n),setTimeout(function(){var a=o,i=a.substr(0,n+1);Log.Value("Timeout fired",i);var c=".crumb:eq("+t+")";Log.Set("Selector",$(c)),$(c).text(i),n+1==o.length&&e&&e()},a.Time*n)})},Out:function(o,t){var e=".crumb:eq("+o+")",n=$(e).text(),i=n.split("");$.each(i,function(o,i){Log.Value("Text Length",o),setTimeout(function(){var a=n,i=a.substr(0,n.length-o);Log.Value("Timeout fired",i),Log.Set("Selector",$(e)),$(e).text(i),o+1==n.length&&t&&t()},.75*a.Time*o)})}};t.$watch("NavText",function(t,e){function a(){Log.Warning("Firing anims.."),$.each(i,function(o,t){i[o].class="crumb-"+o}),Log.Set("NewVal",i),t.length>e.length?(Log.Msg("Old length greater than new length!"),o.NavText=i,n(i,e)):(Log.Msg("New length equal to or greater than old length"),n(i,e,function(){o.NavText=i}))}Log.Function("NavText watcher triggered!");var i=t;i[0]&&a()},!0),t.$watch("NavHidden",function(o,t){o===!0?$(".navbar").addClass("not-shown"):$(".navbar").removeClass("not-shown")},!0)}]),app.controller("work",["$scope","$rootScope","breadcrumbs",function(o,t,e){e.updateNav(1),t.BodyClass="work",t.NavHidden=!1,t.Footer=!0,e.updateFirstChild({text:".work",link:"/work"}),o.WorkItems=[],t.WorkItems&&(o.WorkItems=t.WorkItems),t.$watch("WorkItems",function(e,n){o.WorkItems=t.WorkItems},!0),setTimeout(function(){$('[data-toggle="tooltip"]').tooltip(),$(".work-item").click(function(o){Log.Msg("Clicked!"),Log.Value("Window width",$(window).width()),$(window).width()<768&&(Log.Value("Firing scroll top",$(this).position().top),$("body, html").animate({scrollTop:$(this).position().top+50},400))})},500),o.GetBackground=function(o){return themeURL+"assets/img/"+o+"/background.jpg"}}]),app.controller("work_single",["$scope","$rootScope","breadcrumbs","$stateParams",function(o,t,e,n){function a(){o.AllProjects=t.WorkItems,o.ThisData=t.AllData[c],o.WorkData=o.ThisData.workData,o.Tags=returnTags(o.ThisData.workData.tags),o.Sections=o.ThisData.sections,Log.Set("Tags",o.Tags),e.updateSecondChild({text:"."+o.WorkData.title,link:"/"+o.WorkData.slug},{text:".work",link:"/work"})}function i(){function t(){setTimeout(function(){o.HeroCycleNext(),t()},3e3)}var e=$(".hero-image-single");e.eq(0).addClass("open"),o.HeroCycleNext=function(){var o;e.each(function(t,e){$(e).hasClass("open")&&(o=t)});var t=o+1;t>=e.length&&(t=0),e.removeClass("open").eq(t).addClass("open")},o.HeroCyclePrev=function(){var o;e.each(function(t,e){$(e).hasClass("open")&&(o=t)});var t=o-1;t<0&&(t=e.length-1),e.removeClass("open").eq(t).addClass("open")},t()}e.updateNav(1),t.BodyClass="work-single",t.NavHidden=!1,t.Footer=!0;var c=n.workSlug;o.AllProjects,o.ThisData,o.WorkData,o.Tags,o.Sections,o.ContentImgUrl=function(t,e){return"hero"==e?themeURL+"assets/img/"+o.WorkData.slug+"/mockup/"+t:"gallery"==e?themeURL+"assets/img/"+o.WorkData.slug+"/"+t:void 0},$(document).ready(function(){i()}),t.AllData&&a(),t.$watch("AllData",function(o,t){a()},!0)}]);