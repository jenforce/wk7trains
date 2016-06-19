$(document).ready(function() {
	var dataRef = new Firebase('https://popping-heat-7384.firebaseio.com/');
	var trainName = '';
	var destination = '';
	var trainStart = '';
	var frequency = '';
	console.log(trainName);
	$('.btn').click(function(event) {
		event.preventDefault()
		trainName = $('#docTrain').val().trim();
		destination = $('#docDestination').val().trim();
		trainStart = $('#docStart').val().trim();
		frequency = $('#docFrequency').val().trim();
		dataRef.push({
			trainName: trainName,
			destination: destination,
			trainStart: trainStart,
			frequency: frequency
		})
	});
	dataRef.on("child_added", function(childSnapshot) {
		var train1Name = childSnapshot.val().trainName;
		var train1Dest = childSnapshot.val().destination;
		var train1Start = childSnapshot.val().trainStart;
		var train1Freq = childSnapshot.val().frequency;
		var tFrequency = train1Freq;
		var firstTime = train1Start;
		var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
		console.log(firstTimeConverted);
		var currentTime = moment();
		console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);
		var tRemainder = diffTime % tFrequency;
		console.log(tRemainder);
		var tMinutesTillTrain = tFrequency - tRemainder;
		console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
		// Next Train
		var nextTrain = moment().add(tMinutesTillTrain, "minutes")
		var ArrTime = moment(nextTrain).format("hh:mm")
		$("tbody").append("<tr><td>" + train1Name + "</td><td>" + train1Dest +
			"</td><td>" + train1Freq + "</td><td>" + ArrTime + "</td><td>" +
			tMinutesTillTrain + "</td></tr>");
	});
}); //end - $(document).ready(function()