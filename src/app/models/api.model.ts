export interface Api {
    id: string;
    name: string;
    description?: string;
    icon: string;
    version: string;
    tryItFreeLink: string;
    learnMoreLink: string;
    overview: ApiOverview;
    documentation: ApiDocumentation;
    sandbox: ApiSandbox;
    term: ApiTerm;
  }

export interface ApiOverview{
  definition: ApiSection;
  useFor: ApiSection;
  useCases: {
    title: string,
    content: ApiSection[];
  }
  caseStudies: {
    title: string;
    content: ApiSection[];
  }
}

export interface ApiDocumentation{
  introduction: ApiSection;
  howItWork: ApiSection;
  swagger: string;
}

export interface ApiSandbox{
  introduction: ApiSection;
  term: ApiSection;
  functionality: ApiSection;
  authorization: ApiSection;
  indentify: ApiSection;
  sandboxSwagger: string;
}

export interface ApiTerm{
  terms: ApiSection[];
  generalTerm: ApiSection;
}

export interface ApiSection{
    title: string;
    content: string;
    image?: string;
}