
import { IMAGES } from "../images";
import {
    Article,
    BapfImg
} from '../components';
export function Bapf2022(){
    return (

                <Article
                  articleId="previously-bapf-2022"
                  heading={
                    <>
                      Looking back at <strong>BAPF 2022</strong>
                    </>
                  }
                >
                  <BapfImg imageInfo={IMAGES.Bapf2022Poster1} />
                  <BapfImg imageInfo={IMAGES.Bapf2022Poster2} />
                </Article>
    )
}
