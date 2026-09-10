export type Project = {
  slug: string;
  num: string;
  award?: string;
  name: string;
  tagline: string;
  story: string;
  detail: string[];
  stack: string[];
  devpost?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "buddy",
    num: "01",
    award: "WHACK 2025 — Best Use of Google AI Tools + Best Use of ElevenLabs (MLH)",
    name: "Buddy",
    tagline: "Real-time Pedestrian Safety System",
    story:
      "People cross streets every day, but for visually impaired pedestrians, it's a different experience. Buddy is a mobile app our team built at WHACK 2025 that uses live camera input to detect hazards in real time — traffic, obstacles, fast-moving objects. The project won two MLH category awards for its use of Google Gemini and ElevenLabs to deliver low-latency spoken alerts. The goal was to make accessibility feel native, not bolted on.",
    detail: [
      "Buddy started as a question: what if your phone could warn you about danger before you saw it? Our team built this at WHACK 2025, and it won Best Use of Google AI Tools and Best Use of ElevenLabs — two separate MLH category awards.",
      "The core challenge was latency. Voice alerts are useless if they arrive a second too late. The pipeline was optimized so that frame capture, depth estimation, hazard classification, and audio output all happen within a tight loop — fast enough to be genuinely useful in real pedestrian scenarios.",
      "The computer vision pipeline uses monocular depth estimation to infer how far away objects are from a single camera frame — no depth sensor required, just a phone camera. Combined with motion tracking, the app can distinguish a parked car from one approaching fast, and prioritize alerts accordingly.",
      "Google Gemini handles contextual scene understanding — turning raw detections into natural language descriptions that ElevenLabs then speaks aloud. The integration was designed to feel ambient rather than alarming, giving users information without overwhelming them.",
    ],
    stack: ["React Native", "JavaScript", "Google Gemini API", "ElevenLabs API", "Computer Vision", "Monocular Depth Estimation"],
    devpost: "https://devpost.com",
    highlights: [
      "Won 2 MLH category awards at WHACK 2025",
      "Real-time computer vision pipeline with monocular depth estimation",
      "Low-latency voice alerts optimized for accessibility",
      "Designed to work with just a phone camera — no extra hardware",
    ],
  },
  {
    slug: "mapping-for-good",
    num: "02",
    award: "CivicHacks 2026 — Original Research Award (MLH)",
    name: "Mapping for Good",
    tagline: "Boston Food Ecosystem & Equity Platform",
    story:
      "Who has access to food in Boston, and who doesn't? Our team built a geospatial visualization platform that integrates Boston Open Data and the American Community Survey to map food production, distribution infrastructure, and demographic data side by side — so researchers, policymakers, and communities can see inequity at the neighborhood level.",
    detail: [
      "This project won the Original Research Award at CivicHacks 2026. The goal was to make a complex, fragmented dataset navigable — and to make the inequities it revealed impossible to ignore.",
      "We integrated two primary data sources: Boston Open Data (food pantries, grocery stores, community gardens, farmers markets) and the American Community Survey (income levels, vehicle access, population density by neighborhood). Layering these together made visible patterns that neither dataset showed alone.",
      "A key challenge was building data pipelines that could handle inconsistent formats, missing values, and mismatched geographic identifiers across datasets — normalized into a unified geospatial schema that the visualization layer could reliably query.",
      "The frontend was built to be genuinely interactive — users can toggle layers, zoom to neighborhoods, and explore specific data points. Every visualization choice was made to surface insight, not to show off.",
    ],
    stack: ["JavaScript", "Google Maps API", "Gemini API", "MongoDB", "Boston Open Data", "Data Visualization"],
    devpost: "https://devpost.com",
    highlights: [
      "Won Original Research Award at CivicHacks 2026",
      "Integrated multiple public datasets into a unified geospatial schema",
      "Data pipelines handling inconsistent formats across sources",
      "Interactive neighborhood-level visualizations for policymakers and communities",
    ],
  },
  {
    slug: "skin-analysis",
    num: "03",
    name: "AI Skin Analysis System",
    tagline: "Deep Learning Pipeline for Multi-Attribute Skin Analysis",
    story:
      "A deep learning pipeline for multi-attribute skin analysis from facial images. Fine-tuned MobileNetV2 for multi-label classification of 11 skin attributes across 10,632 images — achieving 85.47% validation accuracy in 10 epochs with trainable parameters reduced by 99.4%.",
    detail: [
      "The goal was to build a model that could analyze multiple skin attributes simultaneously — tone, texture, and condition — from a single facial image, and serve predictions fast enough for real-time use.",
      "MobileNetV2 was chosen as the base architecture for its efficiency — designed to run well on constrained hardware, which matters for eventual mobile deployment. Fine-tuning with transfer learning made it possible to adapt the model to the domain without needing a massive labeled dataset.",
      "The training process involved careful hyperparameter tuning and validation monitoring to avoid overfitting. Multiple metrics were tracked across attributes to ensure the model was genuinely learning each task rather than optimizing for a single combined loss.",
      "The FastAPI backend exposes RESTful endpoints that accept image uploads and return structured predictions — stateless, containerizable, and built for scalable deployment.",
    ],
    stack: ["Python", "PyTorch", "MobileNetV2", "Transfer Learning", "FastAPI", "REST APIs"],
    highlights: [
      "85.47% validation accuracy across 11 skin attributes in 10 epochs",
      "99.4% reduction in trainable parameters via selective layer freezing",
      "Fine-tuned on 10,632 images with train/val gap under 0.3%",
      "Modular FastAPI backend with real-time CPU inference endpoints",
    ],
  },
  {
    slug: "memory-museum",
    num: "04",
    name: "Memory Museum",
    tagline: "Interactive 3D Memory Gallery",
    story:
      "An interactive 360° 3D memory gallery built with Three.js and WebGL. Images are programmatically positioned along a circular path using trigonometric calculations, with momentum-based drag rotation, velocity decay, keyboard navigation, and raycasting for selectable memory objects with contextual lightbox experiences.",
    detail: [
      "Memory Museum is a 3D interactive gallery that lets you walk through memories spatially — each photo placed along a circular path in a fully navigable 360° environment built entirely in the browser using Three.js and WebGL.",
      "The positioning system uses trigonometric calculations to place image objects evenly along the circular path, with momentum-based drag rotation and velocity decay that makes navigation feel physical and natural. Keyboard navigation was added for accessibility.",
      "Three.js raycasting handles click detection in 3D space — when you select a memory object, it opens a contextual lightbox experience. This required mapping 2D mouse coordinates back into 3D ray intersections against the scene geometry.",
      "The visual atmosphere is driven by custom GLSL vertex and fragment shaders rendering an animated two-layer particle system with 250,000+ particles and mouse-responsive visual effects. Everything runs on the GPU via WebGL, keeping performance smooth despite the particle density.",
    ],
    stack: ["JavaScript", "Three.js", "WebGL", "GLSL", "Raycasting", "Particle Systems"],
    highlights: [
      "360° interactive 3D environment built entirely in the browser",
      "250,000+ particle system rendered via custom GLSL shaders",
      "Momentum-based drag rotation with velocity decay",
      "Three.js raycasting for precise 3D object selection",
    ],
  },
];
