/* eslint-disable no-console */
import YouTube from 'youtube-node';
import dotenv from 'dotenv';

dotenv.config();

const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_API_KEY);

console.log(process.env.YOUTUBE_API_KEY);

const searchVideo = (req, res) => {
  const searchQuery = req.body.query;
  const numberOfVideos = req.body.number || 1;
  youTube.search(searchQuery, numberOfVideos, (error, result) => {
    if (error) {
      console.log(error);
    }
    console.log('result from youtube is: ', result);
    const videoId = 'https://www.youtube.com/embed/'.concat(result.items[0].id.videoId).concat('?autoplay=1');
    console.log('result from youtube is: ', videoId);
    res.send(videoId);
  });
};

export default { searchVideo };
