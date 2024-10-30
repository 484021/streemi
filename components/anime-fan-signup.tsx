"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AnimeFanSignup() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-lg shadow-lg mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-6">
          <h2 className="text-3xl font-bold text-white mb-2">
            Are you caught up?
          </h2>
          <p className="text-lg text-white mb-4">
           We&apos;re looking for beta testers. Get notified when Streemi&apos;s Manga Reader goes live. 
          </p>
          <Link
            href="https://email.streemi.app/form"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-purple-600 bg-white rounded-full hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            target="_blank"
          >
            Join Streemi&apos;s Newsletter
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-yellow-300 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white">New episode notifications</span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-green-300 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-white">Wallpapers & digital art</span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-blue-300 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="text-white">Personalized anime updates</span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-red-300 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="text-white">
              Exclusive discounts & merch drops
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
