import { ReactNode, useCallback, useState } from "react";
import classNames from "classnames";
import Lightbox from "yet-another-react-lightbox";

import { BapfImageInfo } from "./images";
import { ArtistProfileInfo } from "./artists";

export function HeroQuote(
  props: React.PropsWithChildren<{ className?: string }>,
) {
  return (
    <aside
      className={classNames(["HeroQuote", props.className && props.className])}
    >
      <p>{props.children}</p>
    </aside>
  );
}

export function strongifyFirstNWord(n: number, text: string) {
  return text.split(" ").flatMap((word, i) => {
    if (i < n) {
      return [<strong>{word}</strong>, " "];
    }
    return [word, " "];
  });
}

type ArticleProps = React.PropsWithChildren<{
  articleId: string;
  heading: ReactNode;
  hideHeading?: boolean;
}>;
export function Article(props: ArticleProps) {
  return (
    <article className="BapfArticle" id={props.articleId}>
      <h2 className={classNames([props.hideHeading && "BapfHiddenHeading"])}>
        {props.heading}
      </h2>
      {props.children}
    </article>
  );
}

export type BapfImageProps = {
  imageInfo: BapfImageInfo;
  className?: string;
  showCaption?: boolean;
  lightboxOnClick?: boolean;
  hasBorder?: boolean;
};
export function BapfImg(props: BapfImageProps) {
  const [isOpen, setOpen] = useState(false);
  const setOpenTrue = useCallback(() => setOpen(true), []);
  const setOpenFalse = useCallback(() => setOpen(false), []);

  if (props.imageInfo.alwaysShowCaption) {
      
    const el = (
      <>
        <Lightbox
          open={isOpen}
          close={setOpenFalse}
          slides={[{ src: props.imageInfo.filename, alt: props.imageInfo.title }]}
        />
        <figure 
          className={classNames([
            "BapfImageFigure",
            props.className && props.className,
          ])}>
        <img
          className={classNames({
            "BapfImage": true,
            "BapfImage--border": props.hasBorder,
          })}
          src={props.imageInfo.filename}
          title={props.imageInfo.title}
          alt={props.imageInfo.description}
          onClick={props.lightboxOnClick ? setOpenTrue : undefined}
        ></img>{(props.showCaption || props.imageInfo.alwaysShowCaption) && <caption>{props.imageInfo.title}</caption>}</figure>
      </>
    );
    return el;
  }
  
  return (
    <>
      <Lightbox
        open={isOpen}
        close={setOpenFalse}
        slides={[{ src: props.imageInfo.filename }]}
      />
      <img
        className={classNames([
          "BapfImage",
          props.hasBorder && "BapfImage--border",
          props.className && props.className,
        ])}
        src={props.imageInfo.filename}
        title={props.imageInfo.title}
        alt={props.imageInfo.description}
        onClick={props.lightboxOnClick ? setOpenTrue : undefined}
      ></img>
    </>
  );
}

export function SmallBapfImg(props: BapfImageProps) {
  const [isOpen, setOpen] = useState(false);
  const setOpenTrue = useCallback(() => setOpen(true), []);
  const setOpenFalse = useCallback(() => setOpen(false), []);
  const el = (
    <>
      <Lightbox
        open={isOpen}
        close={setOpenFalse}
        slides={[{ src: props.imageInfo.filename }]}
      />
      <img
        className={classNames([
          "BapfImage",
          "BapfImage--small",
          props.className && props.className,
        ])}
        src={props.imageInfo.filename}
        title={props.imageInfo.title}
        alt={props.imageInfo.description}
        onClick={props.lightboxOnClick ? setOpenTrue : undefined}
      ></img>
    </>
  );
  if (props.showCaption || props.imageInfo.alwaysShowCaption) {
    return (
      <figure>
        {el}
        <caption>{props.imageInfo.title}</caption>
      </figure>
    );
  } else {
    return el;
  }
}

export type ArtistProfileWidgetProps = {
  artist: ArtistProfileInfo;
};
export function ArtistProfileWidget(props: ArtistProfileWidgetProps) {
  return (
    <article className="ArtistProfile">
      <h3>{props.artist.name}</h3>
      <BapfImg
        imageInfo={props.artist.imageSquare}
        className="ArtistProfile__pic"
        lightboxOnClick
      />
      <div className="ArtistProfile__description">
        {props.artist.description}
      </div>
    </article>
  );
}
