import { IMAGES } from "../images";
import { Article, BapfImg } from "../components";

export function BarrydaleArts2024() {
  return (
    <Article
      articleId="bapf-arts"
      heading={
        <>
          Barrydale <strong>ARTs</strong> Festival
        </>
      }
    >
      <p>
        This year our festival is part of the umbrella Barrydale ARTs Festival,
        which runs from 13 to 21 December 2024.
      </p>
      <p>
        Music and visual arts come together including a live performance by
        Heather Mac & The Intervention, screenings of short films by students of
        AFDA and SAE, and multiple exhibitions of photographic artworks through
        the town.
      </p>
      <BapfImg imageInfo={IMAGES.BapfArts2024Programme} />
    </Article>
  );
}
