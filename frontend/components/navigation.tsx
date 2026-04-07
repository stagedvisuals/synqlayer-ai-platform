"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Brain, Zap, Shield, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Skills", href: "#skills", icon: Brain },
    { label: "Business Value", href: "#value", icon: Euro },
    { label: "Demos", href: "#demos", icon: Zap },
    { label: "Compliance", href: "#compliance", icon: Shield },
    { label: "GitHub", href: "https://github.com/stagedvisuals/synqlayer-ai-platform", external: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-dutch-orange to-dutch-blue">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <Link href="/" className="text-xl font-bold gradient-text">
                SynqLayer AI
              </Link>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Dutch Business Automation
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-dutch-orange dark:text-gray-300 dark:hover:text-dutch-orange transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-dutch-orange dark:text-gray-300 dark:hover:text-dutch-orange transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <Button className="bg-gradient-to-r from-dutch-orange to-dutch-blue hover:opacity-90">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
              <Button className="mx-4 bg-gradient-to-r from-dutch-orange to-dutch-blue hover:opacity-90">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;