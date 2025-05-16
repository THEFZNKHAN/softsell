import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import ChatWidget from "@/components/chat-widget";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </main>
  );
}
