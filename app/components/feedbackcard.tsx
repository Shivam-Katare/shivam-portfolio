import React from 'react';
import { TestimonialSlider } from './testimonial-slider';

const Testimonials = [
  {
    highlightedLines: 'So happy to read this blog.',
    feedback: 'Glad that you, too, understand the importance of proof of work. Thank you so much. Means a lot for the Fueler community ❤️✨',
    source: 'Feedback on Blog',
    link: 'https://shivamkatareblog.hashnode.dev/fueler-a-revolutionary-platform',
    tooltipTitle: "Take me to that blog",
  },
  {
    highlightedLines: 'Great post!',
    feedback: 'Lazy loading and code splitting in Next.js are game changers for optimizing performance and improving user experience.',
    source: 'Feedback on Blog',
    link: 'https://reactplay.hashnode.dev/maximize-nextjs-performance-the-hidden-power-of-lazy-loading-and-code-splitting#clj8ru27o0qh10fnv0mma5bmq?t=1687536792487',
    tooltipTitle: "Take me to that blog",
  },
  {
    highlightedLines: '💯',
    feedback: 'this is awesome 💯',
    source: 'Feedback on Project',
    link: 'https://re-card.vercel.app/',
    tooltipTitle: "Take me to that project",
  },
  {
    highlightedLines: 'Good use of Illustrations.',
    feedback: 'Very Informative Blog Shivam!',
    source: 'Feedback on Blog',
    link: 'https://www.showwcase.com/article/18548/what-is-cicd#comments',
    tooltipTitle: "Take me to that blog",
  },
  {
    highlightedLines: 'Easier to understand',
    feedback: 'I read your post. The explanation is easier to understand and on point.',
    secondaryFeedback: 'Thanks for writing this post.',
    source: 'Feedback on Blog',
    link: 'https://www.showwcase.com/article/19231/how-to-build-a-dynamic-qr-code-using-react#comments',
    tooltipTitle: "Take me to that blog",
  },
  {
    highlightedLines: 'Great and easy',
    feedback: 'Recently thought of making an extension and found your blog on it...',
    secondaryFeedback: 'Great and easy explanation 🙌',
    source: 'Feedback on Blog',
    link: 'https://shivamkatareblog.hashnode.dev/what-is-manifestjson-and-why-does-it-matter#clqlnw0ar04lopgnv766q1xt8',
    tooltipTitle: "Take me to that blog",
  },
  {
    highlightedLines: 'Great play',
    feedback: 'Shivam Katare, Keep contributing.',
    source: 'Project Feedback',
    link: 'https://reactplay.io/plays/shivam-katare/2048',
    tooltipTitle: "Take me to that project",
  },
  {
    highlightedLines: 'Lets stay hungry for knowledge 💪🏼',
    feedback: 'Profile looking super clean! Nice profile tags you added there and nice to see the people in your Circle.',
    source: 'ShowwCase CEO, Rong',
    link: 'https://www.showwcase.com/shivam-katare?tab=h7c08jaa0nq3jc0ihntcehp9&type=guestbooks',
    tooltipTitle: "Take me to that profile",
  },
  {
    highlightedLines: '💚🚀',
    feedback: 'Thank you for taking the time toput that video together.',
    secondaryFeedback: 'Glad you are enjoying your experience with us💚🚀',
    source: 'Supabase',
    link: 'https://twitter.com/Shivamkatare_27/status/1675055421659262977',
    tooltipTitle: 'Take me to that video',
  },
  {
    highlightedLines: 'Good work,',
    feedback: 'Shivam. Keep building, keep growing 👍',
    source: 'Project Feedback',
    link: 'https://melodio.vercel.app/#',
    tooltipTitle: 'Take me to that project',
  },
  {
    highlightedLines: 'awesome ideas!',
    feedback: 'I am really amazed with these awesome ideas!',
    source: 'Project Feedback',
    link: 'https://reactplay.io/plays/shivam-katare/image-gallery',
    tooltipTitle: 'Take me to that project',
  },
  {
    highlightedLines: 'it was helpful',
    feedback: 'Hi, Thanks for writing your blog regarding React QR code generator, it was helpful and I wanted to let you know.',
    secondaryFeedback: 'Many thanks and keep up the great work.',
    source: 'Blog Feedback',
    link: 'https://www.showwcase.com/article/19231/how-to-build-a-dynamic-qr-code-using-react',
    tooltipTitle: 'Take me to that Blog',
  },
  {
    highlightedLines: 'love it 🚀',
    feedback: 'Hey its really cool,',
    secondaryFeedback: 'Is it open source, I actually wanted to learn to make this kind of things',
    source: 'Feedback on Project',
    link: 'https://re-card.vercel.app/',
    tooltipTitle: 'Take me to that Project',
  },
];


const FeedbackCard = () => {
  return (
    <div className="space-y-6">
      <TestimonialSlider testimonials={Testimonials} />
    </div>
  );
};

export default FeedbackCard;
