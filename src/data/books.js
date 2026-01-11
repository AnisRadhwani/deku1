export const books = [
  {
    id: "100m-money-models",
    title: "100M Money Models",
    author: "Alex Hormozi",
    year: 2023,
    pages: 320,
    rating: 4.7,
    ratingsCount: "1.2M+",
    price: 24.99,
    cover: "/books/100M money models.jpg",
    audio: "/books/100M money models.mp3",
    audioDuration: "12 minutes",
    genres: ["Business", "Finance", "Entrepreneurship"],
    series: null,
    description: "Discover 100 proven money-making models that successful entrepreneurs use to build wealth and scale their businesses.",
    plotSummary: [
      {
        title: "Introduction to Money Models",
        content: "Alex Hormozi introduces the concept of money models and how they can transform your business approach. Learn the fundamentals of creating scalable revenue streams."
      },
      {
        title: "The 100 Models Breakdown",
        content: "A comprehensive breakdown of 100 different money-making models, each with real-world examples and implementation strategies."
      }
    ],
    isBestseller: true
  },
  {
    id: "a-dance-with-dragons",
    title: "A Dance with Dragons",
    author: "George R. R. Martin",
    year: 2011,
    pages: 1125,
    rating: 4.58,
    ratingsCount: "2.0M+",
    price: 18.99,
    cover: "/books/A dance with dragons.jpeg",
    audio: "/books/A Dance with Dragons by George R. R. Martin.mp3",
    audioDuration: "48 minutes",
    genres: ["Fantasy", "Epic Fantasy", "Medieval"],
    series: "A Song of Ice and Fire #5",
    description: "The fifth volume in the epic fantasy series A Song of Ice and Fire, continuing the intricate political and magical struggles in the Seven Kingdoms.",
    plotSummary: [
      {
        title: "The North Remembers",
        content: "In the North, Stannis Baratheon continues his campaign while Jon Snow faces challenges as Lord Commander of the Night's Watch."
      },
      {
        title: "Dragons and Daenerys",
        content: "Daenerys Targaryen struggles to rule Meereen while her dragons grow increasingly difficult to control."
      }
    ],
    isBestseller: true
  },
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    author: "Chugong",
    year: 2016,
    pages: 280,
    rating: 4.65,
    ratingsCount: "3.5M+",
    price: 16.99,
    cover: "/books/solo leveling.jpg",
    audio: "/books/Solo Leveling .mp3",
    audioDuration: "18 minutes",
    genres: ["Fantasy", "Action", "Adventure", "Manhwa"],
    series: "Solo Leveling #1",
    description: "In a world where hunters with special abilities fight monsters, Sung Jin-Woo starts as the weakest hunter but discovers a unique power that changes everything.",
    plotSummary: [
      {
        title: "The Weakest Hunter",
        content: "Sung Jin-Woo is known as the weakest E-rank hunter, barely surviving each dungeon raid. His life changes when he's trapped in a mysterious double dungeon."
      },
      {
        title: "The System Awakens",
        content: "After surviving the dungeon, Jin-Woo awakens to a mysterious system that allows him to level up and become stronger, defying all known rules of the hunter world."
      }
    ],
    isBestseller: true
  },
  {
    id: "the-subtle-art",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    year: 2016,
    pages: 224,
    rating: 4.11,
    ratingsCount: "4.2M+",
    price: 14.99,
    cover: "/books/The Subtle ART of not giving a fuck.jpg",
    audio: "/books/The Subtle Art Of Not Giving A F.mp3",
    audioDuration: "14 minutes",
    genres: ["Self-Help", "Philosophy", "Personal Development"],
    series: null,
    description: "A counterintuitive approach to living a good life, focusing on what truly matters and letting go of the rest.",
    plotSummary: [
      {
        title: "Don't Try",
        content: "Mark Manson challenges the conventional self-help advice of positive thinking, arguing that we should focus on what truly matters to us."
      },
      {
        title: "Happiness is a Problem",
        content: "The book explores how our constant pursuit of happiness often leads to unhappiness, and how accepting problems can lead to a better life."
      }
    ],
    isBestseller: true
  }
];

export const getBookById = (id) => {
  return books.find(book => book.id === id);
};

