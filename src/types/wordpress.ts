// WordPress content types with ACF fields support

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  slug: string;
  status: string;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  acf?: {
    [key: string]: any;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls: {
        [size: string]: string;
      };
    }>;
  };
}

export interface TestPost extends WordPressPost {
  acf?: {
    test_type: 'Medical' | 'Engineering' | 'General' | 'Other';
    test_difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    test_duration: string;
    eligibility_criteria: string;
    exam_date: string;
    application_deadline: string;
    official_website: string;
    fee_structure: string;
    passing_criteria: string;
    passing_c?: string;
    syllabus_outline: string;
    preparation_tips: string;
    important_dates: Array<{
      event: string;
      date: string;
    }>;
  };
}

export interface BlogPost extends WordPressPost {
  acf?: {
    reading_time: number;
    featured_snippet: string;
    related_tests: string[];
    author_bio: string;
    meta_title: string;
    meta_description: string;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface AdSpace {
  id: string;
  position: 'header' | 'sidebar' | 'article-top' | 'article-middle' | 'article-bottom' | 'footer';
  size: '728x90' | '300x250' | '336x280' | '970x250' | 'responsive';
  isActive: boolean;
}
