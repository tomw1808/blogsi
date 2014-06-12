myApp.directive('scrollOnClick', function() {
    return {
        restrict: 'A',
        link: function(scope, $elm, attrs) {
            var idToScroll = attrs.href;
            $elm.on('click', function() {
                var $target;
                if (idToScroll) {
                    $target = $(idToScroll);
                } else {
                    $target = $elm;
                }
                /*
                addition: "html, body" is necessary, because FF takes html, Chrome body.
                http://stackoverflow.com/questions/19303405/difference-between-html-body-animate-and-body-animate
                 */
                $("html, body").animate({scrollTop: $target.offset().top}, "slow");
            });
        }
    }
});