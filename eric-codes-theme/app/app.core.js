app.controller("CoreController",["$scope","$rootScope",function(e,t){t.$on("$stateChangeStart",function(e,t,o,a,n){$("html, body").animate({scrollTop:0},0)})}]),app.factory("breadcrumbs",["$rootScope",function(e){Log.Heading("Breadcrumbs Service initiated");var t={};return t.homepage=function(){e.NavText=[{text:"eric.codes",link:"/"}]},t.updateFirstChild=function(t){Log.Function("Updating Nav First Child");var o=e.NavText;Log.Set("currentNav before change",o),o[2]&&(o.pop(),Log.Set("currentNav popped!",o)),o[1]=t,Log.Set("currentNav after change",o),e.NavText=o},t.updateSecondChild=function(t,o){Log.Function("Updating Nav Second Child");var a=e.NavText;Log.Set("currentNav before change",a),a[1]=o,a[2]=t,Log.Set("currentNav after change",a),e.NavText=a},t}]);