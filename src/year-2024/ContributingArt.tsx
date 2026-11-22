import { Article } from "../components";
export function ContributingArt() {
  return (
    <Article
      articleId="contributing-art"
      heading={
        <>
          See <strong>Your</strong> Art Here
        </>
      }
    >
      <p>If you have artworks you want to see on display or sale in association with BAPF then
        please contact <a href="mailto:grahamabbottphoto@gmail.com">Graham Abbott</a>&nbsp;
        with a short bio and some pictures (of yourself and the artworks). We would
        then promote these artworks on the website and social media.
       </p>
      <p> Artworks can be physically sent for display at the festival or just promoted
        digitally as part of our social media campaign.
      </p>
      <p>
        No fees are charged for entering your artworks to the exhibition and no
        costs are charged for wrapping and transporting the artworks back any of
        our convenient collection points in Cape Town, Johannesburg and Port
        Elizabeth.{" "}
      </p>
      <p>
        Photographers pay 20% of the sale price of all artworks sold at the
        Barrydale Analog Photo Festival to support the running costs of hosting
        the festival.
      </p>
      <p>
        Thank you for your contribution to making the Analog Festival a such a
        unique exhibition and experience. Your contribution is what helps us to
        keep the festival running. We look forward to representing you again at
        next year's BAPF.
      </p>
    </Article>
  );
}
