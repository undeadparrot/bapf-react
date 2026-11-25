import { useState } from "react";
import "../App.less";
import { IMAGES } from "../images";
import logo from "../assets/Logo.webp";
import { PROGRAMME } from "./programme";
import {
  HeroQuote,
  strongifyFirstNWord,
  Article,
  BapfImg,
} from "../components";
import { TheContactDetails2024 } from "./TheContactDetails2024";
import { TheVenue2024 } from "./TheVenue2024";
import { TheHistory2024 } from "./TheHistory2024";
import { Bapf2023 } from "../year-others/Bapf2023";
import { Bapf2022 } from "../year-others/Bapf2022";
import { Bapf2021 } from "../year-others/Bapf2021";
import { BarrydaleArts2024 } from "./BarrydaleArts2024";
import { TheSponsors2024 } from "./TheSponsors2024";
import { TheWorkshops2024 } from "./TheWorkshops2024";
import { TheArtists2024 } from "./TheArtists2024";
import { TheSpeakers2024 } from "./TheSpeakers2024";
import { ContributingArt } from "./ContributingArt";
import { TheArt2024 } from "./TheArt2024";

export function Bapf2024App() {
  const [exposeHiddenHeadings, setExposeHiddenHeadings] = useState(false);

  return (
    <>
      <div className="BapfTopBar">
        <header>
          <img src={logo} className="BapfLogo" />
          <span className="HeroQuote">BAPF.</span>
        </header>
        <nav>
          <ul>
            <li>
              <a
                href="/"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                BAPF 2026
              </a>
            </li>
            <li className="BapfNav__spacer">
              <span>|</span>
            </li>
            <li>
              <a
                href="#the-programme"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                2024 Programme
              </a>
            </li>
            <li>
              <a
                href="#the-speakers"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                The Speakers
              </a>
            </li>
            <li>
              <a
                href="#the-workshops"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                The Workshops
              </a>
            </li>
            <li>
              <a
                href="#the-venue"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                The Venue
              </a>
            </li>
            <li>
              <a
                href="#the-history"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                The History
              </a>
            </li>
            {/* <li>
              <a
                href="#the-sponsors"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                The Sponsors
              </a>
            </li> */}
            <li className="BapfNav__spacer">
              <span>|</span>
            </li>
            <li>
              <a
                href="#the-contact-details"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                Contact
              </a>
            </li>
          </ul>
          <a href="#main-content" className="BapfHiddenHeading">
            Skip to main content
          </a>
        </nav>
      </div>
      <main id="main-content" data-exposehiddenheadings={exposeHiddenHeadings}>
        <h1 className="HeroQuote">
          The <strong>Barrydale</strong> <br />
          <strong>Analog</strong> Photo <br />
          Festival.
        </h1>
        <div className="BapfMainPoster">
          <BapfImg imageInfo={IMAGES.programme} />
        </div>
        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.GalleryFPoster}
            className="BapfMainPoster"
          />
          <BapfImg
            imageInfo={IMAGES.HistoryofphotographyPoster}
            className="BapfMainPoster"
          />
        </div>
        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.DelugeoforiginPoster2}
            className="BapfMainPoster"
          />
          <BapfImg imageInfo={IMAGES.RoyPoster} className="BapfMainPoster" />
        </div>

        <Article
          articleId="the-programme"
          heading={
            <>
              The <strong>Programme</strong>
            </>
          }
          hideHeading
        >
          {PROGRAMME.map((progday) => (
            <>
              <h3>{strongifyFirstNWord(2, progday.title)}</h3>
              <ul>
                {progday.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          ))}
        </Article>

        <HeroQuote>
          Analog is
          <br />
          <strong>Living in The Unknown</strong>.
        </HeroQuote>

        <Article
          articleId="the-festival"
          heading={
            <>
              The <strong>Festival</strong>
            </>
          }
        >
          <p>
            Some of South Africa’s top photographers are coming to Barrydale for
            the 5th annual Analog Photography Festival.
          </p>
          <p>
            From 13 to 21 December the Klein Karoo village will celebrate
            pictures shot on film and processed in the dark, an alchemy
            combining light physics, chemistry and creative artistry.
          </p>
          <p>
            This year we spotlight world-class South African photography with
            timeless prints from the prestigious Gallery F, globe trotting Roy
            Zetisky and master printer Dennis da Silva.
          </p>
          <p>
            The festival based in the Karoolkie cellar features exhibitions,
            workshops and talks, books, cameras and photographs for sale, old
            movie screenings, a mobile darkroom and a camera obscura in a
            vintage caravan for visitors to immerse themselves in the analog
            experience. See schedule below.
          </p>
          <p>
            The festival was created by visionary photographer Graham Abbott, an
            analog entrepreneur with a passion for non-digital cameras and
            vintage analog technology including turntables, VHS machines,
            typewriters and movie projectors.
          </p>
          <p>
            ‘Despite everything going digital, there is a powerful awakening
            among all generations of the craft of a hand-printed picture made
            with patience and skill,’ says Abbott. ‘The Barrydale Analog
            Photography Festival is bringing old and new work under one roof for
            public appreciation and to inspire a new era of analog
            photographers.’
          </p>
          <p>
            Among other exhibition highlights this year are photographs from the
            Drum magazine archive, including Ranjith Kally, Bob Gosani and GR
            Naidoo; as well as photographers Graham Abbot, Tim Hopwood and
            Stellenbosch Academy students.
          </p>{" "}
          <aside className="TheFestival__videothing">
            <p>
              Here is a short video compilation of <strong>BAPF 2021</strong>,
              featuring the opening nights of photographer Josie Borain's
              exhibition (in the Karoolkie venue) on the 10th of December and
              Pierre Crocquet's exhibition (at the Mud Gallery) on the 11th of
              December 2021. The Barrydale Analog Photography Festival 2021 was
              held from the 9-19 Dec 2022
            </p>
            <iframe
              width="370"
              height="210"
              src="https://www.youtube.com/embed/DVz3zDPj0NA?si=4sjCgzGRzfGg2GH3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </aside>
          <BapfImg imageInfo={IMAGES.TheCellerShoot1} />
        </Article>
        <TheArt2024 />
        <ContributingArt />
        <TheSpeakers2024 />
        <TheArtists2024 />

        <TheWorkshops2024 />

        <HeroQuote>
          Analog is
          <br />
          <strong>Emotion made Tangible</strong>.
        </HeroQuote>

        <TheVenue2024 />
        <TheHistory2024 />
        <Bapf2023 />
        <Bapf2022 />
        <Bapf2021 />
        <BarrydaleArts2024 />
        <TheSponsors2024 />
        <TheContactDetails2024 />
      </main>
      <footer></footer>
    </>
  );
}

export function Bapf2024LookingBack() {
  return (
    <Article
      articleId="previously-bapf-2024"
      heading={
        <>
          Looking back at <strong>BAPF 2024</strong>
        </>
      }
    >
        <div className="BapfMainPoster">
          <BapfImg imageInfo={IMAGES.programme} />
        </div>
        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.GalleryFPoster}
            className="BapfMainPoster"
          />
          <BapfImg
            imageInfo={IMAGES.HistoryofphotographyPoster}
            className="BapfMainPoster"
          />
        </div>
        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.DelugeoforiginPoster2}
            className="BapfMainPoster"
          />
          <BapfImg imageInfo={IMAGES.RoyPoster} className="BapfMainPoster" />
        </div>
    </Article>)
}
