import videoData from '../model/data';

    const contentsController = {
        getVideo: (id)=>{
          const eachVideo = videoData.find(
            eachVideo => eachVideo.id.toLowerCase() === id.toLowerCase()
          );
          return eachVideo;
        }
      };

export default contentsController;
