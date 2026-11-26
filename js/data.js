/* ============================================================
   PROJECT DATA — the November 24 session
   ------------------------------------------------------------
   55 photographs + 4 clips from the WhatsApp archive
   (WhatsApp Video 2026-11-24 at 3.26.42 PM(2).mp4 →
    WhatsApp Image 2026-11-24 at 5.26.35 PM.jpeg batch).
   Rename the project / swap the cover freely.
   ============================================================ */

const PROJECTS = [
  {
    "id": "the-november-session",
    "title": "The November Session",
    "year": "2026",
    "category": "Portraits & Fashion",
    "tags": [
      "Portraits",
      "Runway",
      "Styled"
    ],
    "description": "One evening, two worlds \u2014 a low-key studio portrait series built on shadow and a single spotlight, styled frames against raw rusted walls, and full coverage of an adire fashion showcase from the guest tables to the runway walk.",
    "cover": "images/photos/2026-11-24_012.jpg",
    "images": [
      "images/photos/2026-11-24_001.jpg",
      "images/photos/2026-11-24_002.jpg",
      "images/photos/2026-11-24_003.jpg",
      "images/photos/2026-11-24_004.jpg",
      "images/photos/2026-11-24_005.jpg",
      "images/photos/2026-11-24_006.jpg",
      "images/photos/2026-11-24_007.jpg",
      "images/photos/2026-11-24_008.jpg",
      "images/photos/2026-11-24_009.jpg",
      "images/photos/2026-11-24_010.jpg",
      "images/photos/2026-11-24_011.jpg",
      "images/photos/2026-11-24_012.jpg",
      "images/photos/2026-11-24_013.jpg",
      "images/photos/2026-11-24_014.jpg",
      "images/photos/2026-11-24_015.jpg",
      "images/photos/2026-11-24_016.jpg",
      "images/photos/2026-11-24_017.jpg",
      "images/photos/2026-11-24_018.jpg",
      "images/photos/2026-11-24_019.jpg",
      "images/photos/2026-11-24_020.jpg",
      "images/photos/2026-11-24_021.jpg",
      "images/photos/2026-11-24_022.jpg",
      "images/photos/2026-11-24_023.jpg",
      "images/photos/2026-11-24_024.jpg",
      "images/photos/2026-11-24_025.jpg",
      "images/photos/2026-11-24_026.jpg",
      "images/photos/2026-11-24_027.jpg",
      "images/photos/2026-11-24_028.jpg",
      "images/photos/2026-11-24_029.jpg",
      "images/photos/2026-11-24_030.jpg",
      "images/photos/2026-11-24_031.jpg",
      "images/photos/2026-11-24_032.jpg",
      "images/photos/2026-11-24_033.jpg",
      "images/photos/2026-11-24_034.jpg",
      "images/photos/2026-11-24_035.jpg",
      "images/photos/2026-11-24_036.jpg",
      "images/photos/2026-11-24_037.jpg",
      "images/photos/2026-11-24_038.jpg",
      "images/photos/2026-11-24_039.jpg",
      "images/photos/2026-11-24_040.jpg",
      "images/photos/2026-11-24_041.jpg",
      "images/photos/2026-11-24_042.jpg",
      "images/photos/2026-11-24_043.jpg",
      "images/photos/2026-11-24_044.jpg",
      "images/photos/2026-11-24_045.jpg",
      "images/photos/2026-11-24_046.jpg",
      "images/photos/2026-11-24_047.jpg",
      "images/photos/2026-11-24_048.jpg",
      "images/photos/2026-11-24_049.jpg",
      "images/photos/2026-11-24_050.jpg",
      "images/photos/2026-11-24_051.jpg",
      "images/photos/2026-11-24_052.jpg",
      "images/photos/2026-11-24_053.jpg",
      "images/photos/2026-11-24_054.jpg",
      "images/photos/2026-11-24_055.jpg"
    ]
  }
];

