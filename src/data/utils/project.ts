export interface MasonryImage {
  image: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  date: Date;
  masonryImage: MasonryImage;

  name: string;
  shortDescription: string;

  offsiteRedirect: string;
}
