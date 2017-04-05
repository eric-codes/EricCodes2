/**
 * @todo INSTALL PRISMJS!
 */

app.controller('work_single', ['$scope', '$rootScope', 'breadcrumbs', '$stateParams', function($scope, $rootScope, breadcrumbs, $stateParams) {

    breadcrumbs.updateNav(1);

    $rootScope.BodyClass = "work-single";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    var ThisSlug = $stateParams.workSlug;




    $scope.AllProjects;

    $scope.ThisData;

    $scope.WorkData;
    $scope.Tags;
    $scope.Sections;

    $scope.ContentImgUrl = function(filename, type) {
        if (type == "hero") {
            return themeURL + "assets/img/" + $scope.WorkData.slug + "/mockup/" + filename;
        } else if (type == "gallery") {
            return themeURL + "assets/img/" + $scope.WorkData.slug + "/" + filename;
        }
    }

    function UpdateScope() {
        $scope.AllProjects = $rootScope.WorkItems;

        $scope.ThisData = $rootScope.AllData[ThisSlug];

        $scope.WorkData = $scope.ThisData.workData;
        $scope.Tags = returnTags($scope.ThisData.workData.tags);
        $scope.Sections = $scope.ThisData.sections;

        Log.Set('Tags', $scope.Tags);

        breadcrumbs.updateSecondChild({
            text: '.' + $scope.WorkData.title,
            link: "/" + $scope.WorkData.slug
        }, {
            text: ".work",
            link: "/work"
        })

    }

    function InitHeroSlider() {

        var HeroImage = $('.hero-image-single');

        HeroImage.eq(0).addClass('open');


        $scope.HeroCycleNext = function() {

            var Current;

            HeroImage.each(function(i, e) {

                if ($(e).hasClass('open')) {
                    Current = i;
                }

            })

            var Next = Current + 1;

            if (Next - 1 >= HeroImage.length) {
                Next = 0;
            }

            HeroImage.removeClass('open')
                .eq(Next).addClass('open');

        }


    }

    $(document).ready(function() {
        InitHeroSlider();
    })


    if ($rootScope.AllData) {
        UpdateScope();
    }

    $rootScope.$watch('WorkData', function(nv, ov) {
        UpdateScope();
    }, true)


}]);
