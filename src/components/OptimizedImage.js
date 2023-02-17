import { Blurhash } from "react-blurhash"
import { useState } from "react"

import { LazyLoadImage } from "react-lazy-load-image-component";

function OptimizedImage({ imgpath, blurhash }) {
  const [loaded, setLoaded] = useState(false);
  const [loadStarted, setLoadedStarted] = useState(false);

  return (
    <>
        {
        !loaded && (
            <Blurhash
            hash={blurhash}
            width='100%'
            height='100%'
            />
        )
        }
        {/* <img 
        className="img"
        // height="100%" width="100%"  
        src={imgpath}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? 'block' : 'none' }}
        /> */}
        <LazyLoadImage className={`img ${loaded ? '' : 'img-hidden'}`} afterLoad={() => setLoaded(true)} src={imgpath} width='100%' height='100%' effect='blur'/>
        
    </>
  );
}

export default OptimizedImage;
