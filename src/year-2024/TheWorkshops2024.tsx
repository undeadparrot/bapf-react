import { IMAGES } from "../images";
import { Article, BapfImg, SmallBapfImg } from "../components";

export function TheWorkshops2024() {
  return (
    <Article
      articleId="the-workshops"
      heading={
        <>
          The <strong>Workshops</strong>
        </>
      }
    >
      {/* <h3>
            <strong>Wetplate</strong> Workshop
          </h3>
          <BapfImg imageInfo={IMAGES.WetplateWorkshop1} lightboxOnClick />
          <p>
            Graham Abbott previously hosted the Wetplate workshop over two days
            at The Studio Barn in Barrydale. The history and theory of wetplate
            photography and two other films: “Silver and Light” and “Remains of
            the Day” were shown on day one. On day two the students had a chance
            to photograph each other, creating a wetplate glass negative and
            making a positive cyanotype print off their negatives.
          </p>
          <h3>
            <strong>Analog</strong> Workshop
          </h3>
          <BapfImg imageInfo={IMAGES.AnalogWorkshop1} lightboxOnClick />
          <p>
            Graham and David Chamberlain hosted the analog photography darkroom
            processing and printing workshop at the Studio Barn. The workshop
            guided students through the black & white process of 35mm and 4×5“
            film and the printing of 35 and medium format negatives onto fiber
            based photographic paper.
          </p> */}
      <h3>
        <strong>Wetplate</strong> Workshop
      </h3>
      <BapfImg imageInfo={IMAGES.WetplatePoster2024} lightboxOnClick />
      <div>
        Sean Wilson will be demonstrating the historical photographic process
        known as 'wetplate' and teaching the basics of shooting and processing a
        picture using this exciting but challenging medium. Sean is an expert in
        the field and is a wetplate portraitist by trade.
        <p />
        <p>
          Wetplate is a fast-paced but slow-to-expose process where glass or
          metal is coated with collodion then dipped into silver nitrate to make
          it sensitive to light. Within as little as a minute the plate will be
          ready for use and must be shot and processed immediately before drying
          completely. Unusual to this process is that the results are a positive
          image on glass which can be displayed as-is without printing.
        </p>
        <p>
          Workshops will cost R3500 per person with limited seats available.
          Large format camera will be provided, all materials and workshop
          manual included.
          <br />
          To be held at the Barrydale Info-hub Tourism Centre, 1 Riebeek Street
          on Sunday 15 December from 9AM to 4PM
        </p>
        <p>
          Contact Sean Wilson by phone or WhatsApp on{" "}
          <strong>0722920630</strong> .
        </p>
      </div>
      <h3>
        Wetplate <strong>Private Portrait</strong> Sessions
      </h3>
      <BapfImg imageInfo={IMAGES.WetplatePortraitsPoster2024} lightboxOnClick />
      <div>
        Sean Wilson will be taking portraits on two days this festival using his
        signature wetplate collodion technique.
        <p />
        <p>
          Wetplate is a fast-paced but slow-to-expose process where glass or
          metal is coated with collodion then dipped into silver nitrate to make
          it sensitive to light. Within as little as a minute the plate will be
          ready for use and must be shot and processed immediately before drying
          completely. Unusual to this process is that the results are a positive
          image on glass which can be displayed as-is without printing.
        </p>
        <p>
          Workshops will cost R2500 for a 2 hour session using between 5 to 7
          glass plates. <br />
          To be held at the Barrydale Info-hub Tourism Centre, 1 Riebeek Street
          on Tuesday 17 December and Thursday 19 December from 9AM to 4PM
        </p>
        <p>
          Contact Sean Wilson by phone or WhatsApp on{" "}
          <strong>0722920630</strong> .
        </p>
      </div>
      <h3>
        <strong>Dryplate</strong> Workshop
      </h3>
      <BapfImg imageInfo={IMAGES.DryplatePoster2024} lightboxOnClick />
      <div>
        <p>
          Nikolai Nielsen will be demonstrating the historical dryplate coating
          process, and teaching a workshop on how to shoot, process and print
          your dryplate. Either glass plates or acetate film will be coated with
          a photographic emulsion made to his own recipe. Experience photography
          like it's the 1880s!
        </p>

        <p>
          Dryplates are an early ancestor of the film we use today, where
          gelatin is made sensitive to light and coated onto glass plates, metal
          or paper, then left to dry before use. The coated plates can be
          exposed whenever convenient and processed as we do today. The
          resulting negative can then be printed.
        </p>

        <p>
          All equipment will be provided, but you are welcome to bring your own
          camera and its format may be accommodated.
        </p>
        <p>
          Contact Nikolai by phone or WhatsApp on <strong>0641404128</strong> .
        </p>

        <div className="WorkshopExtraPhotos">
          <ul>
            <li>
              <SmallBapfImg
                imageInfo={IMAGES.nikolaiPours}
                showCaption
                lightboxOnClick
              />
            </li>
            <li>
              <SmallBapfImg
                imageInfo={IMAGES.nikolaiChemicals}
                showCaption
                lightboxOnClick
              />
            </li>
            <li>
              <SmallBapfImg
                imageInfo={IMAGES.nikolaiDemo}
                showCaption
                lightboxOnClick
              />
            </li>
            <li>
              <SmallBapfImg
                imageInfo={IMAGES.nikolaiDryplateSample}
                showCaption
                lightboxOnClick
              />
            </li>
          </ul>
        </div>
      </div>
      <h3>
        <strong>X-Ray Reversal</strong> Workshop
      </h3>
      <BapfImg imageInfo={IMAGES.XrayPoster2024} lightboxOnClick />
      <div>
        <p>
          Shoot and process x-ray sheet film into positive slides. This tricky
          process is made easier by newer and safer chemistry, and you'll have a
          large format slide to show for it.
        </p>

        <p>
          The images will be shot on x-ray sheet film, which is orthochromatic
          and roughly 50 ISO. Large format view cameras will be used, and you
          will get a brief tutorial on how to use these challenging technical
          cameras.
        </p>

        <p>
          Kits, for home processing of black-and-white film into positives, will
          be available for purchase at the event and afterwards. Contact us for
          more information on which films work best for reversal.
        </p>

        <p>
          All equipment will be provided, but you are welcome to bring your own
          camera and if it can use film holders of any size up to 5x7.
        </p>
        <p>
          Contact Nikolai by phone or WhatsApp on <strong>0641404128</strong> .
        </p>

        <div className="WorkshopExtraPhotos">
          <ul></ul>
        </div>
      </div>
    </Article>
  );
}
