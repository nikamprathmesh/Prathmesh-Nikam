import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton , WhatsappShareButton} from 'react-share';

const SocialMediaShare = ({ imageUrl }) => {
  const shareUrl = 'https://picsum.photos/400/300'; // URL to share
  const title = 'Check out this image!'; // Title for the shared post

  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={title}>
        <button>Share on Facebook</button>
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <button>Share on Twitter</button>
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl} title={title} source={imageUrl}>
        <button>Share on LinkedIn</button>
      </LinkedinShareButton>

      <WhatsappShareButton url={imageUrl} source={imageUrl}>
        <button>Share on WhatsApp</button>
      </WhatsappShareButton>
    </div>
  );
};

export default SocialMediaShare;
