// /* eslint-disable no-console */
// import Promise from 'bluebird';
// import soundcloud from 'node-soundcloud';
// const SC = Promise.promisifyAll(soundcloud);
// // import $ from 'jquery';

// SC.init({
//   client_id: '8e6b3901da7e06717e113fa73481eecf',
// });

// // const playTrack = (track) => {
// //   $.get(`http://api.soundcloud.com/tracks/${track.id}.json${this.client_id}`, () => {
// //     const src = `http://api.soundcloud.com/tracks/${track.id}/stream?client_id=${this.CLIENT_ID}`;

// //     $('#audio-player').attr('src', src);
// //     $('#song-information').text(track.title);
// //     $('#sc-link').attr('href', track.permalink_url);
// //   });
// // };

// const findUsersFavorites = (username) => {
//   SC.getAsync(`/users/${username}/favorites`)
//     .then(list => {
//       console.log('favorites:', list);
//     });
// };

// const findUsersPlaylist = (username) => {
//   SC.getAsync(`/users/${username}/playlists`)
//     .then(list => {
//       console.log('playlists:', list);
//     });
// };

// const searchQuery = (req, res) => {
//   // console.log(req.body.query);
//   // SC.getAsync('/tracks', {
//   //   q: req.body.query,
//   // })
//   // .then(tracks => {
//   //   console.log('stuff', tracks);
//   //   tracks.forEach(track => {
//   //     console.log('searchQuery results', track);
//   //     // playTrack(track);
//   //     // this.state.playList[track.title] = track;
//   //   });
//   // })
//   // .catch(err => {
//   //   console.log(err);
//   // });

//   SC.getAsync('/tracks', (err, tracks) => {
//     if (err) {
//       console.log(err);
//     } else {
//       tracks.forEach(track => {
//         console.log('searchQuery results', track);
//         // playTrack(track);
//         // this.state.playList[track.title] = track;
//       });
//       res.send('hi.');
//     }
//   });
// };

// const searchGenre = (req, res) => {
//   SC.getAsync('/tracks', {
//     genres: req.body.query,
//   }).then(tracks => {
//     tracks.forEach(track => {
//       console.log('searchGenre results', track);
//       this.state.playList[track.title] = track;
//     });
//   });
// };

// export default {
//   // initialize,
//   // playTrack,
//   findUsersFavorites,
//   findUsersPlaylist,
//   searchQuery,
//   searchGenre,
// };
