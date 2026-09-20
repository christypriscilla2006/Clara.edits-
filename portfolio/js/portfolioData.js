/**
 * PORTFOLIO CENTRAL DATA CONFIGURATION
 * CLARA — Visuals Beyond Ordinary
 *
 * Server runs from parent directory: BRAND SHOOT-20260915T183958Z-1-001/
 * So video paths start with: BRAND SHOOT/filename.MP4
 * Portfolio served at: http://localhost:8000/portfolio/index.html
 */

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
      availability: "Freelance",
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

  // NOTE: All paths are relative to the portfolio/index.html file location.
  // Server root = BRAND SHOOT-20260915T183958Z-1-001/
  // portfolio is at: portfolio/index.html
  // videos are at:   BRAND SHOOT/filename.MP4
  // So relative path from portfolio/index.html → ../BRAND SHOOT/filename.MP4

  projects: [
    // ─── CHENNAI SILKS — Brand Commercial (Social Media) ───
    {
      id: "proj-cs-1",
      title: "Chennai Silks — Brand Commercial",
      category: "Social Media",
      aspectRatio: "16:9",
      videoUrl: "../BRAND SHOOT/CHENNAI SILKS.MP4",
      thumbnailUrl: "",
      description: "Hero brand commercial edit for Chennai Silks — crisp cuts, color correction, premium pacing for a luxury textile brand.",
      tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-2",
      title: "Chennai Silks — Campaign Cut 2",
      category: "Social Media",
      aspectRatio: "16:9",
      videoUrl: "../BRAND SHOOT/CHENNAI SILKS(1).MP4",
      thumbnailUrl: "",
      description: "Second campaign variation — alternate pacing and color mood for Chennai Silks brand shoot.",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-3",
      title: "Chennai Silks — Campaign Cut 3",
      category: "Color Grading",
      aspectRatio: "16:9",
      videoUrl: "../BRAND SHOOT/CHENNAI SILKS(2).MP4",
      thumbnailUrl: "",
      description: "Deep cinematic color grade pass — LOG to Rec.709 with rich warm tones and luxury feel for textiles.",
      tools: ["DaVinci Resolve", "Lumetri Color"],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-4",
      title: "Chennai Silks — Campaign Cut 4",
      category: "Social Media",
      aspectRatio: "16:9",
      videoUrl: "../BRAND SHOOT/CHENNAI SILKS(3).MP4",
      thumbnailUrl: "",
      description: "Full-length commercial production cut showcasing fabric details, movement, and lifestyle styling.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Chennai Silks"
    },
    {
      id: "proj-cs-5",
      title: "Chennai Silks — Campaign Cut 5",
      category: "Social Media",
      aspectRatio: "16:9",
      videoUrl: "../BRAND SHOOT/CHENNAI SILKS(4).MP4",
      thumbnailUrl: "",
      description: "Final campaign variant — fast-hook version optimized for social media ad placements.",
      tools: ["Premiere Pro", "Lumetri Color"],
      client: "Chennai Silks"
    },

    // ─── THINK MUSIC — YouTube Editing ───
    {
      id: "proj-tm-1",
      title: "Think Music — Main Edit",
      category: "YouTube Editing",
      aspectRatio: "16:9",
      videoUrl: "../BRAND SHOOT/Think music.mp4",
      thumbnailUrl: "",
      description: "Full-length YouTube edit for Think Music — high-retention cuts, beat-sync transitions, and visual storytelling aligned to the track.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Think Music"
    },
    {
      id: "proj-tm-2",
      title: "Think Music — Edit 2",
      category: "YouTube Editing",
      aspectRatio: "16:9",
      videoUrl: "../BRAND SHOOT/Think music(1).mp4",
      thumbnailUrl: "",
      description: "Second YouTube cut for Think Music — alternate pacing with pattern interrupts and graphic overlays.",
      tools: ["Premiere Pro", "Adobe Audition"],
      client: "Think Music"
    },
    {
      id: "proj-tm-3",
      title: "Think Music — Edit 3",
      category: "YouTube Editing",
      aspectRatio: "16:9",
      videoUrl: "../BRAND SHOOT/THINK MUSIC(2).MP4",
      thumbnailUrl: "",
      description: "Third Think Music YouTube cut — clean pacing with lower thirds and animated text overlays.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Think Music"
    },

    // ─── BTS REELS — Vertical 9:16 Short-Form ───
    {
      id: "proj-bts-1",
      title: "BTS Creative Reel — 1",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: "../BRAND SHOOT/BE55BE68-DCFF-4C30-AB93-ADCD7BE40A41.MP4",
      thumbnailUrl: "",
      description: "Fast-paced vertical BTS reel — dynamic transitions and sound-sync cuts.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-2",
      title: "BTS Creative Reel — 2",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: "../BRAND SHOOT/1E5C5A1A-748C-485B-AB33-DFA66409E512.MP4",
      thumbnailUrl: "",
      description: "Vertical BTS clip — kinetic pacing with quick scene transitions for Instagram Reels.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-3",
      title: "BTS Creative Reel — 3",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: "../BRAND SHOOT/26A17755-2E33-4AE9-AC76-B71F839FA6C9.MP4",
      thumbnailUrl: "",
      description: "Short-form BTS vertical cut — clean transitions and natural behind-the-scenes documentary style.",
      tools: ["Premiere Pro"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-4",
      title: "BTS Creative Reel — 4",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: "../BRAND SHOOT/B8BE5A3C-0CE5-4F82-BE6F-3CFB75A4F44C.MP4",
      thumbnailUrl: "",
      description: "Vertical BTS reel — immersive on-set footage with fast rhythm-matched editing.",
      tools: ["Premiere Pro", "After Effects"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-5",
      title: "BTS Creative Reel — 5",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: "../BRAND SHOOT/BE12E41D-63EB-41E9-91A9-C9D24F4DF3AF.MP4",
      thumbnailUrl: "",
      description: "Ultra-short vertical BTS clip — punchy hook-first edit designed for Reels/Shorts.",
      tools: ["Premiere Pro"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-6",
      title: "BTS Creative Reel — 6",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: "../BRAND SHOOT/DF2C2FD4-CCAF-4B2E-AFFE-618B36EE4C58.MP4",
      thumbnailUrl: "",
      description: "Sixth BTS vertical reel — cinematic behind-the-scenes moments with color grading.",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      client: "Brand BTS"
    },
    {
      id: "proj-bts-7",
      title: "BTS Creative Reel — 7",
      category: "Reels & Shorts",
      aspectRatio: "9:16",
      videoUrl: "../BRAND SHOOT/WhatsApp Video 2026-09-17 at 11.55.09 (1).mp4",
      thumbnailUrl: "",
      description: "Quick-cut BTS Reel — spontaneous on-set moments edited with smooth transitions.",
      tools: ["Premiere Pro"],
      client: "Brand BTS"
    }
  ]
};
