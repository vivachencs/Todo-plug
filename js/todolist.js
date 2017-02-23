// 创建 Angular 对象
var todoApp = window.angular.module("todoApp", [])

// 对象的控制器参数
todoApp.controller('todolistcontroller', ['$scope', function($scope){
    $scope.text = ''

    // 默认清单
    $scope.todolist = []

    // 增添任务
    $scope.add = function() {

        //获取文本
        var text = $scope.text.trim()
        if (text) {
            $scope.todolist.push({
                text: text,
                done: false
            })
            $scope.text = ''
        }
    }

    //删除任务
    $scope.delete = function(todo) {
        var index = $scope.todolist.indexOf(todo)

        $scope.todolist.splice(index, 1)
    }

    //统计任务总量
    $scope.doneCount = function() {
        var temp = $scope.todolist.filter(function(item){
            return item.done
        })
        //任务个数
        return temp.length
    }
}])
