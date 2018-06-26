$( document ).ready(function() {
	// Create an array of strings and save it to a variable called `topics`.
	var topics = ["film noir", "musicals","betty davis", "cary grant", "frank sinatra", "alfred hitchcock", "Snoopy"];
	
	// Creating Functions & Methods
	
	// Function that displays all gif buttons
	function displayGifButtons(){

		// erasing anything in this div id so that it doesnt duplicate the results
		$("#gifButtonsView").empty(); 
		for (var i = 0; i < topics.length; i++){
			var gifButton = $("<button>");
			gifButton.addClass("topic");
			gifButton.addClass("btn btn-outline-secondary")
			gifButton.attr("data-name", topics[i]);
			gifButton.text(topics[i]);
			$("#gifButtonsView").append(gifButton);
		}
	}
	// Function to add a new topic button by user
	function addNewButton(){
		$("#addGif").on("click", function(){
		var topic = $("#topic-input").val().trim();
		if (topic == ""){

		// added so user cannot add a blank button
		  return false; 
		}
		topics.push(topic);
	
		displayGifButtons();
		return false;
		});
	}
	// Function that displays all of the gifs
	function displayGifs(){
		var topic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=2nL14eXC6EbDFnaTzU5cPer5r7GaxUCl&limit=10";		

		// displays the constructed url
		console.log(queryURL); 
		$.ajax({
			url: queryURL,
			method: 'GET'
		})
		.done(function(response) {

			// console test to make sure something returns
			console.log(response); 

			// erasing anything in this div id so that it doesnt keep any from the previous click
			$("#gifsView").empty(); 

			//shows results of gifs
			var results = response.data; 
			if (results == ""){
			  alert("There isn't a gif for this selected button");
			}
			for (var i=0; i<results.length; i++){
	
				//div for the gifs to go inside
				var gifDiv = $("<div>"); 
				gifDiv.addClass("gifDiv");
				// pulling rating of gif
				var gifRating = $("<p>").text("Rating: " + results[i].rating);
				gifDiv.append(gifRating);
				// pulling gif
				var gifImage = $("<img>");

				// still image stored into src of image
				gifImage.attr("src", results[i].images.fixed_height_small_still.url); 

				// still image stored into src of image
				gifImage.attr("data-still",results[i].images.fixed_height_small_still.url);

				// animated image stored into src of image
				gifImage.attr("data-animate",results[i].images.fixed_height_small.url); 

				// set the image state stored into src of image
				gifImage.attr("data-state", "still"); 
				gifImage.addClass("image");

				// pulling still image of gif
				gifDiv.append(gifImage);


				// adding div of gifs to gifsView div
				$("#gifsView").prepend(gifDiv);
			}
		});
	}
	// Calling Functions & Methods

	// displays list of topics already created	
	displayGifButtons(); 
	addNewButton();

	// Document Event Listeners
	$(document).on("click", ".topic", displayGifs);
	$(document).on("click", ".image", function(){
		var state = $(this).attr('data-state');
		if ( state == 'still'){
			$(this).attr('src', $(this).data('animate'));
			$(this).attr('data-state', 'animate');
		}else{
			$(this).attr('src', $(this).data('still'));
			$(this).attr('data-state', 'still');
		}
	});
});
	