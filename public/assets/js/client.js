$(document).ready(function() {
	console.log("Hi there");
	$('#addModal').modal();


	$(".devourBtn").on("click", function(){
		var burger_id = $(this).data("id");
		var condition = $(this).data("condition");
		console.log(burger_id);
		$.ajax({
			method: "PUT",
			url:"/burgers/"+burger_id+"/"+condition
		}).then(function(data){
			location.reload();
		})
	});

});