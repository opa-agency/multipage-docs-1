// Static blog data to replace Sanity CMS

export const categories = [
  {
    _id: 'product',
    title: 'Product',
    slug: 'product',
    description: 'Product updates and announcements',
  },
  {
    _id: 'company',
    title: 'Company',
    slug: 'company',
    description: 'Company news and culture',
  },
  {
    _id: 'engineering',
    title: 'Engineering',
    slug: 'engineering',
    description: 'Technical articles and insights',
  },
  {
    _id: 'design',
    title: 'Design',
    slug: 'design',
    description: 'Design thinking and best practices',
  },
]

export const authors = [
  {
    _id: 'author-1',
    name: 'Sarah Johnson',
    slug: 'sarah-johnson',
    image: {
      url: '/team/michael-foster.jpg',
      alt: 'Sarah Johnson',
    },
  },
  {
    _id: 'author-2',
    name: 'Michael Chen',
    slug: 'michael-chen',
    image: {
      url: '/team/michael-foster.jpg',
      alt: 'Michael Chen',
    },
  },
  {
    _id: 'author-3',
    name: 'Emily Rodriguez',
    slug: 'emily-rodriguez',
    image: {
      url: '/team/dries-vincent.jpg',
      alt: 'Emily Rodriguez',
    },
  },
]

