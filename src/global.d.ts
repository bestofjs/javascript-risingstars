declare namespace RisingStars {
  type Project = {
    created_at: string;
    delta: number;
    description: string;
    full_name: string;
    icon: string;
    monthly: number[];
    name: string;
    owner_id: number;
    overrideSlugInComments?: string; //TODO refactor to use Project schema as the source of truth
    repository: string;
    slug: string;
    stars: number;
    tags: string;
    url: string;
  };

  type Entities = Map<string, Project>;

  type Tag = {
    name: string;
    code: string;
  };

  type ProjectsByCategory = { [category: string]: RisingStars.Project[] };

  type Category = {
    key: string;
    count?: number;
    limit?: number;
    tags?: string[];
    excluded?: Project["slug"][];
    guest?: string;
    availableComments?: string[];
  };

  type Language = {
    code: string;
    text: string;
  };

  type IntlContent = {
    [key: string]: string; // markdown content or raw text from messages folder
  };
}
