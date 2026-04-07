"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const features = [
    { icon: Zap, text: "15 AI Skills 100% Mastered" },
    { icon: TrendingUp, text: "€5M+ Annual Business Value" },
    { icon: Shield, text: "AVG/GDPR Compliant" },
    { icon: CheckCircle, text: "Production Ready" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dutch-orange/5 via-transparent to-dutch-blue/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-dutch-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dutch-blue/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="text-center space-y-8 py-12 md:py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="text-sm px-4 py-2 bg-gradient-to-r from-dutch-orange to-dutch-blue text-white hover:opacity-90">
              🦀 Sovereign Architect Certified
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">SynqLayer AI Platform</span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">
                Dutch Business Automation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              15 AI skills mastered to 100% - delivering €5M+ annual business value for Dutch MKB
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700"
                >
                  <Icon className="h-4 w-4 text-dutch-orange" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-dutch-orange to-dutch-blue hover:opacity-90 text-white"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dutch-blue text-dutch-blue hover:bg-dutch-blue/10"
            >
              View Live Demos
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-gray-600 dark:text-gray-400"
              asChild
            >
              <a
                href="https://github.com/stagedvisuals/synqlayer-ai-platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8"
          >
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl md:text-4xl font-bold gradient-text">15</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI Skills Mastered</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl md:text-4xl font-bold text-green-600">€5M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Annual Business Value</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">34-62%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tax Savings</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Dutch MKB Target</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-12"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="text-sm text-gray-500">Scroll to explore skills</div>
              <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-dutch-orange rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;