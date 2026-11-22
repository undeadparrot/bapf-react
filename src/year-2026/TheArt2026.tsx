import { IMAGES } from "../images";

import { HeroQuote, Article, BapfImg } from "../components";

function TheArt__Genevieve2026() {
  return (
    <>
      <h3 className="BapfHiddenHeading">
        Genevieve <strong>Maynard</strong>
      </h3>
      <HeroQuote className="HeroQuote__long">
        <p>
          <strong>Alternative Process</strong> prints by <br />
          <strong>Genevieve Maynard</strong> from <br />
          <strong>Cyanotypes</strong> to <strong>Van Dyke Brown</strong>
        </p>
      </HeroQuote>
      <div className="TheArt__Genevieve2026">
        <BapfImg
          className="TheArt__Genevieve2026__hero"
          imageInfo={IMAGES.bapf2026ArtGenevieveGirasoleCyano}
          lightboxOnClick
        />
        <br />
        <div className="TheArt__Genevieve2026__others">
          <BapfImg
            imageInfo={IMAGES.bapf2026ArtGenevieveSanitanapoliSaltprint}
            lightboxOnClick
          />
          <BapfImg
            imageInfo={IMAGES.bapf2026ArtGenevieveBolognaVdb}
            lightboxOnClick
          />
        </div>
      </div>
    </>
  );
}

function TheArt__Ajay2026() {
  return (
    <>
      <h3 className="BapfHiddenHeading">
        Ajay <strong>Lalu</strong>
      </h3>
      <HeroQuote className="HeroQuote__long">
        <p>
          An <strong>Analogue</strong> Obsession <br />
          in a <strong>Digital</strong> World
        </p>
      </HeroQuote>
      <div className="TheArt__Ajay2026">
        <BapfImg
          className="TheArt__Ajay2026__hero"
          imageInfo={IMAGES.bapf2026ArtAjay3}
          lightboxOnClick
        />
        <br />
        <div className="TheArt__Ajay2026__others">
          <BapfImg 
            imageInfo={IMAGES.bapf2026ArtAjay2}
            lightboxOnClick
          />
          <BapfImg  
            imageInfo={IMAGES.bapf2026ArtAjay4}
            lightboxOnClick
          />
        </div>
      </div>
    </>
  );
}

export function TheArt2026Masonry() {
  return (
    <div className="TheArt__masonry TheArt__masonry--2026">
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
        imageInfo={IMAGES.bapf2026ArtTony6}
        className="TheArt__l TheArt__row1"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.bapf2026ArtTony1Car}
        className="TheArt__r TheArt__row1"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.bapf2026ArtTony7}
        className="TheArt__l TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.bapf2026ArtAjay1}
        className="TheArt__m TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.bapf2026ArtTony8}
        className="TheArt__r TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.bapf2026ArtTony3}
        className="TheArt__l TheArt__row3"
        lightboxOnClick
      />
      {/* <BapfImg
        imageInfo={IMAGES.}
        className="TheArt__m TheArt__row3"
        lightboxOnClick
      /> */}
      <BapfImg
        imageInfo={IMAGES.bapf2026ArtTony2}
        className="TheArt__r TheArt__row3"
        lightboxOnClick
      />
    </div>
  );
}

export function TheArt2026() {
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
      <TheArt2026Masonry />

      {/* 
      
      GENEVIEVE
      
      */}
      <TheArt__Genevieve2026 />
      <br />
      <TheArt__Ajay2026 />
      <br />
      <br />
      <br />
      <HeroQuote className="HeroQuote__long">
        <p>
          They are <strong>more than just artworks</strong>, they are{" "}
          <strong>portals</strong> taking us deep into the{" "}
          <strong>scenes captured</strong> and immersing us in the world of the{" "}
          <strong>subjects they portray</strong>.
        </p>
      </HeroQuote>
    </Article>
  );
}
