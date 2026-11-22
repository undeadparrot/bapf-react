import { IMAGES } from "../images";
import { ARTISTS } from "../artists";
import { Article, SmallBapfImg, ArtistProfileWidget } from "../components";

export function TheArtists2026() {
  return (
    <Article
      articleId="the-artists"
      heading={
        <>
          The <strong>Artists</strong>
        </>
      }
    >
      <p>
        The Festival features some of South Africa’s, and the world’s, most
        beloved analog photographers known for their ability to capture and
        portray scenes that have inspired people across the globe.
      </p>

      <p>
        Many more highly skilled and creative artists will be exhibiting at the
        exhibition, many of whom are up and coming creatives making a name for
        themselves inside and outside of the photographic community.
      </p>
      <aside className="BapfOtherArtists">
        <p className="BapfArticle__intermission">
          We’ve played host to works by some of the finest photographic artists
        </p>
        <ul>
          <li>
            <SmallBapfImg
              imageInfo={IMAGES.PaulAlbertsSquare}
              showCaption
              lightboxOnClick
            />
          </li>
          <li>
            <SmallBapfImg
              imageInfo={IMAGES.GavinFurlongerSquare}
              showCaption
              lightboxOnClick
            />
          </li>
          <li>
            <SmallBapfImg
              imageInfo={IMAGES.JurgenSchadebergSquare}
              showCaption
              lightboxOnClick
            />
          </li>
          <li>
            <SmallBapfImg
              imageInfo={IMAGES.RogerBallenSquare}
              showCaption
              lightboxOnClick
            />
          </li>
          <li>
            <SmallBapfImg
              imageInfo={IMAGES.ObieSquare}
              showCaption
              lightboxOnClick
            />
          </li>
          <li>
            <SmallBapfImg
              imageInfo={IMAGES.BillyMonkSquare}
              showCaption
              lightboxOnClick
            />
          </li>
        </ul>
      </aside>
      <ArtistProfileWidget
        key={ARTISTS.ajayLalu.name}
        artist={ARTISTS.ajayLalu}
      />
      <ArtistProfileWidget
        key={ARTISTS.tonyMeintjes.name}
        artist={ARTISTS.tonyMeintjes}
      />
      <ArtistProfileWidget
        key={ARTISTS.genevieveMaynard.name}
        artist={ARTISTS.genevieveMaynard}
      />
      <ArtistProfileWidget
        key={ARTISTS.sean.name}
        artist={ARTISTS.sean}
      />
      {/* <ArtistProfileWidget 
        key={ARTISTS.Herman.name}
        artist={ARTISTS.Herman}
      /> */}
    </Article>
  );
}
