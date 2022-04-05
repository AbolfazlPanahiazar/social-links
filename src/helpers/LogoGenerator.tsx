import { FC } from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
  Web,
} from "@mui/icons-material";

interface ILogoGenerator {
  logo:
    | "instagram"
    | "twitter"
    | "website"
    | "linkedin"
    | "telegram"
    | "facebook";
}

const LogoGenerator: FC<ILogoGenerator> = ({ logo }) => {
  switch (logo) {
    case "facebook":
      return <Facebook />;
    case "instagram":
      return <Instagram />;
    case "twitter":
      return <Twitter />;
    case "linkedin":
      return <LinkedIn />;
    case "telegram":
      return <Telegram />;
    case "website":
      return <Web />;
    default:
      return <Web />;
  }
};

export default LogoGenerator;
