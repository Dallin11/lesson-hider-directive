angular.module("directivePractice").controller("lessonCtrl", function($scope,lessonService){
    $scope.lessons= ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    
 function announceDay(lesson, day){
return alert(lesson + "is active on" + day + "." )
 $scope.announceDay = function (lesson, day){
        if(lesson && day){
        alert(lesson + ' is active on ' + day + '.')
        } else {
            alert('This lesson is not scheduled')
        }
    }

});