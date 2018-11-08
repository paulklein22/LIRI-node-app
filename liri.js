////////////////////////////////
/////// ES6 THIS SHIT
///////////////////////////////



// Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

// Add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys");
var spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

//grabbing user input variables
var input = process.argv;

//grabs user command for movies, spotify or random
var command = input[2];

/////////// Bands In Town ///////////////////////////////////////////////////////////////////////////////////

// NODE REQUEST: node liri.js concert-this

// This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
// * Name of the venue
// * Venue location
// * Date of the Event (use moment to format this as "MM/DD/YYYY")

/////////// Spotify /////////////////////////////////////////////////////////////////////////////////////////

// NODE REQUEST: node liri.js spotify-this-song
// If the user doesn't type in a song, the program will default to "The Sign" by Ace of Base.

/////////// OMDB_Request ////////////////////////////////////////////////////////////////////////////////////

// NODE REQUEST: node liri.js movie-this '<movie name here>'
// If the user doesn't type in a movie, the program will default to the movie 'Mr. Nobody.'

var queryURL =
  "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

request(queryURL, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover the following:
    console.log("Title: " + JSON.parse(body).imdbRating);
    console.log("Release: " + JSON.parse(body).imdbRating);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).imdbRating);
    console.log("Language: " + JSON.parse(body).imdbRating);
    console.log("Plot: " + JSON.parse(body).imdbRating);
    console.log("Actors: " + JSON.parse(body).imdbRating);
  }
});

/////////// Do What it Says /////////////////////////////////////////////////////////////////////////////////

// NODE REQUEST: node liri.js do-what-it-says

/////////// WeatherNPM //////////////////////////////////////////////////////////////////////////////////////

// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");

// Then we use the package to search for the weather at a location
weather.find({ search: "Anchorage, AK", degreeType: "F" }, function(
  err,
  result
) {
  // If there is an error log it.
  if (err) {
    console.log(err);
  }

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(result, null, 2));
});