/* width/height per image (used for portrait/landscape layout) */
const IMG_META = {"images/photos/2026-11-24_001.jpg": [960, 1280], "images/photos/2026-11-24_002.jpg": [960, 1280], "images/photos/2026-11-24_003.jpg": [960, 1280], "images/photos/2026-11-24_004.jpg": [960, 1280], "images/photos/2026-11-24_005.jpg": [960, 1280], "images/photos/2026-11-24_006.jpg": [960, 1280], "images/photos/2026-11-24_007.jpg": [960, 1280], "images/photos/2026-11-24_008.jpg": [960, 1280], "images/photos/2026-11-24_009.jpg": [968, 1280], "images/photos/2026-11-24_010.jpg": [960, 1280], "images/photos/2026-11-24_011.jpg": [960, 1280], "images/photos/2026-11-24_012.jpg": [960, 1280], "images/photos/2026-11-24_013.jpg": [887, 1280], "images/photos/2026-11-24_014.jpg": [1080, 719], "images/photos/2026-11-24_015.jpg": [1280, 853], "images/photos/2026-11-24_016.jpg": [853, 1280], "images/photos/2026-11-24_017.jpg": [853, 1280], "images/photos/2026-11-24_018.jpg": [1280, 853], "images/photos/2026-11-24_019.jpg": [853, 1280], "images/photos/2026-11-24_020.jpg": [853, 1280], "images/photos/2026-11-24_021.jpg": [853, 1280], "images/photos/2026-11-24_022.jpg": [719, 1080], "images/photos/2026-11-24_023.jpg": [853, 1280], "images/photos/2026-11-24_024.jpg": [1280, 853], "images/photos/2026-11-24_025.jpg": [1064, 1280], "images/photos/2026-11-24_026.jpg": [1280, 853], "images/photos/2026-11-24_027.jpg": [1280, 853], "images/photos/2026-11-24_028.jpg": [853, 1280], "images/photos/2026-11-24_029.jpg": [1280, 853], "images/photos/2026-11-24_030.jpg": [853, 1280], "images/photos/2026-11-24_031.jpg": [972, 1280], "images/photos/2026-11-24_032.jpg": [853, 1280], "images/photos/2026-11-24_033.jpg": [853, 1280], "images/photos/2026-11-24_034.jpg": [810, 1080], "images/photos/2026-11-24_035.jpg": [810, 1080], "images/photos/2026-11-24_036.jpg": [1280, 853], "images/photos/2026-11-24_037.jpg": [1280, 853], "images/photos/2026-11-24_038.jpg": [853, 1280], "images/photos/2026-11-24_039.jpg": [853, 1280], "images/photos/2026-11-24_040.jpg": [960, 1280], "images/photos/2026-11-24_041.jpg": [960, 1280], "images/photos/2026-11-24_042.jpg": [960, 1280], "images/photos/2026-11-24_043.jpg": [960, 1280], "images/photos/2026-11-24_044.jpg": [960, 1280], "images/photos/2026-11-24_045.jpg": [960, 1280], "images/photos/2026-11-24_046.jpg": [960, 1280], "images/photos/2026-11-24_047.jpg": [960, 1280], "images/photos/2026-11-24_048.jpg": [960, 1280], "images/photos/2026-11-24_049.jpg": [960, 1280], "images/photos/2026-11-24_050.jpg": [960, 1280], "images/photos/2026-11-24_051.jpg": [960, 1280], "images/photos/2026-11-24_052.jpg": [959, 1280], "images/photos/2026-11-24_053.jpg": [960, 1280], "images/photos/2026-11-24_054.jpg": [960, 1280], "images/photos/2026-11-24_055.jpg": [960, 1280]};

const VIDEOS = [
  {
    "file": "images/videos/2026-11-24_01.mp4",
    "date": "2026-11-24",
    "w": 1276,
    "h": 718,
    "dur": 20.4,
    "poster": "images/videos/2026-11-24_01-poster.jpg"
  },
  {
    "file": "images/videos/2026-11-24_02.mp4",
    "date": "2026-11-24",
    "w": 640,
    "h": 360,
    "dur": 20.6,
    "poster": "images/videos/2026-11-24_02-poster.jpg"
  },
  {
    "file": "images/videos/2026-11-24_03.mp4",
    "date": "2026-11-24",
    "w": 640,
    "h": 360,
    "dur": 37.7,
    "poster": "images/videos/2026-11-24_03-poster.jpg"
  },
  {
    "file": "images/videos/2026-11-24_04.mp4",
    "date": "2026-11-24",
    "w": 640,
    "h": 362,
    "dur": 81.9,
    "poster": "images/videos/2026-11-24_04-poster.jpg"
  }
];

const GALLERY = [
  {
    "src": "images/photos/2026-11-24_001.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_002.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_003.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_004.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_005.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_006.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_007.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_008.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_009.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_010.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_011.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_012.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_013.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_014.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_015.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_016.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_017.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_018.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_019.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_020.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_021.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_022.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_023.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_024.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_025.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_026.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_027.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_028.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_029.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_030.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_031.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_032.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_033.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_034.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_035.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_036.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_037.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_038.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_039.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_040.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_041.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_042.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_043.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_044.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_045.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_046.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_047.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_048.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_049.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_050.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_051.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_052.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_053.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_054.jpg",
    "project": "The November Session"
  },
  {
    "src": "images/photos/2026-11-24_055.jpg",
    "project": "The November Session"
  }
];
