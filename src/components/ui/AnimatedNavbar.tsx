"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Contact Us", href: "#contact" },
  { name: "Blogs", href: "#blogs" },
];

export default function AnimatedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Remove blue glow
  const noGlow = "none";

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={false}
        animate={scrolled ? "scrolled" : "top"}
        variants={{
          top: {
            width: "98vw",
            borderRadius: "0rem",
            marginTop: 0,
            background: "linear-gradient(to bottom right, rgba(35,97,235,0.05) 0%, transparent 60%, rgba(35,97,235,0.10) 100%)",
            boxShadow: "none",
            y: 0,
          },
          scrolled: {
            width: "70%",
            borderRadius: "2rem",
            marginTop: "1.5rem",
            background: "linear-gradient(to bottom right, rgba(35,97,235,0.05) 0%, transparent 60%, rgba(35,97,235,0.10) 100%)",
            boxShadow: noGlow,
            y: 20,
          },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="fixed left-1/2 z-50 hidden h-16 max-w-7xl -translate-x-1/2 items-center justify-between px-6 lg:flex"
        style={{
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={false}
          animate={scrolled ? "scrolled" : "top"}
          variants={{
            top: { x: 0 },
            scrolled: { x: 10 }, // move logo 40px towards center when scrolled
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <Link href="/" className="flex items-center gap-3 font-bold text-white">
            <span className="text-2xl tracking-wider">AIVA</span>
          </Link>
        </motion.div>
        {/* Nav Links */}
        <div className="flex flex-1 items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-semibold text-white hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Auth Buttons */}
        <motion.div
          initial={false}
          animate={scrolled ? "scrolled" : "top"}
          variants={{
            top: { x: 0 },
            scrolled: { x: -10 }, // move button 40px towards center when scrolled
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <div className="flex items-center gap-4">
            <Link
              href="/waitlist"
              className="rounded-full bg-blue-500 px-6 py-2 font-semibold text-lg text-black transition hover:bg-blue-600"
              style={{
                boxShadow: noGlow,
              }}
            >
              Join Waitlist
            </Link>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={false}
        animate={scrolled ? "scrolled" : "top"}
        variants={{
          top: {
            width: "98vw",
            borderRadius: "0rem",
            marginTop: 0,
            background: "linear-gradient(to bottom right, rgba(35,97,235,0.05) 0%, transparent 60%, rgba(35,97,235,0.10) 100%)",
            boxShadow: "none",
            y: 0,
          },
          scrolled: {
            width: "70%",
            borderRadius: "2rem",
            marginTop: "1.5rem",
            background: "linear-gradient(to bottom right, rgba(35,97,235,0.05) 0%, transparent 60%, rgba(35,97,235,0.10) 100%)",
            boxShadow: noGlow,
            y: 20,
          },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="fixed left-1/2 z-50 flex h-16 max-w-2xl -translate-x-1/2 items-center justify-between px-4 lg:hidden"
        style={{
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-white">
          <span className="text-2xl tracking-wider">AIVA</span>
        </Link>
        {/* Hamburger */}
        <button
          className="flex items-center justify-center rounded-full p-2 text-white"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 top-16 z-50 w-full rounded-2xl bg-neutral-900/95 p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative font-semibold text-white text-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/waitlist"
                  className="rounded-full bg-blue-500 px-6 py-2 font-semibold text-lg text-black transition hover:bg-blue-600"
                  style={{
                    boxShadow: noGlow,
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Join Waitlist
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Spacer for content */}
      <div className="h-20" />
    </>
  );
} 