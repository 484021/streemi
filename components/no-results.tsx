"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";



export default function NoResultsFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
      >
        <Search size={64} className="text-primary mb-4" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold mb-2"
      >
        No Results Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground mb-6"
      >
        We couldn&apos;t find any matches for your search. Try something
        different?
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-2"
      >
        <Frown className="text-muted-foreground" />
        <span className="text-muted-foreground">
          Don&apos;t worry, it happens to the best of us!
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
      >
        <Button className="mt-6">
          Reset Search
        </Button>
      </motion.div>
    </motion.div>
  );
}
