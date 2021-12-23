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
    repository: string;
    slug: string;
    stars: number;
    tags: string;
    url: string;
  };

  type Entities = {
    [key: string]: Project;
  };

  type ProjectsByCategory = { [category: string]: RisingStars.Project[] };

  type Category = {
    key: string;
    count: number;
    limit?: number;
    tags?: string[];
    excluded?: Project["slug"][];
    guest?: string;
    availableComments?: string[];
    disabled?: boolean;
  };

  type Language = {
    code: string;
    text: string;
  };

  type IntlContent = {
    [key: string]: string; // markdown content or raw text from messages folder
  };
}
