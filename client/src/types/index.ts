import { PLATFORMS } from "../lib/constants";

export type Platforms = (typeof PLATFORMS)[number];

export type Link = { platform: Platforms; url: string };

export type Profile = {
  picture?: string;
  firstName: string;
  lastName: string;
  email?: string;
};

export type InputError = EmptyError | InvalidError;

type EmptyError = {
  type: "empty_url";
};

type InvalidError = {
  type: "invalid_url";
};
