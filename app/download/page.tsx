"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DownloadMainPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f0f9ff] flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-cyan-400 mb-8"
      >
        🎥 Video Downloader Center
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link href="/download/youtube">
          <Button className="bg-red-600 hover:bg-red-500 w-48 text-[#0f172a] font-semibold">
            YouTube
          </Button>
        </Link>
        <Link href="/download/tiktok">
          <Button className="bg-pink-600 hover:bg-pink-500 w-48 text-[#0f172a] font-semibold">
            TikTok
          </Button>
        </Link>
        <Link href="/download/facebook">
          <Button className="bg-blue-600 hover:bg-blue-500 w-48 text-[#0f172a] font-semibold">
            Facebook
          </Button>
        </Link>
      </div>

      <p className="text-gray-400 mt-10 text-sm text-center">
        ඔබට ඕන මූලාශ්‍රය තෝරාගෙන ඩවුන්ලෝඩ් කිරීමට පිවිසෙන්න.<br />
        📲 YouTube | 🎵 TikTok | 📘 Facebook
      </p>
    </div>
  )
}