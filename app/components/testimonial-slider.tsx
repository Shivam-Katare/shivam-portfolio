"use client";

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from 'react-icons/fa6';

interface TestimonialProps {
  highlightedLines: string;
  feedback: string;
  secondaryFeedback?: string;
  source: string;
  link: string;
  tooltipTitle: string;
}

interface TestimonialSliderProps {
  testimonials: TestimonialProps[];
}

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4"
    >
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-fit flex flex-col">
        <div className="flex items-start mb-4">
          <FaQuoteLeft className="w-8 h-8 text-primary/80 mr-2 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-primary/90 line-clamp-2">
            {testimonial.highlightedLines}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow line-clamp-4">
          {testimonial.feedback}
        </p>
        
        {testimonial.secondaryFeedback && (
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {testimonial.secondaryFeedback}
          </p>
        )}
        
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{testimonial.source}</span>
            <a
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200"
              title={testimonial.tooltipTitle}
            >
              View →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
}