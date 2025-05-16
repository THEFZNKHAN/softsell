"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, TrendingUp, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Secure Transactions",
      description:
        "End-to-end encryption and secure payment processing for all license transfers.",
      icon: ShieldCheck,
    },
    {
      title: "Fast Turnaround",
      description:
        "Get valuations within 24 hours and payment within 3 business days.",
      icon: Clock,
    },
    {
      title: "Best Market Rates",
      description:
        "Our extensive network ensures you get the highest value for your licenses.",
      icon: TrendingUp,
    },
    {
      title: "Global Marketplace",
      description:
        "Connect with buyers from around the world to maximize your selling potential.",
      icon: Globe,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="why-choose-us" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Us
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SoftSell offers unique advantages that make us the preferred
              choice for software license resale.
            </p>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-xl border"
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
