import { Article } from "../components";
export function Bapf2021() {
  return (
    <Article
      articleId="bapf-2021"
      heading={
        <>
          Looking back at <strong>BAPF 2021</strong>
        </>
      }
    >
      <iframe
        width="840"
        height="470"
        src="https://www.youtube.com/embed/DVz3zDPj0NA?si=4sjCgzGRzfGg2GH3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Article>
  );
}
