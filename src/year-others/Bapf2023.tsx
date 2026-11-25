import { IMAGES } from "../images";
import { Article, BapfImg } from "../components";
export function Bapf2023() {
  return (
    <Article
      articleId="previously-bapf-2023"
      heading={
        <>
          Looking back at <strong>BAPF 2023</strong>
        </>
      }
    >
      <BapfImg imageInfo={IMAGES.bapf2023Poster} />
      <BapfImg imageInfo={IMAGES.bapf2023Programme} />
      <BapfImg imageInfo={IMAGES.bapf2023Largeformatworkshop} />
      <BapfImg imageInfo={IMAGES.bapf2023Dryplateworkshop} />
      <BapfImg imageInfo={IMAGES.bapf2023Derek} />
      <BapfImg imageInfo={IMAGES.bapf2023Eldersexhibition} />
    </Article>
  );
}
