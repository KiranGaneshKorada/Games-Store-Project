import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  slug: string;
}

function IconParagraph({ slug }: Props) {
  //     const iconPlatformMap: { [key: string]: IconType } = {
  //     pc: FaWindows,
  //     playstation: FaPlaystation,
  //     xbox: FaXbox,
  //     nintendo: SiNintendo,
  //     mac: FaApple,
  //     linux: FaLinux,
  //     ios: MdPhoneIphone,
  //     web: BsGlobe,
  //     android: FaAndroid,
  //   };


  if (slug === "pc") return <FaWindows />;
  if (slug === "playstation") return <FaPlaystation />;
  if (slug === "xbox") return <FaXbox />;
  if (slug === "nintendo") return <SiNintendo />;
  if (slug === "mac") return <FaApple />;
  if (slug === "linux") return <FaLinux />;
  if (slug === "ios") return <MdPhoneIphone />;
  if (slug === "web") return <BsGlobe />;
  if (slug === "android") return <FaAndroid />;

}

export default IconParagraph;
