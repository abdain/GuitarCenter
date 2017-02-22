app.controller('maincontroller', function ($scope, $http) {

    $http.get("../guitar.json")

    .then(function (response) {
//        console.log(response);
        $scope.allProducts = response.data.allProducts;
console.log(response.data.allProducts);
//	var jdata = response.data.allProducts;
		
		 $scope.image1 = response.data.allProducts[0].image;
 console.log($scope.image1);
//		
		 $scope.image2 = response.data.allProducts[1].image;
		 $scope.image3 = response.data.allProducts[2].image;
		 $scope.image4 = response.data.allProducts[3].image;
		 $scope.image5 = response.data.allProducts[4].image;
 });
});

//app.controller("maincontroller", maincontroller);
//function maincontroller($scope, dataService){
//	$scope.allProducts = response.data.allProducts;
//var jData = responose.data.allProducts;
//});