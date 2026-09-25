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
  "BTS_7": ""
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
      description: "High-impact vertical commercial campaign cut engineered for mobile brand awareness and rich visual contrast.",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-1",
      title: "Chennai Silks — Commercial Master",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_1", "BRAND%20SHOOT/chennai_silks_1.mp4"),
      thumbnailUrl: "",
      description: "Full widescreen brand film focusing on elegant fabric movement, vibrant color pop, and cinematic rhythm.",
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-2",
      title: "Chennai Silks — Campaign Cut 2",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_2", "BRAND%20SHOOT/chennai_silks_2.mp4"),
      thumbnailUrl: "",
      description: "Fast-paced retail promotional edit with sharp visual cuts, sound design overlays, and brand lower thirds.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-4",
      title: "Chennai Silks — Campaign Cut 4",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_4", "BRAND%20SHOOT/chennai_silks_4.mp4"),
      thumbnailUrl: "",
      description: "High-contrast silk commercial with synchronized Foley audio mixing and smooth speed ramping.",
      tools: ["Premiere Pro", "Audition"],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-5",
      title: "Chennai Silks — Campaign Cut 5",
      category: "Commercials",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_5", "BRAND%20SHOOT/chennai_silks_5.mp4"),
      thumbnailUrl: "",
      description: "Cinematic commercial showcase highlighting fabric detail, warm lighting tones, and brand positioning.",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      client: "Chennai Silks"
    },

    // ─── COLOR GRADING ───
    {
      id: "proj-cs-3",
      title: "Chennai Silks — Cinematic Color Grade",
      category: "Color",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_3", "BRAND%20SHOOT/chennai_silks_3.mp4"),
      thumbnailUrl: "",
      description: "LOG to Rec.709 color grade transform emphasizing natural skin tone preservation and rich jewel tones.",
      tools: ["DaVinci Resolve", "Lumetri Color"],
      client: "Chennai Silks"
    },

    // ─── YOUTUBE EDITING ───
    {
      id: "proj-tm-1",
      title: "Think Music — Studio Edit Master",
      category: "YouTube",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_1", "BRAND%20SHOOT/think_music_1.mp4"),
      thumbnailUrl: "",
      description: "High-retention long-form edit featuring dynamic visual hooks, narrative pacing, and music track alignment.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Think Music"
    },
    {
      id: "proj-tm-2",
      title: "Think Music — Content Edit 2",
      category: "YouTube",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_2", "BRAND%20SHOOT/think_music_2.mp4"),
      thumbnailUrl: "",
      description: "Engaging studio session cut engineered with pattern interrupts, zoom cuts, and crisp dialogue balance.",
      tools: ["Premiere Pro", "Audition"],
      client: "Think Music"
    },
    {
      id: "proj-tm-3",
      title: "Think Music — Content Edit 3",
      category: "YouTube",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("THINK_MUSIC_3", "BRAND%20SHOOT/think_music_3.mp4"),
      thumbnailUrl: "",
      description: "Fast-moving music feature edit with graphic popups, lower-third titles, and visual progression.",
      tools: ["Premiere Pro", "Photoshop"],
      client: "Think Music"
    },

    // ─── REELS & SHORTS ───
    {
      id: "proj-bts-1",
      title: "BTS Creative Short — Reel 1",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_1", "BRAND%20SHOOT/bts_reel_1.mp4"),
      thumbnailUrl: "",
      description: "Ultra-fast vertical 9:16 short with kinetic beat sync, whip transitions, and sound effect accents.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-2",
      title: "BTS Creative Short — Reel 2",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_2", "BRAND%20SHOOT/bts_reel_2.mp4"),
      thumbnailUrl: "",
      description: "Behind-the-scenes vertical edit engineered for instant viewer hook retention within the first 3 seconds.",
      tools: ["Premiere Pro"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-3",
      title: "BTS Creative Short — Reel 3",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_3", "BRAND%20SHOOT/bts_reel_3.mp4"),
      thumbnailUrl: "",
      description: "Rhythmic short-form cut with dynamic zoom transitions and stylized text overlays.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-4",
      title: "BTS Creative Short — Reel 4",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_4", "BRAND%20SHOOT/bts_reel_4.mp4"),
      thumbnailUrl: "",
      description: "High-impact short-form edit tailored for Instagram Reels and YouTube Shorts discovery.",
      tools: ["Premiere Pro"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-5",
      title: "BTS Creative Short — Reel 5",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_5", "BRAND%20SHOOT/bts_reel_5.mp4"),
      thumbnailUrl: "",
      description: "Cinematic vertical cut focusing on lighting mood, motion flow, and clean audio mixing.",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-6",
      title: "BTS Creative Short — Reel 6",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_6", "BRAND%20SHOOT/bts_reel_6.mp4"),
      thumbnailUrl: "",
      description: "Snappy short-form edit featuring sound design layering and rapid scene cuts.",
      tools: ["Premiere Pro"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-7",
      title: "BTS Creative Short — Reel 7",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_7", "BRAND%20SHOOT/bts_reel_7.mp4"),
      thumbnailUrl: "",
      description: "Fluid short-form edit combining kinetic captions, color grading, and audio polish.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Brand BTS"
    },

    // ─── MOTION GRAPHICS ───
    {
      id: "proj-mg-1",
      title: "Kinetic Motion & Title Suite",
      category: "Motion Graphics",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_1", "BRAND%20SHOOT/chennai_silks_1.mp4"),
      thumbnailUrl: "",
      description: "Custom 2D/3D motion graphics package featuring kinetic text typography, logo reveals, and callouts.",
      tools: ["After Effects", "Cinema 4D"],
      client: "CLARA Studio"
    },

    // ─── AI-ASSISTED PRODUCTION ───
    {
      id: "proj-ai-1",
      title: "AI-Assisted Visual Grade & Upscale",
      category: "AI-Assisted",
      aspectRatio: "16:9",
      videoUrl: getBlobUrl("CHENNAI_SILKS_2", "BRAND%20SHOOT/chennai_silks_2.mp4"),
      thumbnailUrl: "",
      description: "Post-production pipeline combining Topaz Video AI upscaling, AI voice isolation, and Midjourney texture overlays.",
      tools: ["Topaz AI", "ElevenLabs", "Premiere Pro"],
      client: "CLARA Studio"
    },

    // ─── SUBTITLES & LOCALIZATION ───
    {
      id: "proj-sub-1",
      title: "High-Retention Kinetic Subtitles",
      category: "Subtitles",
      aspectRatio: "9:16",
      videoUrl: getBlobUrl("BTS_1", "BRAND%20SHOOT/bts_reel_1.mp4"),
      thumbnailUrl: "",
      description: "Animated word-by-word kinetic captions with color highlight cues, emoji popups, and sound effect triggers.",
      tools: ["After Effects", "Premiere Pro"],
      client: "CLARA Studio"
    }
  ]
};
