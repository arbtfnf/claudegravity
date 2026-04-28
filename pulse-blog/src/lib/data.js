export const DB_POSTS = [
  {
    id: 1,
    title: "The Heartbeat of Equity: Fixing the Healthcare Divide",
    slug: "/posts/healthcare-revolution",
    date: "April 28, 2026",
    category: "Medical",
    tags: ["Social", "Healthcare"],
    excerpt: "Exploring the gap between India and US systems and our initiative to fix the geographic lottery.",
    youtubeVideo: {
      title: "The Geographic Lottery: Indian Healthcare vs US",
      thumbnail: "/video-thumb.png",
      url: "https://www.youtube.com/results?search_query=Pulse+Initiatives+Healthcare+Divide"
    }
  },
  {
    id: 2,
    title: "Scaling Referral Protocols for Rural India",
    slug: "/tech/scaling-referral-systems",
    date: "April 27, 2026",
    category: "Tech",
    tags: ["Progressive", "Infrastructure"],
    excerpt: "A deep dive into the decentralized architecture needed to connect 600,000 villages.",
    youtubeVideo: null
  },
  {
    id: 3,
    title: "Digital Privacy in the Age of Health Insurance",
    slug: "/posts/healthcare-revolution", 
    date: "April 26, 2026",
    category: "Medical",
    tags: ["Responsible", "Data"],
    excerpt: "How we can build trust-less verification systems to prevent insurance fraud.",
    youtubeVideo: null
  },
  {
    id: 4,
    title: "The 10,000 Step Initiative: Gamifying Community Movement",
    slug: "/posts/healthcare-revolution", 
    date: "April 29, 2026",
    category: "Fitness",
    tags: ["Physical", "AR"],
    excerpt: "Using AR technology to incentivize entire neighborhoods to hit their daily movement goals.",
    youtubeVideo: null
  },
  {
    id: 5,
    title: "Community Kitchens: Tech-Enabled Nutrition Routing",
    slug: "/posts/healthcare-revolution", 
    date: "April 30, 2026",
    category: "Social",
    tags: ["Nutrition", "Logistics"],
    excerpt: "How predictive modeling is helping route excess restaurant food to local community kitchens.",
    youtubeVideo: null
  }
];

export async function getPosts() {
  return DB_POSTS;
}
