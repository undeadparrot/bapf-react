import { useState } from "react";
import "../App.less";
import { IMAGES } from "../images";
import logo from "../assets/Logo.webp";
import {
  HeroQuote,
  Article,
  BapfImg,
  strongifyFirstNWord,
} from "../components";
import { TheContactDetails2024 } from "../year-2024/TheContactDetails2024";
import { TheVenue2024 } from "../year-2024/TheVenue2024";
import { TheHistory2024 } from "../year-2024/TheHistory2024";
import { Bapf2023 } from "../year-others/Bapf2023";
import { Bapf2022 } from "../year-others/Bapf2022";
import { Bapf2021 } from "../year-others/Bapf2021";
import { TheArtists2024 } from "../year-2024/TheArtists2024";
import { ContributingArt } from "../year-2024/ContributingArt";
import { TheArt2025 } from "./TheArt2025";
import { TheWorkshops2025 } from "./TheWorkshops2025";
import { Bapf2024LookingBack } from "../year-2024/Bapf2024";
import { CommunityAndYouth2025 } from "./CommunityAndYouth2025";
import { ClosingCelebration2025 } from "./ClosingCelebration2025";
import { TheSponsors2025 } from "./TheSponsors2025";
import { PROGRAMME } from "./programme";
import { TheArtists2025 } from "./TheArtists2025";

import { Link } from "react-router";

export function Bapf2025App() {
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
              <a href="/" onClick={() => setExposeHiddenHeadings(true)}>
                BAPF 2026
              </a>
            </li>
            <li className="BapfNav--landscape-only">
              <span>|</span>
            </li>
            <li className="BapfNav--landscape-only">
              <a
                href="#the-programme"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                2025 Programme
              </a>
            </li>
            {/* <li>
              <a
                href="#the-speakers"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                Speakers
              </a>
            </li> */}
            <li className="BapfNav--landscape-only">
              <a
                href="#the-workshops"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                Workshops
              </a>
            </li>
            <li className="BapfNav--landscape-only">
              <a
                href="#the-venue"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                Venue
              </a>
            </li>
            <li className="BapfNav--landscape-only BapfNav--screenreaders-only">
              <a
                href="#the-history"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                History
              </a>
            </li>
            <li className="BapfNav--landscape-only">
              <a
                href="#the-sponsors"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                Sponsors
              </a>
            </li>
            <li>
              <a href="/2024" onClick={() => setExposeHiddenHeadings(true)}>
                BAPF 2024
              </a>
            </li>
            <li className="BapfNav--landscape-only">
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
        <div className="BapfMainPoster BapfMainPoster--double">
          <BapfImg imageInfo={IMAGES.bapf2025Poster} />
          <BapfImg imageInfo={IMAGES.Bapf2025PosterProgramme} />
        </div>
        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.Bapf2025GoldblattPosterJpeg}
            className="BapfMainPoster"
          />
          <BapfImg
            imageInfo={IMAGES.Bapf2025SeanWilsonPosterImmortalimpressionsJpeg}
            className="BapfMainPoster"
          />
        </div>
        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.Bapf2025RoyZetiskyPosterBackinthedayJpeg}
            className="BapfMainPoster"
          />
          <BapfImg
            imageInfo={IMAGES.Bapf2025RoyZetiskyPosterWildJpeg}
            className="BapfMainPoster"
          />
        </div>
        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.Bapf2025RodgerBoschPosterJpeg}
            className="BapfMainPoster"
          />
          <BapfImg
            imageInfo={IMAGES.Bapf2025HermanVanWykPosterJpeg}
            className="BapfMainPoster"
          />
        </div>

        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.Bapf2025PosterJillianEdelstein}
            className="BapfMainPoster"
          />
          <BapfImg
            imageInfo={IMAGES.Bapf2025PosterDrum}
            className="BapfMainPoster"
          />
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
            Now in its 6th year, the Barrydale Analog Photography Festival
            (BAPF) returns this December for a week-long celebration of pure
            analog image-making in one of South Africa’s most character-filled
            towns – Barrydale, nestled between mountain and desert.
          </p>
          <p>
            From its humble beginnings in 2020, BAPF has grown into a{" "}
            <strong>major showcase of film photography</strong>, proudly hosting
            some of the most respected names in South African photography,
            including Obie Oberholzer, Josie Borain, Guy Tillim, Gavin
            Furlonger, Dennis Da Silva, Tim Hopwood, Tiaan van Deventer,Derek
            Gripper , Luke Kammies, Noaln Lister, Herman Van Wyk and Graham
            Abbott who had opened their own exhibitions, Here a list of some of
            the other famous photographers we have have exhibitions held over
            the years Roger Ballen, David Goldbladt, Jurgen Schadenberg, All
            Drum magazine photographers, Billy Monk, Paul Wineberg, Rashied
            Lombard, Gerda Genis, Robert Koen, Roy Zetisky, Johan Wilke, John
            Hog, Rodger Bosch, Paul Alberts, to name a few.
          </p>
          <p>
            This year’s festival runs from <strong>Friday 12</strong> to{" "}
            <strong>Saturday 20 December 2025</strong>, and expands across three
            venues:
            <ul>
              <li>
                The much-loved <strong>Karoolkie Kelder Gallery</strong> (home
                of BAPF for the past 4 years)
              </li>
              <li>
                The <strong>Barrydale Info Centre</strong>, dedicated to hybrid
                analog-digital work
              </li>
              <li>
                A <strong>historic building</strong> in Van Riebeek Street used
                during the very first festival in 2020
              </li>
            </ul>
          </p>
          <p>
            The festival based in the Karoolkie cellar features exhibitions,
            workshops and talks, books, cameras and photographs for sale, old
            movie screenings, and a mobile darkroom. See schedule below.
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
              className="BapfYoutubePlayer"
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
        <CommunityAndYouth2025 />
        <ClosingCelebration2025 />
        <TheSponsors2025 />
        <TheArt2025 />
        <ContributingArt />
        {/* <TheSpeakers2024 /> */}
        <TheArtists2025 />

        <TheWorkshops2025 />

        <HeroQuote>
          Analog is
          <br />
          <strong>Emotion made Tangible</strong>.
        </HeroQuote>

        <TheVenue2024 />
        <TheHistory2024 />
        <Bapf2024LookingBack />
        <Bapf2023 />
        <Bapf2022 />
        <Bapf2021 />
        {/* <BarrydaleArts2024 /> */}
        <TheContactDetails2024 />
      </main>
      <footer></footer>
    </>
  );
}
