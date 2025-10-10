"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Review = {
  logo: string;
  company: string;
  quote: string;
  author: string;
  role: string;
  image: string;
};

type Props = {
  reviews: Review[];
  heading?: string;
};

const ProductReviews: React.FC<Props> = ({ reviews, heading = "Endorsed by the Industry’s Finest" }) => {
  return (
    <section className="py-14 md:py-20 bg-color">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center mb-10 text-foreground"
        >
          {heading}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all"
            >
              <div className="mb-4">
                <Image
                  src={review.logo}
                  alt={review.company}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>

              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                “{review.quote}”
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={review.image}
                  alt={review.author}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
