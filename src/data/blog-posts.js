// Static blog data to replace Sanity CMS

export const categories = [
  {
    _id: 'product',
    title: 'Produs',
    slug: 'product',
    description: 'Actualizări și anunțuri de produs',
  },
  {
    _id: 'company',
    title: 'Companie',
    slug: 'company',
    description: 'Noutăți și cultură organizațională',
  },
  {
    _id: 'engineering',
    title: 'Inginerie',
    slug: 'engineering',
    description: 'Articole tehnice și insight-uri',
  },
  {
    _id: 'design',
    title: 'Design',
    slug: 'design',
    description: 'Design thinking și bune practici',
  },
]

export const authors = [
  {
    _id: 'author-1',
    name: 'Sarah Johnson',
    slug: 'sarah-johnson',
    image: {
      url: '/team/emily-selman.jpg',
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
    title: 'Construirea unui sistem de design scalabil',
    slug: 'building-scalable-design-system',
    excerpt:
      'Află cum am construit un sistem de design care se scalează pe mai multe produse și echipe, asigurând consistență și eficiență.',
    publishedAt: '2025-01-15T10:00:00Z',
    featured: true,
    mainImage: {
      url: '/screenshots/app.png',
      alt: 'Componente de design system',
    },
    author: authors[0],
    categories: [categories[3]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Construirea unui sistem de design este una dintre cele mai valoroase investiții pe care le poate face o companie în creștere. În acest articol, povestim cum am creat un sistem de design scalabil care servește mai multe produse și echipe.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Provocarea',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pe măsură ce suita noastră de produse a crescut, am observat inconsistențe tot mai mari în interfață. Echipe diferite rezolvau aceleași probleme în moduri diferite, ceea ce a dus la o experiență fragmentată și procese de dezvoltare ineficiente.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Abordarea noastră',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Am început prin auditarea componentelor existente și identificarea tiparelor comune. Asta ne-a ajutat să înțelegem ce funcționa bine și ce trebuia îmbunătățit. Apoi am stabilit principii de design care să ghideze deciziile viitoare.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Componentele-cheie ale sistemului nostru includ o bibliotecă completă de componente, documentație detaliată și testare automată pentru a asigura calitatea. Am implementat și un model de guvernanță pentru a gestiona contribuțiile și actualizările.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-2',
    title: 'Lansăm funcții de colaborare în timp real',
    slug: 'introducing-real-time-collaboration',
    excerpt:
      'Descoperă noile noastre funcții de colaborare în timp real care ajută echipele să lucreze mai eficient, oriunde s-ar afla.',
    publishedAt: '2025-01-10T14:30:00Z',
    featured: true,
    mainImage: {
      url: '/screenshots/competitors.png',
      alt: 'Interfață de colaborare în timp real',
    },
    author: authors[1],
    categories: [categories[0]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Astăzi suntem încântați să anunțăm lansarea funcțiilor de colaborare în timp real, concepute pentru a ajuta echipele distribuite să lucreze fără fricțiuni.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Ce este nou',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Noua suită de colaborare include cursoare live, editare în timp real, indicatori de prezență și notificări instant. Aceste funcții creează împreună un spațiu de lucru cu adevărat colaborativ.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Implementare tehnică',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Am construit acest sistem folosind WebSockets pentru comunicare cu latență redusă și algoritmi de transformare operațională pentru editări concurente. Sistemul funcționează fiabil chiar și în condiții de rețea slabe.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-3',
    title: 'Drumul nostru către neutralitate climatică',
    slug: 'journey-to-carbon-neutrality',
    excerpt:
      'O privire din interior asupra eforturilor noastre de a deveni o companie neutră climatic și angajamentul nostru față de sustenabilitate.',
    publishedAt: '2025-01-05T09:00:00Z',
    featured: true,
    mainImage: {
      url: '/screenshots/networking.png',
      alt: 'Tablou de sustenabilitate',
    },
    author: authors[2],
    categories: [categories[1]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Responsabilitatea față de mediu este centrală misiunii noastre. Astăzi împărtășim planul nostru pentru a deveni o companie neutră climatic până în 2026.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Măsurarea impactului',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Primul pas a fost să înțelegem amprenta noastră de carbon. Am realizat un audit complet al operațiunilor, de la centrele de date la naveta angajaților.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Plan de acțiune',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Strategia noastră include trecerea la energie 100% regenerabilă, optimizarea infrastructurii pentru eficiență energetică și parteneriate cu programe verificate de compensare a carbonului.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-4',
    title: 'Optimizarea performanței la scară',
    slug: 'optimizing-performance-at-scale',
    excerpt:
      'Analiză tehnică despre cum am îmbunătățit performanța aplicației cu 300% în timp ce deserveam milioane de utilizatori.',
    publishedAt: '2024-12-28T11:00:00Z',
    featured: false,
    mainImage: {
      url: '/screenshots/engagement.png',
      alt: 'Tablou de monitorizare a performanței',
    },
    author: authors[1],
    categories: [categories[2]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Optimizarea performanței este o provocare continuă, mai ales când scalezi. Iată cum am obținut o îmbunătățire de 300% a performanței.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Identificarea blocajelor',
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Am folosit instrumente avansate de profiling pentru a identifica cele mai critice blocaje de performanță din aplicație.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-5',
    title: 'Cercetare cu utilizatori: ce am învățat',
    slug: 'user-research-findings',
    excerpt:
      'Insight-urile cheie din ultimul nostru studiu de cercetare și cum ne influențează roadmap-ul produsului.',
    publishedAt: '2024-12-20T16:00:00Z',
    featured: false,
    mainImage: {
      url: '/screenshots/profile.png',
      alt: 'Sesiune de cercetare cu utilizatori',
    },
    author: authors[0],
    categories: [categories[3]],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Înțelegerea utilizatorilor este fundamentală pentru a construi produse grozave. Iată principalele concluzii din cercetarea noastră recentă.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-6',
    title: 'Note de lansare API v3.0',
    slug: 'api-v3-release-notes',
    excerpt:
      'Tot ce trebuie să știi despre noua versiune a API-ului, inclusiv schimbări incompatibile și ghid de migrare.',
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
            text: 'Suntem încântați să anunțăm API v3.0, cea mai puternică versiune de până acum.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-7',
    title: 'Construirea unui mediu de lucru incluziv',
    slug: 'building-inclusive-workplace',
    excerpt:
      'Angajamentul nostru continuu pentru diversitate, echitate și incluziune, și programele implementate.',
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
            text: 'Crearea unui mediu de lucru incluziv nu este doar corectă—ne face o companie mai bună.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-8',
    title: 'Actualizare: bune practici de securitate',
    slug: 'security-best-practices',
    excerpt: 'Actualizări importante de securitate și bune practici pentru a-ți păstra datele în siguranță.',
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
            text: 'Securitatea este o prioritate. Această actualizare prezintă cele mai noi bune practici pentru protejarea datelor.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _id: 'post-9',
    title: 'Cum am construit fluxul de onboarding',
    slug: 'building-our-onboarding-flow',
    excerpt: 'O privire din culise asupra modului în care am creat o experiență de onboarding fără fricțiuni.',
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
            text: 'Am proiectat fluxul de onboarding pentru ca noii utilizatori să obțină valoare din Radiant cât mai repede posibil.',
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
