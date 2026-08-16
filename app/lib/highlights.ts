export type HighlightPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  captionSide: "left" | "right";
  href?: string;
};

export const highlightPhotos: HighlightPhoto[] = [
  {
    id: "jslovers-meetup",
    src: "/highlights/speakerTwo.jpeg",
    alt: "Speaking at the JSLovers meetup",
    caption: "On stage at JSLovers, walking through a system.",
    captionSide: "left",
  },
  {
    id: "reactplay-team-meet",
    src: "/highlights/ReactPlay_first_team_meet.jpeg",
    alt: "First ReactPlay team meeting on a video call",
    caption: "First ReactPlay team call. Early days :)",
    captionSide: "right",
  },
  {
    id: "cco-meet",
    src: "/highlights/cco_meet.png",
    alt: "CCO community meetup on a video call",
    caption: "A CCO meetup, everyone in one grid.",
    captionSide: "left",
  },
  {
    id: "tria-winner",
    src: "/highlights/tria_winner_wemakedevs_hackathon.jpg",
    alt: "Tria placing at the WeMakeDevs hackathon",
    caption: "Tria won the WeMakeDevs hackathon! 🎉",
    captionSide: "right",
  },
  {
    id: "signoz-swag",
    src: "/highlights/swag_spot_hackathon_winner.jpg",
    alt: "Swag Spot winner at Agents of SigNoz",
    caption: "A swag-spot finish at Agents of SigNoz.",
    captionSide: "left",
  },
  {
    id: "reactplay-open-mic",
    src: "/highlights/reactplay_speaker.jpg",
    alt: "ReactPlay Open Mic speaker announcement",
    caption: "Open Mic on MDX and React docs.",
    captionSide: "right",
  },
  {
    id: "reactplay-hackathon",
    src: "/highlights/reactplay_hackathon.jpg",
    alt: "Third place at ReactPlay 2PlaysAMonth",
    caption: "A small win from building plays at ReactPlay.",
    captionSide: "left",
  },
  {
    id: "lightning-talk",
    src: "/highlights/lightning_talk.jpg",
    alt: "Lightning talk on storytelling",
    caption: "A lightning talk on storytelling.",
    captionSide: "right",
  },
  {
    id: "pieces-call",
    src: "/highlights/pieces.jpg",
    alt: "Call with the Pieces cofounder",
    caption: "A call with Tsavo about developer tools.",
    captionSide: "left",
  },
];
