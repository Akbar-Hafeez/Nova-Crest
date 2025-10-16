"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NFTGallery() {
  const galleryItems = [
    {
      src: "/nft1-pic.avif",
      title: "Uncle Satoshi",
      desc: "Satoshi is the best crypto Meme,There is no second best !",
    },
    {
      src: "/nft2.png",
      title: "Metaverse Souls",
      desc: "Generative 3D avatars for virtual realms and metaverse communities.",
    },
    {
      src: "/nft3.avif",
      title: "Flora Nova",
      desc: "A vibrant fusion of nature and code  each petal and pot uniquely crafted to represent digital growth and creative energy within the Nova ecosystem.",
    },
    {
      src: "/nft-pic-4.png",
      title: "Crypto Canvas",
      desc: "Abstract visual art  bridging traditional art with tokenized ownership.",
    },
    {
      src: "/nft-dragon.avif",
      title: "Water Dragon",
      desc: "A generative tribute to movement and creation. Crafted in the year of the Water Dragon, this piece mirrors Nova’s essence  limitless flow, intelligent energy, and the seamless rhythm of decentralized worlds.",
    },
    {
      src: "/nft-pic-6.avif",
      title: "Ethereal Faces",
      desc: "Where art meets emotion  each portrait is a mirror of digital soul, delicately rendered to evoke empathy, serenity, and timeless allure.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Light glow background for futuristic effect */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-[#7f00ff]/20 via-pink-400/20 to-blue-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-blue-400/20 via-[#7f00ff]/20 to-pink-400/10 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our <span className="text-[#7f00ff]">NFT Showcase</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A glimpse into Nova’s creative universe  where art, technology, and imagination meet.
        </p>
      </div>

      {/* GALLERY GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-[#7f00ff]/40 transition-all duration-300"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={500}
              height={500}
              className="object-cover w-full h-80 rounded-3xl group-hover:brightness-75 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl flex flex-col justify-end p-6">
              <h3 className="text-white text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
