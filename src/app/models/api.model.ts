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
    contact: any;
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
  [key: string]: ApiSection | { title: string; content: ApiSection[] }; // Added index signature
}

export interface ApiDocumentation{
  introduction?: ApiSection;
  term?: ApiSection;
  functionality?: ApiSection;
  authorization?: ApiSection;
  indentify?: ApiSection;
  sandboxSwagger?: string;
}

export interface ApiSandbox{
  sandboxUrl?: string;
}

export interface ApiTerm{
  terms: {
    title: string;
    content: ApiSection[];
  };
  generalTerm: ApiSection;
}

export interface ApiSection{
    title: string;
    content: string;
    image?: string;
}