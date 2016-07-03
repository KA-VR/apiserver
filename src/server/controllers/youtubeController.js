/* eslint-disable no-console */
import YouTube from 'youtube-node';
import dotenv from 'dotenv';

dotenv.config();

const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_API_KEY);

console.log(process.env.YOUTUBE_API_KEY);

const searchVideo = (req, res) => {
  const searchQuery = req.body.query;
  const numberOfVideos = req.body.number || 5;
  youTube.search(searchQuery, numberOfVideos, (error, result) => {
    if (error) {
      console.log(error);
    }
    console.log('result from youtube is: ', result);
    let videoId;
    for (let i = 0; i < result.items.length; i++) {
      if (result.items[i].id.videoId !== undefined) {
        videoId = result.items[i].id.videoId;
        break;
      }
    }
    const videoUrl = 'https://www.youtube.com/embed/'.concat(videoId)
      .concat('?version=3&enablejsapi=1&autoplay=1');
    console.log('result from youtube is: ', videoUrl);
    res.send(videoUrl);
  });
};

export default { searchVideo };
