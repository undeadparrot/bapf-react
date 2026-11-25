import { IMAGES } from "../images";
import { Article, BapfImg, SmallBapfImg } from "../components";

export function TheVenue2024() {
  return (
    <Article
      articleId="the-venue"
      heading={
        <>
          The <strong>Venue</strong>
        </>
      }
    >
      <aside className="TheVenueSidePictures">
        <BapfImg imageInfo={IMAGES.Karoolkie1} />
      </aside>
      <main>
        <p>
          The Karooljie Kelder is a Beautiful Wine Celler in the center of
          Barrydale designed by the famous Architect Etiam Bruwer and built by
          the owner Gerald Phillips.
        </p>

        <p>
          Gerald has graciously allowed the BAPF Festival to be held there every
          Dec for the 10 days.
        </p>

        <p>
          The Gallery space had two 30 meter long walls for hanging artworks and
          provides an open lower part for presentations, film projections and
          discussions.
        </p>

        <p>
          During the festival, the large doors allow access for accessing the
          space for props and vehicles as part of the photo shoot workshops
          being held.
        </p>

        <p>
          The space is also a rental venue for functions, please
          graham@bapf.co.za for inquiries.
        </p>
      </main>
      <aside className="TheVenueOtherPictures">
        {/* <p>We’ve played host to works by some of the finest photographic artists</p> */}
        <ul>
          <li>
            <SmallBapfImg imageInfo={IMAGES.Karoolkie3} lightboxOnClick />
          </li>
          <li>
            <SmallBapfImg imageInfo={IMAGES.Karoolkie4} lightboxOnClick />
          </li>
          <li>
            <SmallBapfImg imageInfo={IMAGES.Karoolkie5} lightboxOnClick />
          </li>
          <li>
            <SmallBapfImg imageInfo={IMAGES.Karoolkie2} lightboxOnClick />
          </li>
        </ul>
      </aside>
    </Article>
  );
}
