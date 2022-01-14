import type { SocialIconsProps } from "../components/social-icons";

export function haveSocialIconsProps({
  facebook,
  instagram,
  linkedIn,
  whatsApp,
  lattes,
  gitHub,
  twitter,
  youTube,
}: Partial<SocialIconsProps>) {
  return (
    !!facebook ||
    !!instagram ||
    !!linkedIn ||
    !!whatsApp ||
    !!lattes ||
    !!gitHub ||
    !!twitter ||
    !!youTube
  );
}
