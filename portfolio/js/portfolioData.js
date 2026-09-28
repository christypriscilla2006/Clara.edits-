/**
 * PORTFOLIO CENTRAL DATA CONFIGURATION
 * CLARA — Video Editing & Motion Design Studio
 *
 * VERCEL BLOB VIDEO STORAGE MAP:
 * Upload original HD videos directly to Vercel Blob Storage in your Vercel Dashboard,
 * then paste the generated Blob URLs into the VERCEL_BLOB_VIDEOS map below.
 */

window.VERCEL_BLOB_VIDEOS = {
  "CHENNAI_SILKS_CAMPAIGN": "",
  "CHENNAI_SILKS_1": "",
  "CHENNAI_SILKS_2": "",
  "CHENNAI_SILKS_3": "",
  "CHENNAI_SILKS_4": "",
  "CHENNAI_SILKS_5": "",
  "THINK_MUSIC_1": "",
  "THINK_MUSIC_2": "",
  "THINK_MUSIC_3": "",
  "BTS_1": "",
  "BTS_2": "",
  "BTS_3": "",
  "BTS_4": "",
  "BTS_5": "",
  "BTS_6": "",
  "BTS_7": "",
  "WEDDING_FILM": ""
};

function getBlobUrl(key, localFallback) {
  const blob = window.VERCEL_BLOB_VIDEOS && window.VERCEL_BLOB_VIDEOS[key];
  return (blob && blob.trim() !== "") ? blob : localFallback;
}

window.PORTFOLIO_DATA = {
  profile: {
    name: "CLARA",
    title: "VIDEO EDITING & MOTION DESIGN STUDIO",
    tagline: "WE TURN RAW FOOTAGE INTO CONTENT PEOPLE ACTUALLY WANT TO WATCH.",
    bio: "CLARA is a premium post-production studio crafting retention-driven long-form edits, viral short-form clips, commercial brand films, and fluid motion design.",
    logo: "clara_logo.png",
    contact: {
      email: "clara.edit2904@gmail.com",
      businessEnquiries: "+91 73584 99043",
      whatsapp: "+91 93635 62810"
    }
  },

  categories: [
    "YouTube",
    "Reels & Shorts",
    "Commercials",
    "Motion Graphics",
    "AI-Assisted",
    "Color",
    "Subtitles"
  ],

  projects: [
    // ─── COMMERCIAL & BRAND FILMS ───
    {
      id: "proj-cs-0",
      title: "Chennai Silks — Campaign Cut",
      category: "Commercials",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("CHENNAI_SILKS_CAMPAIGN", "BRAND%20SHOOT/chennai_silks_campaign.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-cs-1",
      title: "Chennai Silks — Commercial Master",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_1", "BRAND%20SHOOT/chennai_silks_1.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-cs-2",
      title: "Chennai Silks — Campaign Cut 2",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_2", "BRAND%20SHOOT/chennai_silks_2.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-cs-4",
      title: "Chennai Silks — Campaign Cut 4",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_4", "BRAND%20SHOOT/chennai_silks_4.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-cs-5",
      title: "Chennai Silks — Campaign Cut 5",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_5", "BRAND%20SHOOT/chennai_silks_5.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },

    // ─── COLOR GRADING ───
    {
      id: "proj-cs-3",
      title: "Chennai Silks — Cinematic Color Grade",
      category: "Color",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_3", "BRAND%20SHOOT/chennai_silks_3.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },

    // ─── YOUTUBE EDITING ───
    {
      id: "proj-tm-1",
      title: "Think Music — Studio Edit Master",
      category: "YouTube",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_1", "BRAND%20SHOOT/think_music_1.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-tm-2",
      title: "Think Music — Content Edit 2",
      category: "YouTube",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_2", "BRAND%20SHOOT/think_music_2.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-tm-3",
      title: "Think Music — Content Edit 3",
      category: "YouTube",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_3", "BRAND%20SHOOT/think_music_3.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },

    // ─── REELS & SHORTS ───
    {
      id: "proj-bts-1",
      title: "BTS Creative Short — Reel 1",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_1", "BRAND%20SHOOT/bts_reel_1.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-bts-2",
      title: "BTS Creative Short — Reel 2",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_2", "BRAND%20SHOOT/bts_reel_2.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-bts-3",
      title: "BTS Creative Short — Reel 3",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_3", "BRAND%20SHOOT/bts_reel_3.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-bts-4",
      title: "BTS Creative Short — Reel 4",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_4", "BRAND%20SHOOT/bts_reel_4.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-bts-5",
      title: "BTS Creative Short — Reel 5",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_5", "BRAND%20SHOOT/bts_reel_5.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-bts-6",
      title: "BTS Creative Short — Reel 6",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_6", "BRAND%20SHOOT/bts_reel_6.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-bts-7",
      title: "Saregama Music",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_7", "BRAND%20SHOOT/bts_reel_7.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    },
    {
      id: "proj-wedding-1",
      title: "Wedding Film Cut",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("WEDDING_FILM", "BRAND%20SHOOT/wedding.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: ""
    }
  ]
};
