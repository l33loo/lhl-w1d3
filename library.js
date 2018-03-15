var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// console.log(library.playlists.p02.tracks);


// FUNCTIONS TO IMPLEMENT:


// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

    // Loop through the playlists.
    Object.keys(library.playlists).map(function(objectKey) {

      var value = library.playlists[objectKey];
      var playlist = value.id + ": " + value.name + " - "
        + value.tracks.length + " tracks";
      console.log(playlist);
    });
}

//printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  Object.keys(library.tracks).map(function(objectKey) {
    var trackPath = library.tracks[objectKey];
    var trackPath = trackPath.id + ": " + trackPath.name + " by "
      + trackPath.artist + " (" + trackPath.album + ")";
    console.log(trackPath);
  });
}

// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var plPath = library.playlists[playlistId];
  var playlist = plPath.id + ": " + plPath.name + " - "
    + plPath.tracks.length + " tracks";
  console.log(playlist);
  for (var i = 0; i < plPath.tracks.length; i++) {
    let trackPath = library.tracks[plPath.tracks[i]];
    var track = trackPath.id + ": " + trackPath.name + " by "
      + trackPath.artist + " (" + trackPath.album + ")";
    console.log(track);
  }
}

//printPlaylist("p02");


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var trackPath = library.tracks[trackId];
  var plPath = library.playlists[playlistId];
    plPath.tracks.push(trackPath.id);
  return plPath.tracks;
}

//console.log(addTrackToPlaylist("t01", "p02"));


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// console.log(uid());


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = "t" + uid().toString();
  var trackPath = library.tracks;
  var newTrack = new Object ({
    id: newId,
    name: name,
    artist: artist,
    album: album
  });
  trackPath[newId] = newTrack;
  return trackPath;
};

// console.log(addTrack("coding", "lila", "bootcamp"));


// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = "p" + uid().toString();
  var playlistPath = library.playlists;
  var newPlaylist = new Object ({
    id: newId,
    name: name,
    tracks: []
  });
  playlistPath[newId] = newPlaylist;
  return playlistPath;
};

console.log(addPlaylist("The Summit"));


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}