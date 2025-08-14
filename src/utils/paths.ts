const baseUrl = "/";

export const paths = {
  home: baseUrl,
  projects: `${baseUrl}projects`,
  resume: `${baseUrl}resume`,
  cv: `${baseUrl}career`,
  about: `${baseUrl}about`,
  contact: `${baseUrl}contact`,
};

export const generatePath = (basePath: string, slug?: string) => {
  return `${basePath}${slug ? `/${slug}` : ""}`;
};
