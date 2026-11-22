import { useState } from "react";
import "../App.less";
import { IMAGES } from "../images";
import logo from "../assets/Logo.webp";
import { HeroQuote, Article, BapfImg, strongifyFirstNWord } from "../components";
import { TheContactDetails2024 } from "../year-2024/TheContactDetails2024";
import { TheVenue2024 } from "../year-2024/TheVenue2024";
import { TheHistory2024 } from "../year-2024/TheHistory2024";
import { Bapf2023 } from "../year-others/Bapf2023";
import { Bapf2022 } from "../year-others/Bapf2022";
import { Bapf2021 } from "../year-others/Bapf2021";
import { ContributingArt } from "../year-2024/ContributingArt";
import { TheArt2026 } from "./TheArt2026";
import { TheWorkshops2026 } from "./TheWorkshops2026";
import { Bapf2024LookingBack } from "../year-2024/Bapf2024";
import { CommunityAndYouth2026 } from "./CommunityAndYouth2026";
import { ClosingCelebration2026 } from "./ClosingCelebration2026";
import { TheSponsors2026 } from "./TheSponsors2026";
import { PROGRAMME } from "./programme";
import { TheArtists2026 } from "./TheArtists2026";

export function Bapf2026App() {
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
                href="#the-programme"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                2026 Programme
              </a>
            </li>
            {/* <li>
              <a
                href="#the-speakers"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                The Speakers
              </a>
            </li> */}
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
            <li>
              <a
                href="#the-sponsors"
                onClick={() => setExposeHiddenHeadings(true)}
              >
                The Sponsors
              </a>
            </li>
            <li>
              <a href="/2025" onClick={() => setExposeHiddenHeadings(true)}>
                BAPF 2025
              </a>
            </li>
            <li>
              <a href="/2024" onClick={() => setExposeHiddenHeadings(true)}>
                BAPF 2024
              </a>
            </li>
            <li>
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
        <h1>
          The <strong>Barrydale</strong> <br />
          <strong>Analog</strong> Photo <br />
          Festival.
        </h1>
        <div className="BapfMainPoster">
          <BapfImg imageInfo={IMAGES.bapf2026Poster2} />
          {/* <BapfImg imageInfo={IMAGES.Bapf2025PosterProgramme} /> */}
        </div>
        {/* <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.Bapf2025GoldblattPosterJpeg}
            className="BapfMainPoster"
          />
          <BapfImg imageInfo={IMAGES.Bapf2025SeanWilsonPosterImmortalimpressionsJpeg} className="BapfMainPoster" />
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
          <BapfImg imageInfo={IMAGES.Bapf2025HermanVanWykPosterJpeg} className="BapfMainPoster" />
        </div>

        <div className="BapfSecondaryPosters">
          <BapfImg
            imageInfo={IMAGES.Bapf2025PosterJillianEdelstein}
            className="BapfMainPoster"
          />
          <BapfImg imageInfo={IMAGES.Bapf2025PosterDrum} className="BapfMainPoster" />
        </div> */}

        {/* <HeroQuote>
          Soon we will <strong>unveil</strong>
          <br />a new year of <strong>analog</strong>.
        </HeroQuote> */}
        {/* <Article
          articleId="admonishment"
          heading={
            <>
              Coming <strong>Soon</strong>
            </>
          }
          // hideHeading
        >
          <p>We are getting ready to unveil the new programme for BAPF 2026. <br/>Please check back soon.</p>
        </Article> */}
 
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
          Analog Is
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
            Now in its <strong>7th year</strong>, the Barrydale Analog Photography Festival
            (BAPF) returns this December for a week-long celebration of pure
            analog image-making in one of South Africa’s most character-filled
            towns – Barrydale, nestled between mountain and desert.
          </p>
          <p>
            From its humble beginnings in 2020, BAPF has grown into a{" "}
            <strong>major showcase of film photography</strong>, proudly hosting
            some of the most respected names in South African photography,
            including Tony Meintjes, Ajay Lalu, 
            Obie Oberholzer, Josie Borain,  Guy Tillim, Gavin Furlonger, 
            Dennis Da Silva, Tim Hopwood, Tiaan van Deventer, Derek Gripper, Luke Kammies, Noaln Lister, Herman Van Wyk and Graham
            Abbott who had opened their own exhibitions, Here a list of some of
            the other famous photographers we have have exhibitions held over
            the years Roger Ballen, David Goldbladt, Jurgen Schadenberg, All
            Drum magazine photographers, Billy Monk, Paul Wineberg, Rashied
            Lombard, Gerda Genus, Robert Koen, Roy Zetisky, Johan Wilke, John
            Hog, Rodger Bosch, Paul Alberts, to name a few.
          </p>
          <p>
            This year’s festival runs from <strong>Friday 11</strong> to{" "}
            <strong>Sunday 20 December 2026</strong>, and is hosted across two
            venues:
            <ul>
              <li>
                The much-loved <strong>Karoolkie Kelder Gallery</strong> (home
                of BAPF for the past 5 years)
              </li>
              <li>
                The <strong>Far Side Darkroom</strong>, a permanent workspace
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
        <CommunityAndYouth2026 />
        <ClosingCelebration2026 />
        <TheSponsors2026 />
        <TheArt2026 />
        <ContributingArt />
        {/* <TheSpeakers2024 /> */}
        <TheArtists2026 />

        <TheWorkshops2026 />

        <HeroQuote>
          Analog Is
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
