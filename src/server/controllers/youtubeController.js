import request from 'request';
import YouTube from 'youtube-node';
import dotenv from 'dotenv';

dotenv.config();

const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_API_KEY);

const searchVideo = (req, res) => {
  const searchQuery = req.body.query;
  const numberOfVideos = req.body.number || 1;
  youTube.search(searchQuery, numberOfVideos, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(JSON.stringify(result));
  });

};

export default { searchVideo };
