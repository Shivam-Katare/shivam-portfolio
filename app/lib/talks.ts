export type Talk = {
  id: string;
  title: string;
  event: string;
  date: string;
  image: string;
  href?: string;
  linkLabel?: string;
  points: string[];
};

export const talks: Talk[] = [
  {
    id: "jslovers-meetup",
    title: "React 19 and the Chamber of Secrets",
    event: "JSLovers Delhi Tech Meetup",
    date: "Jun 29, 2024",
    image: "/talks/js_talk.png",
    href: "https://app.pitch.com/app/presentation/bdfbe37c-8c2c-4670-898f-0ea2a2845d7e/6a04f744-c92a-46ad-b033-d25e39e45e20",
    linkLabel: "Slides",
    points: [
      "In-person at Squareboat, Gurugram",
      "A walkthrough of React 19 for working frontend teams",
    ],
  },
  {
    id: "reactplay-open-mic",
    title: "Revolutionizing React Documentation with MDX",
    event: "ReactPlay Open Mic",
    date: "Sep 29, 2023",
    image: "/talks/rp_speeaker.png",
    href: "https://www.youtube.com/live/cbQp6ULqc_s?si=UqxEIuFmgfGWDTxq",
    linkLabel: "Watch",
    points: [
      "Episode 5 of ReactPlay Open Mic",
      "Using MDX to make React docs more interactive",
    ],
  },
  {
    id: "lightning-talk",
    title:
      "The Art of Storytelling: Crafting Compelling Content that Resonates with Your Audience",
    event: "4C Lightning Talks",
    date: "May 6",
    image: "/talks/lightning_talk_4c.webp",
    points: [
      "A short talk on storytelling in technical content",
    ],
  },
];
