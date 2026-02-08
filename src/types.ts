import { ZodType } from "zod";
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

// We need to define our own interface (i.e behaviours $schema will have) because zod mini removes the ZodSchema type
interface MinimalSchema<Output> {
  safeParse: (input: unknown) => { success: true; data: Output } | { success: false; error: any };
}

// This is a helper function that parses JSON arrays according to zod schemas and returns objects of type T
// if successful, otherwise logs error and skips item. This allows us to handle errors in our JSON data gracefully without crashing the whole page.
export const gracefulParse = <T>(schema: MinimalSchema<T>, data: unknown[]): T[] => {
  return data.reduce<T[]>((acc, item) => {
    const result = schema.safeParse(item);

    if (result.success) {
      acc.push(result.data);
    } else {
      console.warn("Parsing failed for item:", item, result.error);
    }
    return acc;
  }, []);
};
