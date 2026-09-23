/**
 * PORTFOLIO CENTRAL DATA CONFIGURATION
 * CLARA — Visuals Beyond Ordinary
 *
 * VERCEL BLOB VIDEO STORAGE MAP:
 * Upload your original HD videos directly to Vercel Blob Storage in your Vercel Dashboard,
 * then paste the generated Blob URLs into the VERCEL_BLOB_VIDEOS object below.
 */

window.VERCEL_BLOB_VIDEOS = {
  // Replace these with your actual Vercel Blob URLs after uploading to Vercel Storage
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
  "BTS_7": ""
};

function getBlobUrl(key, localFallback) {
  const blob = window.VERCEL_BLOB_VIDEOS && window.VERCEL_BLOB_VIDEOS[key];
  return (blob && blob.trim() !== "") ? blob : localFallback;
}

window.PORTFOLIO_DATA = {
  profile: {
    name: "CLARA",
    title: "PREMIERE PRO & MOTION GRAPHICS SPECIALIST",
    tagline: "SHARP & INTENTIONAL VISUAL STORYTELLING",
    bio: "Clara — 2.5+ years of experience in high-impact video editing, kinetic motion graphics, and sharp visual storytelling. Crafting clean, elegant, and retention-driven post-production for brands & creators.",
    logo: "clara_logo.png",
    stats: {
      experience: "2.5+ YRS",
      location: "Chennai",
      availability: "Freelance & In-House",
      viewsGenerated: "10M+",
      avgRetention: "68%",
      projectsDelivered: "150+"
    },
    contact: {
      email: "clara.edit2904@gmail.com",
      phone1: "+91 73584 99043",
      phone2: "+91 93635 62810"
    }
  },

  categories: [
    "YouTube Editing",
    "Reels & Shorts",
    "Motion Graphics",
    "AI Content Production",
    "Color Grading",
    "Subtitle Animation",
    "Social Media"
  ],

  projects: [
    // ─── CHENNAI SILKS — Campaign Cut (Featured First) ───
    {
      id: "proj-cs-0",
      title: "Chennai Silks — Campaign Cut",
      category: "Social Media",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("CHENNAI_SILKS_CAMPAIGN", "/BRAND SHOOT/WhatsApp Video 2026-09-22 at 16.56.05.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Chennai Silks"
    },
    // ─── CHENNAI SILKS — Brand Commercial (Social Media) ───
    {
      id: "proj-cs-1",
      title: "Chennai Silks — Brand Commercial",
      category: "Social Media",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_1", "/BRAND SHOOT/CHENNAI SILKS.MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-2",
      title: "Chennai Silks — Campaign Cut 2",
      category: "Social Media",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_2", "/BRAND SHOOT/CHENNAI SILKS(1).MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-3",
      title: "Chennai Silks — Campaign Cut 3",
      category: "Color Grading",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_3", "/BRAND SHOOT/CHENNAI SILKS(2).MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-4",
      title: "Chennai Silks — Campaign Cut 4",
      category: "Social Media",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_4", "/BRAND SHOOT/CHENNAI SILKS(3).MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-5",
      title: "Chennai Silks — Campaign Cut 5",
      category: "Social Media",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_5", "/BRAND SHOOT/CHENNAI SILKS(4).MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Chennai Silks"
    },

    // ─── THINK MUSIC — YouTube Editing ───
    {
      id: "proj-tm-1",
      title: "Think Music — Main Edit",
      category: "YouTube Editing",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_1", "/BRAND SHOOT/Think music.mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Think Music"
    },
    {
      id: "proj-tm-2",
      title: "Think Music — Edit 2",
      category: "YouTube Editing",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_2", "/BRAND SHOOT/Think music(1).mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Think Music"
    },
    {
      id: "proj-tm-3",
      title: "Think Music — Edit 3",
      category: "YouTube Editing",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_3", "/BRAND SHOOT/THINK MUSIC(2).MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Think Music"
    },

    // ─── BTS REELS — Vertical 9:16 Short-Form ───
    {
      id: "proj-bts-1",
      title: "BTS Creative Reel — 1",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_1", "/BRAND SHOOT/BE55BE68-DCFF-4C30-AB93-ADCD7BE40A41.MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-2",
      title: "BTS Creative Reel — 2",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_2", "/BRAND SHOOT/1E5C5A1A-748C-485B-AB33-DFA66409E512.MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-3",
      title: "BTS Creative Reel — 3",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_3", "/BRAND SHOOT/26A17755-2E33-4AE9-AC76-B71F839FA6C9.MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-4",
      title: "BTS Creative Reel — 4",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_4", "/BRAND SHOOT/B8BE5A3C-0CE5-4F82-BE6F-3CFB75A4F44C.MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-5",
      title: "BTS Creative Reel — 5",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_5", "/BRAND SHOOT/BE12E41D-63EB-41E9-91A9-C9D24F4DF3AF.MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-6",
      title: "BTS Creative Reel — 6",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_6", "/BRAND SHOOT/DF2C2FD4-CCAF-4B2E-AFFE-618B36EE4C58.MP4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-7",
      title: "BTS Creative Reel — 7",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_7", "/BRAND SHOOT/WhatsApp Video 2026-09-17 at 11.55.09 (1).mp4"),
      thumbnailUrl: "",
      description: "",
      tools: [],
      client: "Brand BTS"
    }
  ]
};
