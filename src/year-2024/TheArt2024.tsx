import { IMAGES } from "../images";

import { HeroQuote, Article, BapfImg } from "../components";
export function TheArt2024Masonry() {
  return (
    <div className="TheArt__masonry">
      <main className="TheArt__m TheArt__row1">
        <HeroQuote>
          The <strong>Art</strong>
        </HeroQuote>
        <p className="TheArt__hideonmobile">
          The Festival has on display some of the very best photographic pieces
          from South Africa’s highly talented analog photographers.
        </p>

        <p className="TheArt__hideonmobile">
          These distinct and unique artworks capture and retain rare glimpses
          into our collective cultural history and hold boundless feeling and
          emotion that more modern means of photography can no longer adequately
          capture.
        </p>
      </main>
      <BapfImg
        imageInfo={IMAGES.Art1Square}
        className="TheArt__l TheArt__row1"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art2Square}
        className="TheArt__r TheArt__row1"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art3Square}
        className="TheArt__l TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art4Square}
        className="TheArt__m TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art5Square}
        className="TheArt__r TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art6Square}
        className="TheArt__l TheArt__row3"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art7Square}
        className="TheArt__m TheArt__row3"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art8Square}
        className="TheArt__r TheArt__row3"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art9Square}
        className="TheArt__l TheArt__row4"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art10Square}
        className="TheArt__m TheArt__row4"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Art11Square}
        className="TheArt__r TheArt__row4"
        lightboxOnClick
      />
    </div>
  );
}

export function TheArt2024() {
  return (
    <Article
      articleId="the-art"
      heading={
        <>
          The <strong>Art</strong>
        </>
      }
      hideHeading
    >
      <TheArt2024Masonry />
      {/* 
      
      ROY ZETISKY
      
      */}
      <h3 className="BapfHiddenHeading">
        Showing 10 artworks by <strong>Roy Zetisky</strong>
      </h3>
      <HeroQuote className="HeroQuote__long">
        <p>
          Showing 10 artworks by <strong>Roy Zetisky</strong>
          <br />
          From the <strong>darkroom</strong> that became{" "}
          <strong>Gallery F</strong>
        </p>
      </HeroQuote>
      <BapfImg
        className="TheArt__RoyZetiskyHeroPic"
        imageInfo={IMAGES.RoyArt1Crop}
      />
      <div className="TheArt__Roy">
        <BapfImg
          className="TheArt__Roy__l"
          imageInfo={IMAGES.RoyArt4}
          lightboxOnClick
        />
        <p>
          After studying photography and film at the Brooks institute in
          California in the early 80’s, I returned to South Africa and moved
          down to Cape Town and set up a photographic studio in shortmarket
          street. This is where I operated from for years as a fashion
          photographer commercially, while at the same time pursuing one of my
          passions for black and white documentary photography.
        </p>
        <BapfImg
          className="TheArt__Roy__r"
          imageInfo={IMAGES.RoyArt2}
          lightboxOnClick
        />
        <BapfImg
          className="TheArt__Roy__l"
          imageInfo={IMAGES.RoyArt3}
          lightboxOnClick
        />
        <p>
          I used to roam the streets of the western cape capturing moments of
          social life in places where people congregated, like the old Cape
          Corner cafés. I loved going to small towns like Pniel, Malmesbury and
          Waenhuiskrans and capturing moments of interesting social life. I used
          to spend hours in the darkroom that I had set up in my shortmarket
          street studio.{" "}
        </p>
        <BapfImg
          className="TheArt__Roy__r"
          imageInfo={IMAGES.RoyArt9}
          lightboxOnClick
        />
        <BapfImg
          className="TheArt__Roy__l"
          imageInfo={IMAGES.RoyArt5}
          lightboxOnClick
        />
        <p>
          My darkroom is surprisingly still in tact after all these years,
          because my old studio, after first housing my film production company,
          has since become the home of Gavin Furlonger’s Gallery F and he chose
          to keep the darkroom in place as a piece of history. We are in fact in
          discussions about reviving the darkroom because some new generation
          analogue lovers are keen to get their hands dirty.{" "}
        </p>
        <BapfImg
          className="TheArt__Roy__r"
          imageInfo={IMAGES.RoyArt6}
          lightboxOnClick
        />
        <BapfImg
          className="TheArt__Roy__l"
          imageInfo={IMAGES.RoyArt7}
          lightboxOnClick
        />
        <p>
          I am currently pursuing one of my other passions for wildlife
          photography and besides some of my old works featuring in the
          Barrydale Analogue Festival, I have a wildlife exhibition opening on
          the 15th December in Cape Town. I am grateful that Graham and his team
          have kept this important festival going and that Gavin and Graham
          invited me to participate. There is still nothing quite like the look
          analogue offers.
        </p>
        <BapfImg
          className="TheArt__Roy__r"
          imageInfo={IMAGES.RoyArt8}
          lightboxOnClick
        />
      </div>
      <HeroQuote className="HeroQuote__long">
        <p>
          They are <strong>more than just artworks</strong>, they are{" "}
          <strong>portals</strong> taking us deep into the{" "}
          <strong>scenes captured</strong> and immersing us in the world of the{" "}
          <strong>subjects they portray</strong>.
        </p>
      </HeroQuote>
      {/* 
      
      SEAN WILSON
      
      */}
      <h3 className="BapfHiddenHeading">
        <strong>Deluge of Origin</strong> by Sean Wilson
      </h3>
      <BapfImg
        imageInfo={IMAGES.DelugeoforiginPoster}
        className="TheArt__delugePoster"
      />
    </Article>
  );
}
