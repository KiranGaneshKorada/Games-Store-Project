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
          <span key={platform.platform.id}>
            <IconParagraph
              slug={platform.platform.slug}
              id={platform.platform.id}
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default IconPlatform;
