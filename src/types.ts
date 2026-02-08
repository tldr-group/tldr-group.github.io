import * as z from "zod/mini";

// Our types we'll use in the components

type OutLink = {
  text: string;
  link: string;
};

export type Person = {
  name: string;
  isCurrent: boolean;
  role: string;
  desc: string;
  outLinks: OutLink[];
  imagePath: string;
  order: number;
};

export type Project = {
  title: string;
  desc: string;
  outLinks: OutLink[];
  imagePath: string;
  order: number;
};

export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  link: string;
  order: number;
};

export type Video = {
  title: string;
  link: string;
  order: number;
};

// Our zod schemas we'll use to validate the json data in content
// They should match our types 1-1

const OutLinkSchema = z.object({
  text: z.string(),
  link: z.string(),
});

export const PersonSchema = z.object({
  name: z.string(),
  isCurrent: z.boolean(),
  role: z.string(),
  desc: z.string(),
  outLinks: z.array(OutLinkSchema),
  imagePath: z.string(),
  order: z.number(),
});

export const ProjectSchema = z.object({
  title: z.string(),
  desc: z.string(),
  outLinks: z.array(OutLinkSchema),
  imagePath: z.string(),
  order: z.number(),
});

export const PublicationSchema = z.object({
  title: z.string(),
  authors: z.string(),
  journal: z.string(),
  year: z.number(),
  doi: z.string(),
  link: z.string(),
  order: z.number(),
});

export const VideoSchema = z.object({
  title: z.string(),
  link: z.string(),
  order: z.number(),
});
