import { TestPost, BlogPost } from '@/types/wordpress';

export const dummyTests: TestPost[] = [
  {
    id: 1,
    title: { rendered: 'MDCAT - Medical College Admission Test' },
    content: { rendered: '<p>The Medical College Admission Test (MDCAT) is a standardized test conducted for admission to medical and dental colleges in Pakistan...</p>' },
    excerpt: { rendered: 'Complete guide to MDCAT exam pattern, syllabus, and preparation strategy for medical college admissions in Pakistan.' },
    date: '2024-01-15T00:00:00Z',
    modified: '2024-01-15T00:00:00Z',
    slug: 'mdcat-medical-college-admission-test',
    status: 'publish',
    author: 1,
    featured_media: 1,
    categories: [1],
    tags: [1, 2],
    acf: {
      test_type: 'MDCAT',
      test_difficulty: 'Advanced',
      test_duration: '3.5 hours',
      eligibility_criteria: 'FSc Pre-Medical with 60% marks',
      exam_date: '2024-09-15',
      application_deadline: '2024-08-15',
      official_website: 'https://www.pmdc.org.pk',
      fee_structure: 'PKR 3,000',
      passing_criteria: '65% aggregate score',
      syllabus_outline: 'Biology (100 MCQs), Chemistry (100 MCQs), Physics (100 MCQs), English (100 MCQs)',
      preparation_tips: 'Focus on conceptual understanding, practice past papers, time management',
      important_dates: [
        { event: 'Application Start', date: '2024-07-01' },
        { event: 'Application End', date: '2024-08-15' },
        { event: 'Exam Date', date: '2024-09-15' }
      ]
    }
  },
  {
    id: 2,
    title: { rendered: 'NAT - National Aptitude Test' },
    content: { rendered: '<p>The National Aptitude Test (NAT) is conducted by the National Testing Service Pakistan for various university admissions...</p>' },
    excerpt: { rendered: 'Everything you need to know about NAT exam pattern, registration process, and preparation guidelines.' },
    date: '2024-01-10T00:00:00Z',
    modified: '2024-01-10T00:00:00Z',
    slug: 'nat-national-aptitude-test',
    status: 'publish',
    author: 1,
    featured_media: 2,
    categories: [1],
    tags: [2, 3],
    acf: {
      test_type: 'NAT',
      test_difficulty: 'Intermediate',
      test_duration: '3 hours',
      eligibility_criteria: 'Intermediate or equivalent',
      exam_date: '2024-10-20',
      application_deadline: '2024-09-20',
      official_website: 'https://www.nts.org.pk',
      fee_structure: 'PKR 2,500',
      passing_criteria: '50% score',
      syllabus_outline: 'Analytical Reasoning, Quantitative Reasoning, Verbal Reasoning',
      preparation_tips: 'Practice logical reasoning, improve English vocabulary, solve sample papers',
      important_dates: [
        { event: 'Registration Start', date: '2024-08-01' },
        { event: 'Registration End', date: '2024-09-20' },
        { event: 'Test Date', date: '2024-10-20' }
      ]
    }
  },
  {
    id: 3,
    title: { rendered: 'GAT - Graduate Assessment Test' },
    content: { rendered: '<p>The Graduate Assessment Test (GAT) is required for admission to various graduate programs in Pakistani universities...</p>' },
    excerpt: { rendered: 'Complete preparation guide for GAT General and GAT Subject tests for graduate admissions.' },
    date: '2024-01-08T00:00:00Z',
    modified: '2024-01-08T00:00:00Z',
    slug: 'gat-graduate-assessment-test',
    status: 'publish',
    author: 1,
    featured_media: 3,
    categories: [1],
    tags: [3, 4],
    acf: {
      test_type: 'GAT',
      test_difficulty: 'Advanced',
      test_duration: '2.5 hours',
      eligibility_criteria: 'Bachelor degree (16 years)',
      exam_date: '2024-11-10',
      application_deadline: '2024-10-10',
      official_website: 'https://www.nts.org.pk',
      fee_structure: 'PKR 2,000',
      passing_criteria: '50% score',
      syllabus_outline: 'Verbal Reasoning, Quantitative Reasoning, Analytical Reasoning',
      preparation_tips: 'Strong grip on mathematics, English comprehension, analytical skills',
      important_dates: [
        { event: 'Application Period', date: '2024-09-01' },
        { event: 'Last Date to Apply', date: '2024-10-10' },
        { event: 'Test Date', date: '2024-11-10' }
      ]
    }
  }
];

export const dummyBlogs: BlogPost[] = [
  {
    id: 101,
    title: { rendered: '10 Essential Tips for MDCAT Preparation' },
    content: { rendered: '<p>Preparing for MDCAT requires strategic planning and consistent effort. Here are the top 10 tips...</p>' },
    excerpt: { rendered: 'Master MDCAT preparation with these proven strategies and study techniques from successful candidates.' },
    date: '2024-01-20T00:00:00Z',
    modified: '2024-01-20T00:00:00Z',
    slug: '10-essential-tips-mdcat-preparation',
    status: 'publish',
    author: 1,
    featured_media: 101,
    categories: [2],
    tags: [1, 5, 6],
    acf: {
      reading_time: 8,
      featured_snippet: 'Learn the most effective MDCAT preparation strategies',
      related_tests: ['MDCAT'],
      author_bio: 'Dr. Ahmed is a medical education consultant with 10 years of experience.',
      meta_title: '10 Essential MDCAT Preparation Tips | EntryTestList',
      meta_description: 'Discover proven MDCAT preparation strategies and study tips to ace your medical college admission test in Pakistan.'
    }
  },
  {
    id: 102,
    title: { rendered: 'Understanding NAT Test Pattern and Syllabus' },
    content: { rendered: '<p>The NAT test pattern has evolved over the years. Understanding the current format is crucial for success...</p>' },
    excerpt: { rendered: 'Comprehensive breakdown of NAT test pattern, marking scheme, and detailed syllabus analysis.' },
    date: '2024-01-18T00:00:00Z',
    modified: '2024-01-18T00:00:00Z',
    slug: 'understanding-nat-test-pattern-syllabus',
    status: 'publish',
    author: 1,
    featured_media: 102,
    categories: [2],
    tags: [2, 7, 8],
    acf: {
      reading_time: 6,
      featured_snippet: 'Complete guide to NAT test structure and curriculum',
      related_tests: ['NAT'],
      author_bio: 'Sarah Khan is an educational consultant specializing in aptitude tests.',
      meta_title: 'NAT Test Pattern & Syllabus Guide | EntryTestList',
      meta_description: 'Complete guide to NAT test pattern, syllabus breakdown, and preparation strategy for Pakistani university admissions.'
    }
  }
];

export const adSpaces = [
  {
    id: 'header-banner',
    position: 'header' as const,
    size: '728x90' as const,
    isActive: true
  },
  {
    id: 'sidebar-square',
    position: 'sidebar' as const,
    size: '300x250' as const,
    isActive: true
  },
  {
    id: 'article-top',
    position: 'article-top' as const,
    size: '970x250' as const,
    isActive: true
  }
];