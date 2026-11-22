import { Article } from "../components";

export function TheSponsors2025() {
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
          <p>Logistics and art drop-off in Cape Town since 2020</p>
          <a href="https://photohire.co.za/">Visit Site →</a>
        </li>
        <li>
          <h3>Tothills</h3>
          <p>Film, paper and chemistry for workshops</p>
          <a href="http://tothills.co.za/">Visit Site →</a>
        </li>
        <li>
          <h3>Gallery F</h3>
          <p>Gavin & Sean Furlonger ongoing commitment to analog</p>
          <a href="http://www.galleryf.co.za/">Visit Site →</a>
        </li>
        <li>
          <h3>Fujifilm</h3>
          <p>4 years of instant film magic for documentation and new exhibitions</p>
          <a href="http://www.fujifilm.com/">Visit Site →</a>
        </li>
        <li>
          <h3>Orms Cape Town</h3>
          <p>Exhibition support and B+W lab</p>
          <a href="http://www.fujifilm.com/">Visit Site →</a>
        </li>
        <li>
          <h3>Cape Film Supply</h3>
          <p>Film and 5x7 photographic enlarger donation</p>
          <a href="http://capefilmsupply.co.za/">Visit Site →</a>
        </li>
      </ul>
    </Article>
  );
}
