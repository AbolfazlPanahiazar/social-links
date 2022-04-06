export type result =
  | "instagram"
  | "twitter"
  | "website"
  | "linkedin"
  | "telegram"
  | "facebook";

export const socialTypeIdentifier: (link: string) => result = (
  link: string
) => {
  if (link.includes("facebook.com")) {
    return "facebook";
  }
  if (link.includes("twitter.com")) {
    return "twitter";
  }
  if (link.includes("instagram.com")) {
    return "instagram";
  }
  if (link.includes("telegram.me")) {
    return "telegram";
  }
  if (link.includes("linkedin.com")) {
    return "linkedin";
  }
  return "website";
};

export const socialTypeTitle: (link: string) => string = (link: string) => {
  if (link.includes("facebook.com")) {
    return "فیسبوک";
  }
  if (link.includes("twitter.com")) {
    return "توییتر";
  }
  if (link.includes("instagram.com")) {
    return "اینستاگرام";
  }
  if (link.includes("telegram.me")) {
    return "تلگرام";
  }
  if (link.includes("linkedin.com")) {
    return "لینکدین";
  }
  return "وبسایت";
};
