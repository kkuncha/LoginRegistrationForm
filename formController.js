
app.controller("formController", function($scope){
	$scope.txtGender="male";
	$scope.submitted=false;
	$scope.ageError=false;
	var errorCount=0;
	$scope.submitForm=function(){
		errorCount=0;
		$scope.submitted=true;
		if($scope.userForm.$invalid){
			errorCount++;
		}
		var age=parseInt($scope.txtAge);
		if(age<18 || age>30){
			$scope.ageError=true;
			errorCount++;
		}
		else{
			$scope.ageError=false;
		}
		if(errorCount==0){
			alert("valid user form");
			$scope.result="valid user form";
		}
		else{
			alert("invalid form");
		}
	};
});