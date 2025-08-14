const baseUrl = "/";
const baseTeamUrl = "/um-stodir/";
const baseInvestingUrl = "/fjarfestingar/";

export const paths = {
  home: baseUrl,
  strategy: `${baseUrl}stefna`,
  staff: `${baseTeamUrl}starfsfolk`,
  board: `${baseTeamUrl}stjorn`,
  about: `${baseTeamUrl}um-stodir`,
  news: `${baseTeamUrl}frettir`,
  investments: `${baseUrl}fjarfestingar`,
  annualReport: `${baseInvestingUrl}arsreikningar-og-uppgjor`,
  market: `${baseInvestingUrl}markadsupplysingar`,
  notification: `${baseInvestingUrl}Kauphallartilkynningar`,
  calendar: `${baseInvestingUrl}fjarhagsdagatal`,
  shareholders: `${baseInvestingUrl}staerstu-hluthafar`,
  shareholderMeeting: `${baseInvestingUrl}hluthafafundir`,
};

export const generatePath = (basePath: string, slug?: string) => {
  return `${basePath}${slug ? `/${slug}` : ""}`;
};
