import { IMAGES } from "../images";
import { Article, BapfImg } from "../components";

export function CommunityAndYouth2025() {
  return (
    <Article
      articleId="bapf-community-and-youth"
      heading={
        <>
          Community & <strong>Youth</strong> Engagement
        </>
      }
    >
      <p>
        This year, we’re proud to deepen our collaboration with 
        <strong>Visuality Photography School</strong> and <strong>Upskill Barrydale NPC</strong>, 
        empowering youth to document:
        <ul>
          <li>Local elders</li>
          <li>Khoi heritage and culture</li>
          <li>Community life and social stories</li>
        </ul>
      </p>
      <p>
        Music and visual arts come together including a live performance by
        Heather Mac & The Intervention, screenings of short films by students of
        AFDA and SAE, and multiple exhibitions of photographic artworks through
        the town.
      </p>
    </Article>
  );
}
