import { Article } from "../components";

export function TheSponsors2024() {
  return (
    <Article
      articleId="the-sponsors"
      heading={
        <>
          With thanks to <strong>our sponsors</strong>
        </>
      }
    >
      <ul>
        <li>
          <h3>Photo Hire</h3>
          <a href="https://photohire.co.za/">Visit Site →</a>
        </li>
        <li>
          <h3>Tothills</h3>
          <a href="http://tothills.co.za/">Visit Site →</a>
        </li>
        <li>
          <h3>The Studiobarn</h3>
          <a href="http://www.thestudiobarn.co.za/">Visit Site →</a>
        </li>
        <li>
          <h3>Gallery F</h3>
          <a href="http://www.galleryf.co.za/">Visit Site →</a>
        </li>
        <li>
          <h3>Fujifilm</h3>
          <a href="http://www.fujifilm.com/">Visit Site →</a>
        </li>
        <li>
          <h3>Cape Film Supply</h3>
          <a href="http://capefilmsupply.co.za/">Visit Site →</a>
        </li>
      </ul>
    </Article>
  );
}
