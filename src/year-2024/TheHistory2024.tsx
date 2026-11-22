import { IMAGES } from "../images";
import { Article, BapfImg } from "../components";
export function TheHistory2024() {
  return (
    <Article
      articleId="the-history"
      heading={
        <>
          The <strong>History</strong>
        </>
      }
    >
      <BapfImg imageInfo={IMAGES.History1} />
      <p>
        In 2020 when Covid ravaged Graham Abbott’s beloved Barrydale village, he
        set out to build a world-class analog photography festival to boost
        local tourism and celebrate a dying craft. The idea was formed jointly
        with old friend Johan Wilke, who sadly died before the first event. The
        festival now celebrates his memory.
      </p>
      <p>
        First calling on friends with old analog prints, Graham has expanded his
        ambition and created an annual event featuring photographers who hold
        their own on the international stage.
      </p>

      <p>
        The first Barrydale Analog Photography Festival in 2020 had the work of
        50 photographers on show, including David Goldblatt, Paul Weinberg,
        Johan Wilke, Coco van Oppens, Barney Edwards, Michael Meyersfeld, Rashid
        Lombard, Sean Wilson, Tim Hopwood, John Liebenberg, Herman van Wyk,
        Harry de Zitter, Brett Eloff, Rodger Bosch, Sean Furlonger, Dennis da
        Silva and Roger Ballen.
      </p>

      <p>
        In 2021 speakers and featured photographers included Josie Borain,
        Francki Burger, Phomolo Nzunga, Pierre Crocquet, Billy Monk and Ian
        McNaught Davis.
      </p>
    </Article>
  );
}
