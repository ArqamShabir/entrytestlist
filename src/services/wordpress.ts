// WordPress API integration service
// Replace BASE_URL with your actual WordPress site URL when ready

import { WordPressPost, TestPost, BlogPost, WordPressCategory } from '@/types/wordpress';
import { staticBlogs } from '@/data/blogs';

const BASE_URL = 'https://lightgoldenrodyellow-wildcat-247174.hostingersite.com/wp-json/wp/v2';

export class WordPressService {
  private static async request(endpoint: string, options?: RequestInit) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('WordPress API request failed:', error);
      throw error;
    }
  }

  // Get all posts with ACF fields
  static async getPosts(params: {
    per_page?: number;
    page?: number;
    categories?: number[];
    search?: string;
  } = {}): Promise<WordPressPost[]> {
    const queryParams = new URLSearchParams();
    
    if (params.per_page) queryParams.append('per_page', params.per_page.toString());
    if (params.page) queryParams.append('page', params.page.toString());
    if (params.categories?.length) queryParams.append('categories', params.categories.join(','));
    if (params.search) queryParams.append('search', params.search);
    
    // Include ACF fields and featured media
    queryParams.append('_embed', '1');
    queryParams.append('acf_format', 'standard');

    return this.request(`/posts?${queryParams.toString()}`);
  }

  // Get posts by category (for separating tests from blog posts)
  static async getPostsByCategory(categorySlug: string, params: {
    per_page?: number;
    page?: number;
    search?: string;
  } = {}): Promise<WordPressPost[]> {
    // First get the category ID
    const categories = await this.getCategories();
    const category = categories.find(cat => cat.slug === categorySlug);
    
    if (!category) {
      throw new Error(`Category '${categorySlug}' not found`);
    }

    return this.getPosts({
      ...params,
      categories: [category.id]
    });
  }

  // Get test posts (tests have category slug 'tests')
  static async getTests(params: {
    per_page?: number;
    page?: number;
    search?: string;
  } = {}): Promise<TestPost[]> {
    return this.getPostsByCategory('tests', params) as Promise<TestPost[]>;
  }

  // Get blog posts (only category slug 'blog')
  static async getBlogPosts(params: {
    per_page?: number;
    page?: number;
    search?: string;
  } = {}): Promise<BlogPost[]> {
    let result = [...staticBlogs];
    if (params.search) {
      const s = params.search.toLowerCase();
      result = result.filter(b => b.title.rendered.toLowerCase().includes(s) || b.content.rendered.toLowerCase().includes(s));
    }
    const page = params.page || 1;
    const per_page = params.per_page || 10;
    const start = (page - 1) * per_page;
    return result.slice(start, start + per_page);
  }

  // Get single post by slug
  static async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    const staticBlog = staticBlogs.find(b => b.slug === slug);
    if (staticBlog) return staticBlog;

    try {
      const posts = await this.request(`/posts?slug=${slug}&_embed=1&acf_format=standard`);
      return posts.length > 0 ? posts[0] : null;
    } catch (error) {
      console.error('Failed to get post by slug:', error);
      return null;
    }
  }

  // Get categories
  static async getCategories(): Promise<WordPressCategory[]> {
    return this.request('/categories?per_page=100');
  }

  // Get featured media/image by ID
  static async getFeaturedMedia(mediaId: number) {
    try {
      return await this.request(`/media/${mediaId}`);
    } catch (error) {
      console.error('Failed to get featured media:', error);
      return null;
    }
  }

  // Search functionality
  static async searchContent(query: string, params: {
    per_page?: number;
    page?: number;
  } = {}): Promise<WordPressPost[]> {
    return this.getPosts({
      ...params,
      search: query
    });
  }
}

// Helper functions for ACF fields
export const getACFField = (post: WordPressPost, fieldName: string) => {
  return post.acf?.[fieldName] || null;
};

export const getFeaturedImage = (post: WordPressPost) => {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
};

export const getAuthor = (post: WordPressPost) => {
  return post._embedded?.author?.[0] || null;
};

// WordPress configuration for ACF fields
export const ACF_FIELDS = {
  TEST: {
    test_type: 'test_type',
    test_difficulty: 'test_difficulty',
    test_duration: 'test_duration',
    eligibility_criteria: 'eligibility_criteria',
    exam_date: 'exam_date',
    application_deadline: 'application_deadline',
    official_website: 'official_website',
    fee_structure: 'fee_structure',
    passing_criteria: 'passing_criteria',
    syllabus_outline: 'syllabus_outline',
    preparation_tips: 'preparation_tips',
    important_dates: 'important_dates'
  },
  BLOG: {
    reading_time: 'reading_time',
    featured_snippet: 'featured_snippet',
    related_tests: 'related_tests',
    author_bio: 'author_bio',
    meta_title: 'meta_title',
    meta_description: 'meta_description'
  }
};
