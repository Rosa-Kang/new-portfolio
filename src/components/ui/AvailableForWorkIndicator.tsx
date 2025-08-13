"use client";

import { motion } from "framer-motion";
import React from "react";

const AvailableForWorkIndicator = () => {
  return (
    <span className="flex items-center gap-2">
      <motion.span
        className="w-3 h-3 bg-green-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      Available For Work
    </span>
  );
};

export default AvailableForWorkIndicator;
