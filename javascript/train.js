$(document).ready(function() {

//var dataRef = new Firebase('https://employeepay7716.firebaseio.com/');

var dataRef = new Firebase('https://popping-heat-7384.firebaseio.com/');
var trainName = '';
var destination = '';
var trainStart = '';
var frequency = '';

console.log(trainName);

$("#submitbutton").on("click",function(){
debugger;
	 trainName = $('#docTrain').val().trim(); 
	 destination = $('#docDestination').val().trim();
	 trainStart = $('#docStart').val().trim();
	 frequency = $('#docFrequency').val().trim();

	 console.log(trainName);
	 logging();

	dataRef.push({
		trainName: trainName,
		destination: destination,
		trainStart: trainStart,
		frequency: frequency
	})
});

dataRef.on('child_added', function (childsnapshot){
        $('#docTrain').html(childsnapshot.val().trainName);
        $('#docDestination').html(childsnapshot.val().destination);
        $('#docStart').html(childsnapshot.val().trainStart);
        $('#docFrequency').html(childsnapshot.val().frequency);
        });



function logging(){
	console.log(trainName +"js trainName");
	console.log(destination + "js destination");
	console.log(trainStart + "js trainStart");
	console.log(frequency + "js frequency");
	 
}

	
 });   //end - $(document).ready(function()

/*


var dataRef = new Firebase('https://jennew.firebaseio.com/');
var name = '';
var position = '';
var beginDate = '';
var rate = '';

$("#submitbutton").on("click",function(){

	 name = $('#employeeName').val().trim();
	 position = $('#role').val().trim();
	 beginDate = $('#startDate').val().trim();
	 rate = $('#monthlyRate').val().trim();

dataRef.push({
	name: name,
	position: position,
	beginDate: Firebase.ServerValue.TIMESTAMP,
	rate: rate
})

});

dataRef.on('child_added', function (childsnapshot){
        $('#employeeName').html(childsnapshot.val().name);
        $('#role').html(childsnapshot.val().position);
        $('#startDate').html(childsnapshot.val().beginDate);
        $('#monthlyRate').html(childsnapshot.val().rate);
        });

*/