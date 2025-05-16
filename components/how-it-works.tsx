"use client";

import { motion } from "framer-motion";
import { Upload, DollarSign, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload License",
      description:
        "Submit your software license details through our secure portal.",
      icon: Upload,
      color: "bg-emerald-500",
    },
    {
      title: "Get Valuation",
      description: "Receive a competitive market valuation within 24 hours.",
      icon: DollarSign,
      color: "bg-teal-500",
    },
    {
      title: "Get Paid",
      description:
        "Accept our offer and receive payment through your preferred method.",
      icon: CheckCircle,
      color: "bg-emerald-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="how-it-works" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined process makes selling your unused software
              licenses quick and hassle-free.
            </p>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border"
            >
              <div className={`${step.color} p-3 rounded-full mb-4`}>
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="mt-4 flex items-center justify-center">
                <div className="relative">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-4 left-full h-0.5 w-[calc(100%+2rem)] bg-primary/30" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
