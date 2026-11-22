import { ARTISTS } from "../artists";
import { Article, ArtistProfileWidget } from "../components";
export function TheSpeakers2024() {
  return (
    <Article
      articleId="the-speakers"
      heading={
        <>
          The <strong>Speakers</strong>
        </>
      }
    >
      <p className="BapfArticle__intermission">
        This year look forward to presentations by
      </p>

      <ArtistProfileWidget
        key={ARTISTS["gavin"].name}
        artist={ARTISTS["gavin"]}
      />
      <ArtistProfileWidget
        key={ARTISTS["carol"].name}
        artist={ARTISTS["carol"]}
      />
      <ArtistProfileWidget
        key={ARTISTS["sean"].name}
        artist={ARTISTS["sean"]}
      />

      <p className="BapfArticle__intermission">
        Some of our returning alumni from previous years include
      </p>
      <ArtistProfileWidget
        key={ARTISTS["luke"].name}
        artist={ARTISTS["luke"]}
      />
      <ArtistProfileWidget
        key={ARTISTS["nikolai"].name}
        artist={ARTISTS["nikolai"]}
      />
    </Article>
  );
}
