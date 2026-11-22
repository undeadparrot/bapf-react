import { Article } from "../components";

export function TheContactDetails2024() {
  return (
    <Article
      articleId="the-contact-details"
      heading={
        <>
          <strong>Contact</strong> details
        </>
      }
    >
      <div className="Article__split">
        <div>
          <iframe
            className="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=barrydale, south africa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <dl>
          <dt>Email</dt>
          <dd>
            <a href="mailto:graham@bapf.co.za">graham@bapf.co.za</a>
          </dd>
          <dt>Phone</dt>
          <dd>084 777 6470</dd>
          <dt>Instagram</dt>
          <dd>
            <a href="https://www.instagram.com/bapf_art/">bapf_art</a>
          </dd>
          <dt>Facebook</dt>
          <dd>bapf_20</dd>
        </dl>
      </div>
    </Article>
  );
}
