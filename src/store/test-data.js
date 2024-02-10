export const test_data = [
  {
    id: "post_1",
    title: "The Beauty of Nature",
    image_url: "https://example.com/images/nature.jpg",
    content:
      "Nature is not only all that is visible to the eye... it also includes the inner pictures of the soul.",
    author: {
      username: "nature_lover",
      avatar_url: "https://example.com/avatars/user1.png",
    },
    upvotes: 123,
    downvotes: 10,
    comments: [
      {
        id: "comment_1",
        author: {
          username: "outdoor_enthusiast",
          avatar_url: "https://example.com/avatars/user2.png",
        },
        content: "Absolutely stunning! Where was this photo taken?",
        upvotes: 5,
        downvotes: 0,
      },
      {
        id: "comment_2",
        author: {
          username: "photographer_pro",
          avatar_url: "https://example.com/avatars/user3.png",
        },
        content: "I love the composition of the light and trees!",
        upvotes: 3,
        downvotes: 0,
      },
    ],
  },
  {
    id: "post_2",
    title: "Tech News: AI Breakthrough",
    image_url: "https://example.com/images/ai_breakthrough.jpg",
    content:
      "A new AI model has been developed that can write its own code! Is this the future of programming?",
    author: {
      username: "tech_guru",
      avatar_url: "https://example.com/avatars/user4.png",
    },
    upvotes: 230,
    downvotes: 5,
    comments: [
      {
        id: "comment_3",
        author: {
          username: "skeptic_101",
          avatar_url: "https://example.com/avatars/user5.png",
        },
        content: "I doubt machines will ever replace human creativity.",
        upvotes: 1,
        downvotes: 3,
      },
      {
        id: "comment_4",
        author: {
          username: "ai_enthusiast",
          avatar_url: "https://example.com/avatars/user6.png",
        },
        content: "This is revolutionary! The possibilities are endless!",
        upvotes: 4,
        downvotes: 0,
      },
    ],
  },
  {
    id: "post_3",
    title: "Homemade Sourdough Bread",
    image_url: "https://example.com/images/sourdough.jpg",
    content:
      "I've been perfecting my sourdough bread recipe for months, and I think I've finally nailed it!",
    author: {
      username: "baking_addict",
      avatar_url: "https://example.com/avatars/user7.png",
    },
    upvotes: 85,
    downvotes: 2,
    comments: [
      {
        id: "comment_5",
        author: {
          username: "foodie",
          avatar_url: "https://example.com/avatars/user8.png",
        },
        content: "That crust looks incredible! Care to share the recipe?",
        upvotes: 6,
        downvotes: 0,
      },
      {
        id: "comment_6",
        author: {
          username: "gluten_free",
          avatar_url: "https://example.com/avatars/user9.png",
        },
        content: "Looks delicious, but do you have a gluten-free version?",
        upvotes: 2,
        downvotes: 1,
      },
    ],
  },
];
