"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PostLink() {
  return (
    <Link href="/posts">
      <motion.div
        className="mt-4 inline-flex items-center gap-2 text-xs"
        whileHover={{ x: 5 }}
      >
        <span>All Posts</span>
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-3 w-3" />
        </motion.div>
      </motion.div>
    </Link>
  );
}
