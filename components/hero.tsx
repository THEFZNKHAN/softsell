"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="hero">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                Maximize the Value of Your Unused Software Licenses
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Turn your idle software investments into cash. SoftSell helps
                businesses sell unused licenses quickly and at the best market
                rates.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              >
              Sell My Licenses
              </Button>
              <Button size="lg" variant="outline">
                Get a Quote
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
              <div className="overflow-hidden w-full h-full">
                <Image
                  src="/hero.png"
                  alt="hero"
                  fill
                  className="object-contain "
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 400px, 500px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
