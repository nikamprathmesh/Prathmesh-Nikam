import React from 'react';
import { Helmet } from 'react-helmet';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
const ShareImage = ({ imageUrl }) => {
    const shareUrl = window.location.href; // Get the current page URL
  
    return (
      <div>
        {/* Meta tags for preview */}
        <img src={imageUrl} alt="Unable to load" />
        <Helmet>
          <meta property="og:title" content="My Image Title" />
          <meta property="og:description" content="Check out this awesome image!" />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>
  
        {/* Share buttons */}
        <FacebookShareButton url={imageUrl} quote="Check out this awesome image!">
          Share on Facebook
        </FacebookShareButton>
  
        <TwitterShareButton url={imageUrl} title="My Image Title">
          Share on Twitter
        </TwitterShareButton>
        <WhatsappShareButton url={imageUrl} title="My Image Title">
            Share on Whatsapp
        </WhatsappShareButton>
      </div>
    );
  };
export default ShareImage;