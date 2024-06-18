import { Platforms } from "../types";

export const PLATFORMS = [
  "Github",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "YouTube",
  "Facebook",
  "Twitch",
  "Dev.to",
  "Codewars",
  "Codepen",
  "freeCodeCamp",
  "GitLab",
  "Hashnode",
  "Stack Overflow",
] as const;

export const PLACEHOLDERS: Record<Platforms, string> = {
  Github: "https://www.github.com/xyz",
  "Frontend Mentor": "https://www.frontendmentor.io/xyz",
  LinkedIn: "https://www.linkedin.com/xyz",
  Twitter: "https://www.twitter.com/xyz",
  YouTube: "https://www.youtube.com/xyz",
  Facebook: "https://www.facebook.com/xyz",
  Twitch: "https://www.twitch.com/xyz",
  "Dev.to": "https://www.dev.to/xyz",
  Codewars: "https://www.codewars.com/xyz",
  Codepen: "https://www.codepen.com/xyz",
  freeCodeCamp: "https://www.freeCodeCamp.org/xyz",
  GitLab: "https://www.gitlab.com/xyz",
  Hashnode: "https://www.hashnode.com/xyz",
  "Stack Overflow": "https://www.stackoverflow.com/xyz",
};

export const PLATFORM_PATTERNS: Record<Platforms, RegExp> = {
  Github: /^(https?:\/\/)?(www\.)?github\.com\/.+$/,
  "Frontend Mentor": /^(https?:\/\/)?(www\.)?frontendmentor\.io\/.+$/,
  LinkedIn: /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/,
  Twitter: /^(https?:\/\/)?(www\.)?twitter\.com\/.+$/,
  YouTube: /^(https?:\/\/)?(www\.)?youtube\.com\/.+$/,
  Facebook: /^(https?:\/\/)?(www\.)?facebook\.com\/.+$/,
  Twitch: /^(https?:\/\/)?(www\.)?twitch\.com\/.+$/,
  "Dev.to": /^(https?:\/\/)?(www\.)?dev\.to\/.+$/,
  Codewars: /^(https?:\/\/)?(www\.)?codewars\.com\/.+$/,
  Codepen: /^(https?:\/\/)?(www\.)?codepen\.com\/.+$/,
  freeCodeCamp: /^(https?:\/\/)?(www\.)?freeCodeCamp\.org\/.+$/,
  GitLab: /^(https?:\/\/)?(www\.)?gitlab\.com\/.+$/,
  Hashnode: /^(https?:\/\/)?(www\.)?hashnode\.com\/.+$/,
  "Stack Overflow": /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/,
} as const;
