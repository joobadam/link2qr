"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Star, ThumbsUp, Share2 } from "lucide-react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "This QR code generator has revolutionized my business. It's so easy to use!",
    img: "https://images.unsplash.com/photo-1636041282783-e218bb0a217b?q=80&w=2454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    likes: 42,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I'm impressed by the customization options. My QR codes look fantastic!",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    likes: 38,
  },
  {
    name: "John",
    username: "@john",
    body: "The analytics feature is incredibly useful. I can track every QR code scan!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    likes: 56,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The customer service is excellent. They quickly helped me set up my first campaign.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    likes: 49,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I love that I can create dynamic QR codes that I can update anytime. It's so convenient!",
    img: "https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    likes: 33,
  },
  {
    name: "James",
    username: "@james",
    body: "The integration with my CRM system was seamless. Highly recommend for marketers!",
    img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    likes: 61,
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating,
  likes,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
  likes: number;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLocalLikes(localLikes - 1);
    } else {
      setLocalLikes(localLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <figure
      className={cn(
        "relative w-80 mx-4 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300 ease-in-out",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] hover:shadow-lg",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full object-cover object-center w-10 h-10" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
        <div className="ml-auto flex items-center">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 text-sm ${
            isLiked ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>{localLikes}</span>
        </button>
        <button className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>
      </div>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <div className="relative flex-center h-[600px] w-full flex-col overflow-hidden bg-gray-100 dark:bg-neutral-300" id="testimonials">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Don't just take our word for it. Here's what our customers are saying about our QR code generator.
          </p>
        </div>
      </div>
      <Marquee pauseOnHover className="py-4">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="py-4">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-100 dark:from-neutral-300"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-100 dark:from-neutral-300"></div>
    </div>
  );
}