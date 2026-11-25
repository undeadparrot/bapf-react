import { IMAGES } from "../images";

import { HeroQuote, Article, BapfImg } from "../components";

function TheArt__Roy2025() {
  return (<>

      <h3 className="BapfHiddenHeading">
        Back in The Day by <strong>Roy Zetisky</strong>
      </h3>
      <HeroQuote className="HeroQuote__long">
        <p>
          Fashion and <strong>Hand Coloured</strong> Prints<br /> by <strong>Roy Zetisky</strong>
          {/* <br />
          from the <strong>darkroom</strong> <br />that became{" "}
          <strong>Gallery F</strong> */}
        </p>
      </HeroQuote>
      <BapfImg
        className="TheArt__RoyZetiskyHeroPic"
        imageInfo={IMAGES.Bapf2025ArtRoyZetiskyLadywithtubeCitylatecover}
      />
      
      <div className="TheArt__Roy">
        <BapfImg
          className="TheArt__Roy__l"
          imageInfo={IMAGES.Bapf2025ArtRoyZetiskyCityLateCoverBw}
          lightboxOnClick
        />
        <p>
          <blockquote>When I came back from studying film and photography at Brooks in the US
           in 1983 I brought back a full set of Marshall's hand coloring tubes with
            me which you couldn't get in SA, so I had the opportunity to hand color
            with a range of colors that nobody else had.</blockquote>
        </p>
        <BapfImg
          className="TheArt__Roy__r"
          imageInfo={IMAGES.Bapf2025ArtRoyZetiskyCityLateCoverColored}
          lightboxOnClick
        />
        <BapfImg
          className="TheArt__Roy__l"
          imageInfo={IMAGES.Bapf2025ArtRoyZetiskyLadywithtubeBw}
          lightboxOnClick
        />
        <p>
          <blockquote>My darkroom is surprisingly still in tact after all these years,
          because my old studio, after first housing my film production company,
          has since become the home of Gavin Furlonger’s Gallery F and he chose
          to keep the darkroom in place as a piece of history. </blockquote>
          <br/><br/>This year we are happy to announce that <strong>F-LAB</strong> has relaunched the Gallery F darkroom and is contributing new prints to this year's exhibition.{" "}
        </p>
        <BapfImg
          className="TheArt__Roy__r"
          imageInfo={IMAGES.Bapf2025RoyZetiskyLadyWithTubeJpeg}
          lightboxOnClick
        />
        <BapfImg
          className="TheArt__Roy__l"
          imageInfo={IMAGES.Bapf2025ArtRoyZetiskyLadyOnRockBw}
          lightboxOnClick
        />
        <p>
         See original prints, black and white and hand coloured, such as those to appear on the cover of magazines like <i>City Late</i>.
         <br/><br/>Roy will also be exhibiting some classic documentary works.
        </p>
        <BapfImg
          className="TheArt__Roy__r"
          imageInfo={IMAGES.Bapf2025ArtRoyZetiskyLadyOnRockTint}
          lightboxOnClick
        />
      </div></>)
}

function TheArt__Patrick2025() {
  return (<>
      <h3 className="BapfHiddenHeading">
        Patrick <strong>de Mervelec</strong>
      </h3>
      <HeroQuote className="HeroQuote__long">
        <p>
          Selected works from <br /> <strong>Nude Landscape</strong> and <br/><strong>My Pilgrimage with Johnny Clegg</strong> <br/> by <strong>Patrick de Mervelec</strong>
        </p>
      </HeroQuote>
      <BapfImg
        className="TheArt__Patrick2025__hero"
        imageInfo={IMAGES.Bapf2025ArtPatrickdemervelacNude1}
        lightboxOnClick
      />
        <div className="TheArt__Patrick2025__others">
        <BapfImg
          imageInfo={IMAGES.Bapf2025ArtPatrickdemervelacStreet}
          lightboxOnClick
        />
        <BapfImg 
          imageInfo={IMAGES.Bapf2025ArtPatrickdemervelacMusic}
          lightboxOnClick
        />
        </div></>)
}

export function TheArt2025Masonry() {
  return (
    <div className="TheArt__masonry TheArt__masonry--2026">
      <HeroQuote>
        The <strong>Art</strong>
      </HeroQuote>
      <main >
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
        imageInfo={IMAGES.Bapf2025ArtHermanVanWykBoatCrop}
        className="TheArt__l TheArt__row1"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Bapf2025ArtRodgerBoschDanceForAll}
        className="TheArt__r TheArt__row1"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Bapf2025ArtHermanVanWykReflection}
        className="TheArt__l TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Bapf2025ArtRoyZetiskyModel3}
        className="TheArt__m TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Bapf2025ArtHermanVanWykDoorway}
        className="TheArt__r TheArt__row2"
        lightboxOnClick
      />
      <BapfImg
        imageInfo={IMAGES.Bapf2025ArtRoyZetiskyDocumentary1}
        className="TheArt__l TheArt__row3"
        lightboxOnClick
      />
      {/* <BapfImg
        imageInfo={IMAGES.Bapf2025ArtHermanVanWykCar}
        className="TheArt__m TheArt__row3"
        lightboxOnClick
      /> */}
      <BapfImg
        imageInfo={IMAGES.Bapf2025ArtRoyZetiskyDocumentary4}
        className="TheArt__r TheArt__row3"
        lightboxOnClick
      />
    </div>
  );
}


export function TheArt2025() {
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
      <TheArt2025Masonry />

      {/* 
      
      ROY ZETISKY
      
      */}
      <TheArt__Roy2025/>
      <br/>
      <TheArt__Patrick2025/>
      <br/>
      <br/>
      <br/>
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
