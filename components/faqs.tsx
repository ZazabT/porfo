'use client'

import { FC, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Section Header */}
        <header className="p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-lg mt-2 text-gray-600">
            Find answers to some of the most common questions about our services and platform.
          </p>
        </header>

        {/* FAQ Items */}
        <div>
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              className="mb-6 mt-10 border-t border-gray-300 pt-6 px-2 gap-4 last:border-b"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl">{question}</h3>
                
                {/* Plus Icon with rotation on toggle */}
                <motion.div
                  className="inline-flex items-center justify-center size-11  shrink-0"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus />
                </motion.div>
              </div>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? "auto" : 0,
                  transition: { duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.3 },
                }}
                className="overflow-hidden mt-4 text-gray-600 text-lg"
              >
                {answer}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
