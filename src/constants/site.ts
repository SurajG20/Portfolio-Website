export type NavigationItem = {
  name: string;
  path: string;
};

export const SITE = {
  name: "Suraj Goswami",
  title: "Full Stack & Blockchain Developer",
  description:
    "Full Stack & Blockchain Developer — event-driven systems, real-time apps, and Web3 (TON, EVM, Solana).",
  url: "https://surajgoswami.dev",
  defaultImage: "/default-og-image.jpg",
} as const;

export const NAVIGATION: {
  main: NavigationItem[];
} = {
  main: [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Notes", path: "/notes" },
    { name: "Bookmarks", path: "/bookmarks" },
    { name: "Experience", path: "/experience" },
  ],
} as const;

export const CONTENT = {
  postsPerPage: 10,
  recentPostsLimit: 3,
  featuredProjectsLimit: 3,
} as const;

export const META = {
  openGraph: {
    type: "website",
    locale: "en_US",
  },
  twitter: {
    cardType: "summary_large_image",
  },
} as const;
