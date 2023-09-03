import { platform } from "../hooks/useGames";

import IconParagraph from "./IconParagraph";

interface Props {
  platforms: { platform: platform }[];
}

function IconPlatform({ platforms }: Props) {
 

  return (
    <>
      {" "}
      <div className="d-flex justify-content-evenly ">
        {platforms.map((platform) => (
          <IconParagraph slug={platform.platform.slug} />
        ))}
      </div>
    </>
  );
}

export default IconPlatform;
