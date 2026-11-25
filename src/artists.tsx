import { BapfImg } from "./components";
import { BapfImageInfo, IMAGES } from "./images";

export type ArtistProfileInfo = {
  name: string;
  description: string | ReactNode;
  imageSquare: BapfImageInfo;
  image2: BapfImageInfo;
};

export const ARTISTS: { [key: string]: ArtistProfileInfo } = {
  tonyMeintjes: {
    name: "Tony Meintjes",
    imageSquare: IMAGES.TonyMeintjesSquare,
    image2: IMAGES.TonyMeintjes,
    description: (
      <>
        <p>
          Tony Meintjes is a dedicated photographer and printer based in the
          coastal village of Kommetjie, Cape Town. Since 2005, Tony made a
          significant shift away from commercial photography to focus on inkjet
          printing and his personal work. This transition marked the beginning
          of a deep and evolving engagement with the craft of printing.
        </p>
        <p>
          Over the years, he has slowly expanded his practice beyond inkjet
          techniques to include photochemical and direct-to-plate processes. His
          commitment to these traditional and contemporary printing methods
          reflects his passion for preserving the integrity and rich history of
          photographic print.
        </p>
        <p>
          You can find out more about Tony on{" "}
          <a href="https://www.instagram.com/tonymeintjes/">Instagram</a> and
          get in contact about printing through{" "}
          <a href="https://slowprint.co.za/">his business</a>.
        </p>
      </>
    ),
  },
  ajayLalu: {
    name: "Ajay Lalu",
    imageSquare: IMAGES.AjayLaluSquare,
    image2: IMAGES.AjayLalu,
    description: (
      <>
        <p>
          Ajay Lalu is a Cape Town based photographer, visual artist and author
          of A Mountain Divides. A Chartered Accountant by profession, his
          documentary photography explores dignity, identity, belonging and the
          lives of people whose stories are too often overlooked. His work has
          been exhibited internationally, including in Italy, the United Kingdom
          and the United States.
        </p>
        <p>
          His return to analogue photography began four years ago at the
          Barrydale Analogue Photo Festival, where Graham Abbot inspired him to
          pick up film again. This talk is also a tribute to Graham, whose
          enthusiasm sparked a renewed passion that continues to shape Ajay’s
          photographic journey.
        </p>
        <p>
          In An Analogue Obsession in a Digital World, Ajay shares how that
          inspiration grew into an obsession with collecting and using cameras,
          taking them on journeys to Edinburgh and Germany. He explores why
          HOME, his long term documentary project on migration, memory and
          belonging, is deliberately photographed on Hasselblad 6×6 film, while
          Working Class, his exploration of labour and dignity, is photographed
          largely digitally to capture the fleeting moments of life on the
          street.
        </p>
        <p>
          Through personal stories and photographs, Ajay reflects on the people
          who inspire us, the cameras we become attached to, and how we choose
          to tell the stories that matter.
        </p>
        <p>
          You can keep up with Ajay on{" "}
          <a href="https://www.instagram.com/ajay_lalu_photography/">
            Instagram
          </a>{" "}
          and check out his photography on his{" "}
          <a href="https://www.lalu.co.za/">personal website</a>.
        </p>
      </>
    ),
  },
  genevieveMaynard: {
    name: "Genevieve Maynard",
    imageSquare: IMAGES.GenevieveMaynardSquare,
    image2: IMAGES.GenevieveMaynard,
    description: (
      <>
        <p>
          Genevieve attended Sydney College of the Arts in Australia before
          leaving to pursue a 25 year career in music composition, performance
          and production. In 2010 she leftto live in Johannesburg and has since
          been working in the medium of photography.
        </p>
        <p>
          From 2019 to 2022 she studied historical print processes with master
          printer Dennis Da Silva at the Alternative Print Workshop in
          Johannesburg.
        </p>
        <p>
          For BAPF 2025 we exhibited some exemplary cyanotypes from Genieve that
          drew much attention for their mastery of tonal reproduction as much as
          their subject matter.
        </p>
        <p>
          You can follow Genevieve on{" "}
          <a href="https://www.instagram.com/genmaynard/">Instagram</a> and find
          out more about her works on her{" "}
          <a href="https://www.genevievemaynard.com/">personal website</a>.
        </p>
      </>
    ),
  },
  gavin: {
    name: "Gavin Furlonger",
    imageSquare: IMAGES.GavinFurlongerSquare,
    image2: IMAGES.GavinFurlonger,
    description: (
      <>
        <p>
          Gavin passionately promotes South Africa Analogue Photography in
          London, NY and is just back from PARIS PHOTO FAIR 2024 sharing all his
          knowledge & experiences.
        </p>
        <p>
          Well known for his long-standing contribution to South Africa’s
          photographic community and one of it’s local heroes– embarked on a
          journey of unearthing and salvaging undiscovered and endangered bodies
          of photographic works some twenty years ago.
        </p>
        <p>
          With an increasing realization that there was an abundance of local
          photographers’ work being lost, more and more, as time moved along
          Furlonger created a shelter which he named as P.A.P.A’ ( Photographic
          Archival and Preservation Association ) – to act as a home to the lost
          collections.
        </p>
        <p>
          To bring continued public awareness, Gavin's{" "}
          <a href="https://galleryf.co.za/">Gallery F</a> decided to curate a
          second Chapter to showcase more of the precious images, always in B/W,
          that existed within the PAPA archives.
        </p>
      </>
    ),
  },
  carol: {
    name: "Carol Hardijzer",
    imageSquare: IMAGES.CarolSquare,
    image2: IMAGES.CarolSquare,
    description: (
      <>
        <p>
          Carol Hardijzer, a born and bred Pretorian, describes himself as a
          South African Photo Historian. Post his career as an Industrial
          Psychologist, his focus shifted to the constant search for historical
          South African photographs which he then curates in the Hardijzer
          Photographic Research Collection (HPRC). He researches and writes
          extensively on the topic, relying on the photographs in the HPRC to
          portray the history of South Africa.{" "}
        </p>
        <p>
          To date he has published some 88 articles on the topic. All his work
          is is available on his{" "}
          <a href="theheritageportal.co.za">personal website</a>.
        </p>
        <p>
          Carol has also established a vast Photographica collection (i.e.
          cameras, photographic advertising signs, magic lantern slides etc.),
          mainly from before 1940.
        </p>
      </>
    ),
  },
  AlastairMclachlan: {
    name: "Alastair McLachlan",
    imageSquare: IMAGES.alastairSquareJpeg,
    image2: IMAGES.alastairSquareJpeg,
    description: (
      <>
        <p>
          Alastair was born in Hammanskraal in 1974 and moved to Johannesburg in
          2000. Since graduating in fine art and drama he has been documenting
          fire and drive-ins from his Ford Capri, camera under the seat,
          collecting roots & shooting the high-veld.
        </p>
        <p>
          His current focus as a photographer remains with these two long term
          themed projects: The South African Drive-in story and portraits of the
          Johannesburg inner city, and he is in the process of compiling these
          works into books. At the heart both these projects are documentary in
          nature, preferring candid and un-staged observations, albeit from
          dynamic and unexpected perspectives. His juxtaposition of geometric
          elements, and subjective interpretations imbues his work with a sense
          of visual poetry, composed to create imaginative narrative experiences
          for the viewer. His works have been featured in numerous publications,
          shown in several group and solo exhibitions, as well as private and
          corporate collections, and been awarded both locally and
          internationally.
        </p>
        <p>Alastair will be presenting at BAPF for this first time in 2026.</p>
        <p>
          Find out more about Alastair on{" "}
          <a href="https://alastairmclachlan.com/bio">his website</a> and follow
          him on <a href="https://www.instagram.com/intermission/">Instagram</a>
          .
        </p>
      </>
    ),
  },
  sean: {
    name: "Sean Wilson",
    imageSquare: IMAGES.SeanWilsonSquare,
    image2: IMAGES.SeanWilsonSquare,
    description: (
      <>
        {/* <BapfImg
          imageInfo={IMAGES.seanWithViewCameraJpg}
          className="ArtistProfile__pic_right"
        /> */}
        <p>
          Sean Wilson is a Cape Town based photographer who works primarily, but
          not exclusively, with analogue photographic processes. Over the last
          two decades he has also worked in various genres of commercial
          photography. Recently he has been working with the Nineteenth Century
          process Wet Plate Collodion. His latest venture - Silverlight Cape
          Town - is a studio and darkroom space in The Bijou building in
          Observatory which offers Ambrotype Portraits and other Analogue
          Photography services.
        </p>
        <p>
          “My experience of the world is that it is fundamentally mysterious and
          I feel compelled to make photographs that attempt to reflect this. The
          photographs that come closest to satisfying me act as a salve or an
          antidote to the dissociation that sometimes haunts me as a result of
          traumas I’ve experienced. Through experimentation and the embracing of
          the Felix Culpa – Latin for ‘happy mistakes’ – of the processes that
          I’m drawn to, I hope to discover new ways of seeing and making sense
          of myself and my world.”
        </p>
        <p>
          Sean previously appeared at BAPF 2023 to present workshops introducing
          large format photography, and gave a talk about his journey to
          becoming a practitioner of wetplate photography - or as he says: 'the
          most inconvenient way of taking a picture'.
          <em>
            This year Sean will be demonstrating and instructing a workshop on
            the historical wetplate photography process.
          </em>
        </p>
        <p>
          Visit Sean's <a href="https://www.seanwilson.co.za/">website</a> for
          more information.
        </p>
      </>
    ),
  },
  dennis: {
    name: "Dennis da Silva",
    imageSquare: IMAGES.DennisSquare,
    image2: IMAGES.DennisSquare,
    description: (
      <>
        <p>
          Dennis Da Silva. the unsung hero of South Africa’s Analog photography
          world. Dennis will be exhibiting some of his own photography as well
          as prints he has made for other famous photographers from around the
          world and speaking on his life as a Master Black and White Printer and
          the future of Analog Photography in the world of digital.{" "}
        </p>
        <p>
          Dennis has hand printed Exhibition prints for photographers such as
          David Goldblatt, Harry De Zitter, Jo Ratcliff, Sabelo Mlangeni, Gavin
          Furlonger, Greg Marinovich ( Bang Bang club), Michael Meyersfeld.
          Pierre Croquet, Ernest Cole Foundation, Jodi Bieber, John Brett Cohen,
          Billy Monk Foundation and many more. He has also been the personal
          printer for Roger Ballens for 45 years.{" "}
        </p>
        <p>
          In 2008, Dennis was presented the “Sony Profoto Lifetime Achievement
          Award ” and is the founder member and Judge of the World Sony Photo
          Awards in France. He runs his Alternative Print Process company from
          Johannesburg.
        </p>
      </>
    ),
  },
  roy_zetisky: {
    name: "Roy Zetisky",
    imageSquare: IMAGES.RoySquare,
    image2: IMAGES.RoySquare,
    description: (
      <>
        <p>
          Since growing up with the family bathroom converted to a darkroom, Roy
          Zetisky went to study film at Brooks in Santa Barbara and has become
          an international DP/Cinematographer and director. He still follows the
          summer every year from LA to Cape Town.
        </p>
        <p>
          Roy's work has continued to take home awards like Best Cinematographer
          at the MNET VUKA Awards, for{" "}
          <a href="https://www.youtube.com/watch?v=eJE_Ymf5dyg">a commercial</a>{" "}
          that lit and shot for the African Diamond Council, and South African
          Photographer of the Year, People’s Choice Award, for his wildlife
          photography.
        </p>
        <p>
          You can follow Roy on Instagram at{" "}
          <a href="https://www.instagram.com/roy_roysky/">@roy_roysky</a>
        </p>
      </>
    ),
  },
  DavidGoldblatt: {
    name: "David Goldblatt",
    imageSquare: IMAGES.DavidGoldblattSquareJpg,
    image2: IMAGES.DavidGoldblattSquareJpg,
    description: (
      <>
        <p>
          David Goldblatt stands as a legend of documentary photography in South
          Africa and has chronicled the people and places of his country from
          1948 until his passing in June 2018. His works comprise a vital
          document of our journey as a nation through the history of apartheid
          that captures the challenges of life but does not lose scope of the
          private and personal.
        </p>
        <p>
          The first South African to hold a solo exhibition in the MoMA (Museum
          of Modern Art) in New York, where he also showed solo exhibitions at
          the Jewish Museum and the New Museum, then featured in ILLUMInations,
          the San Francisco Museum of Modern Art and across the pond from the
          Barbican in London to the Centre Pompidou in Paris.
        </p>
        <p>
          Honoured with the 2006 Hasselblad Award, 2009 Henri Cartier-Bresson
          Award, awarded the Commandeur des Arts et des Lettres by the Ministry
          of Culture in France.
        </p>
        <p>
          You can find out more about David Goldblatt at{" "}
          <a href="https://www.plparchive.com/david-goldblatt-main/">
            Photography Legacy Project (PIP Archive)
          </a>{" "}
          and see his works at the{" "}
          <a href="https://goodman-gallery.com/artists/david-goldblatt">
            Goodman Gallery
          </a>{" "}
          with locations across Johannesburg, Cape Town, London and New York.
        </p>
      </>
    ),
  },
  Herman: {
    name: "Herman van Wyk",
    imageSquare: IMAGES.HermanSquare,
    image2: IMAGES.HermanRectangleJpg,
    description: (
      <>
        <p>
          This retrospective exhibition celebrates the life and work of Herman
          van Wyk — a brilliant artist whose creativity flowed across every
          medium. He was a painter, metal smith, poet, musician, and songwriter,
          a man whose love for life made him the heart of any musical gathering.
          His passion for history and the surreal shone through in his vibrant
          paintings, while his remarkable analog black-and-white photography —
          seldom exhibited during his lifetime — reveals a quieter, deeply
          observant side of his artistry.
        </p>
        <p>
          Herman lived in Barrydale, working as a metal smith and musician until
          his untimely passing in 2024 at the age of 61. In preparation for the
          2024 BAPF, his close friend Graham Abbott, director of the festival,
          built a dedicated darkroom so Herman could print his exhibition.
          Tragically, Herman fell ill and passed away within weeks, before he
          was able to complete the work.
        </p>
        <p>
          Honouring a promise made to him, Graham has printed a selection of
          Herman’s photographs for this year’s BAPF 25, drawn from negatives
          entrusted to Gavin Furlonger of the PAPA Agency at Gallery F. This
          retrospective exhibition represents the first public showing of this
          body of work.
        </p>
        <p>
          A second retrospective exhibition of Herman’s photographs and artworks
          will be presented at BAPF 26 next year, ensuring his legacy continues
          to be shared, remembered, and celebrated.
        </p>
      </>
    ),
  },
  PatrickDeMervelac: {
    name: "Patrick de Mervelec",
    imageSquare: IMAGES.Bapf2025ArtistPatrickDeMervelac,
    image2: IMAGES.Bapf2025ArtistPatrickDeMervelac,
    description: (
      <>
        <p>
          Patrick de Mervelec studied at the National Institute of Photography
          in Paris and began his career as a photojournalist for Paris Match
          before moving into fashion photography for Marie Claire, Vogue, and
          major couture houses such as Ungaro, Givenchy, and Armani.
        </p>
        <p>
          In 1981, advertising legend Jacques Séguéla commissioned him to
          photograph François Mitterrand for the presidential campaign,
          resulting in the iconic “La force tranquille” (The Quiet Strength)
          image. He later photographed Thabo Mbeki during the 1999 ANC campaign.
        </p>
        <p>
          As a member of the Leica Association in Paris, Patrick worked for a
          decade alongside masters such as Doisneau, Salgado, Depardon, and
          Sieff. He has exhibited widely in Europe and South Africa and is the
          author of six photography books, including Nude Landscape (2002) and
          My Pilgrimage with Johnny Clegg (2007).
        </p>
      </>
    ),
  },
  RodgerBosch: {
    name: "Rodger Bosch",
    imageSquare: IMAGES.Bapf2025ArtistRodgerBosch,
    image2: IMAGES.Bapf2025ArtistRodgerBosch,
    description: (
      <>
        <p>Rodger Bosch</p>
      </>
    ),
  },
  // the returning alumni
  nikolai: {
    name: "Nikolai Nielsen",
    imageSquare: IMAGES.NikolaiNielsenInGallerySquare,
    image2: IMAGES.NikolaiNielsen,
    description: (
      <>
        <BapfImg
          imageInfo={IMAGES.nikolaiGrahamInterviewJpg}
          className="ArtistProfile__pic_right"
        />
        <p>
          Nikolai's long-time fascination with chemistry took a turn from
          pyrotechnics to the photographic when his teacher's gift of silver
          nitrate (the key to analog photography) led him to historical
          photographic processes. Since then he's been doing it all from
          first-principles - building his camera, old fashioned flash-power, and
          brewing up his own photographic emulsions.
        </p>
        <p>
          Nikolai appeared at BAPF 2023 for several workshops and gave an open
          forum discussion with host Graham Abbott about small-scale production
          of photographic emulsions.
          <em>
            This year you participate in workshops and demonstrations on coating
            dryplates by hand and making black & white slides from x-ray film by
            reversal processing.
          </em>
        </p>
        <p>
          You can learn more about Nikolai's{" "}
          <a href="https://www.thephoblographer.com/2020/04/24/he-made-his-own-large-format-camera-and-old-school-flash-powder/#more-158439">
            early exploits
          </a>{" "}
          online, and find his work on{" "}
          <a href="https://www.instagram.com/whitesparksphotography/">
            Instagram
          </a>
          .
        </p>
      </>
    ),
  },
  luke: {
    name: "Luke Kammies",
    imageSquare: IMAGES.LukeKammiesSquare,
    image2: IMAGES.LukeKammies,
    description: (
      <>
        <BapfImg
          imageInfo={IMAGES.LukeTakingPicture}
          className="ArtistProfile__pic_right"
        />
        <p>
          Luke first came to Barrydale to study under Graham Abbott and left
          with a passion for analog. He has since been teaching these skills to
          the next generation of photographers.
        </p>
        <p>
          Luke appeared at BAPF 2023 to exhibit a series of works in colour and
          black & white, and gave an interview with Graham Abbott.
          <em>
            {" "}
            This year Luke will be returning with more prints to exhbit, and
            will teach a workshop on darkroom hand printing in black & white.
          </em>
        </p>
      </>
    ),
  },
  // other artists from Gallery F
  BillyMonk: {
    name: "Billy Monk",
    imageSquare: IMAGES.BillyMonkSquare,
    image2: IMAGES.BillyMonk,
    description: <>With works from Gallery F</>,
  },
  RogerBallen: {
    name: "Roger Ballen",
    imageSquare: IMAGES.RogerBallenSquare,
    image2: IMAGES.RogerBallenSquare,
    description: <>With works from Gallery F</>,
  },
  PaulAlberts: {
    name: "Paul Alberts",
    imageSquare: IMAGES.PaulAlbertsSquare,
    image2: IMAGES.PaulAlberts,
    description: <>With works from Gallery F</>,
    // https://galleryf.co.za/photographers/paul-alberts/
  },
  GingerOdes: {
    name: "Ginger Odes",
    imageSquare: IMAGES.GingerOdesSquare,
    image2: IMAGES.GingerOdesSquare,
    description: <>With works from Gallery F</>,
  },
  GuntherKomnick: {
    name: "Gunther Komnick",
    imageSquare: IMAGES.GuntherKomnickSquare,
    image2: IMAGES.GuntherKomnickSquare,
    description: <>With works from Gallery F</>,
    // https://galleryf.co.za/photographers/gunther-komnick/
  },
  JurgenSchadeberg: {
    name: "Jurgen Schadeberg",
    imageSquare: IMAGES.JurgenSchadebergSquare,
    image2: IMAGES.JurgenSchadebergSquare,
    description: <>With works from Gallery F</>,
    // https://galleryf.co.za/photographers/jurgen-schadeberg/
  },
  JillianEdelstein: {
    name: "Jillian Edelstein",
    imageSquare: IMAGES.Bapf2025ArtistJillianEdelstein,
    image2: IMAGES.Bapf2025ArtistJillianEdelstein,
    description: (
      <>
        <p>
          Jillian Edelstein is a South African–born, London-based photographer
          known for her powerful portraits and documentary work. She began her
          career as a press photographer in Johannesburg before moving to the UK
          in 1985 to study photojournalism. Edelstein has photographed for major
          international publications and is widely recognised for her long-term
          project documenting South Africa’s Truth and Reconciliation
          Commission, published in her award-winning book Truth and Lies. Her
          work has been exhibited internationally, including at the National
          Portrait Gallery and the Photographers’ Gallery in London.
        </p>
      </>
    ),
  },
};