export const posts = [
  {
    _id: 'post-1',
    title: 'Building a Scalable Design System',
    slug: 'building-scalable-design-system',
    excerpt:
      'Learn how we built a design system that scales across multiple products and teams, ensuring consistency and efficiency.',
    publishedAt: '2025-01-15T10:00:00Z',
    featured: true,
    mainImage: {
      url: '/screenshots/app.png',
      alt: 'Design system components',
    },
    author: authors[0],
    categories: [categories[3]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Building a design system is one of the most impactful investments a growing company can make. In this article, we will walk through our journey of creating a scalable design system that serves multiple products and teams.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The Challenge',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'As our product suite expanded, we noticed increasing inconsistencies in our user interface. Different teams were solving the same problems in different ways, leading to a fragmented user experience and inefficient development processes.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Our Approach',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We started by auditing our existing components and identifying common patterns. This helped us understand what was working well and what needed improvement. We then established design principles that would guide all future decisions.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Key components of our design system include a comprehensive component library, detailed documentation, and automated testing to ensure quality. We also implemented a governance model to manage contributions and updates.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-2',
    title: 'Introducing Real-Time Collaboration Features',
    slug: 'introducing-real-time-collaboration',
    excerpt:
      'Discover our new real-time collaboration features that help teams work together more effectively, no matter where they are.',
    publishedAt: '2025-01-10T14:30:00Z',
    featured: true,
    mainImage: {
      url: '/screenshots/competitors.png',
      alt: 'Real-time collaboration interface',
    },
    author: authors[1],
    categories: [categories[0]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Today we are excited to announce the launch of our real-time collaboration features, designed to help distributed teams work together seamlessly.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'What is New',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Our new collaboration suite includes live cursors, real-time document editing, presence indicators, and instant notifications. These features work together to create a truly collaborative workspace.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Technical Implementation',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We built this using WebSockets for low-latency communication and operational transformation algorithms to handle concurrent edits. The system is designed to work reliably even with poor network conditions.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-3',
    title: 'Our Journey to Carbon Neutrality',
    slug: 'journey-to-carbon-neutrality',
    excerpt:
      'An inside look at how we are working towards becoming a carbon-neutral company and our commitment to sustainability.',
    publishedAt: '2025-01-05T09:00:00Z',
    featured: true,
    mainImage: {
      url: '/screenshots/networking.png',
      alt: 'Sustainability dashboard',
    },
    author: authors[2],
    categories: [categories[1]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Environmental responsibility is core to our mission. Today, we are sharing our roadmap to becoming a carbon-neutral company by 2026.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Measuring Our Impact',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The first step was understanding our carbon footprint. We conducted a comprehensive audit of our operations, from data centers to employee commutes.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Action Plan',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Our strategy includes transitioning to 100% renewable energy, optimizing our infrastructure for energy efficiency, and partnering with verified carbon offset programs.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-4',
    title: 'Optimizing Performance at Scale',
    slug: 'optimizing-performance-at-scale',
    excerpt:
      'Technical deep-dive into how we improved our application performance by 300% while handling millions of users.',
    publishedAt: '2024-12-28T11:00:00Z',
    featured: false,
    mainImage: {
      url: '/screenshots/engagement.png',
      alt: 'Performance monitoring dashboard',
    },
    author: authors[1],
    categories: [categories[2]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Performance optimization is an ongoing challenge, especially as you scale. Here is how we achieved a 300% performance improvement.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Identifying Bottlenecks',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We used advanced profiling tools to identify the most critical performance bottlenecks in our application.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-5',
    title: 'User Research: What We Learned',
    slug: 'user-research-findings',
    excerpt:
      'Key insights from our latest user research study and how they are shaping our product roadmap.',
    publishedAt: '2024-12-20T16:00:00Z',
    featured: false,
    mainImage: {
      url: '/screenshots/profile.png',
      alt: 'User research session',
    },
    author: authors[0],
    categories: [categories[3]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Understanding our users is fundamental to building great products. Here are the key findings from our recent research.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-6',
    title: 'API v3.0 Release Notes',
    slug: 'api-v3-release-notes',
    excerpt:
      'Everything you need to know about our new API version, including breaking changes and migration guide.',
    publishedAt: '2024-12-15T08:00:00Z',
    featured: false,
    author: authors[1],
    categories: [categories[2]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We are excited to announce API v3.0, our most powerful API release yet.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-7',
    title: 'Building an Inclusive Workplace',
    slug: 'building-inclusive-workplace',
    excerpt:
      'Our ongoing commitment to diversity, equity, and inclusion, and the programs we have implemented.',
    publishedAt: '2024-12-10T10:00:00Z',
    featured: false,
    author: authors[2],
    categories: [categories[1]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Creating an inclusive workplace is not just the right thing to do—it makes us better as a company.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-8',
    title: 'Security Best Practices Update',
    slug: 'security-best-practices',
    excerpt: 'Important security updates and best practices to keep your data safe.',
    publishedAt: '2024-12-05T13:00:00Z',
    featured: false,
    author: authors[1],
    categories: [categories[2]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Security is a top priority. This update outlines the latest best practices for protecting your data.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-9',
    title: 'How We Built Our Onboarding Flow',
    slug: 'building-our-onboarding-flow',
    excerpt: 'A behind-the-scenes look at how we crafted a frictionless onboarding experience.',
    publishedAt: '2024-12-01T09:30:00Z',
    featured: false,
    author: authors[0],
    categories: [categories[0]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We designed our onboarding flow to help new users get value from Radiant as quickly as possible.',
          },
        ],
        style: 'normal',
      },
    ],
  },
]

export function getFeaturedPostsData(limit = 3) {
  return posts.filter((post) => post.featured).slice(0, limit)
}

export function getCategoriesData() {
  return categories
}

export function getPostsByCategory(categorySlug, page = 1, perPage = 5) {
  let filteredPosts = categorySlug
    ? posts.filter((post) =>
        Array.isArray(post.categories)
          ? post.categories.some((category) => category.slug === categorySlug)
          : false,
      )
    : posts

  let totalPosts = filteredPosts.length
  let startIndex = (page - 1) * perPage
  let endIndex = startIndex + perPage
  let paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  return {
    posts: paginatedPosts,
    totalPosts,
  }
}

export function getPostsCount(categorySlug) {
  return categorySlug
    ? posts.filter((post) =>
        Array.isArray(post.categories)
          ? post.categories.some((category) => category.slug === categorySlug)
          : false,
      ).length
    : posts.length
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
