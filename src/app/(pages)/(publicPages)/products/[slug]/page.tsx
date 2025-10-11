"use client";

import React from "react";
import Accordion from "@/components/reusablesComponents/Accordion/Accordion";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import ProductLayout from "@/components/reusablesComponents/productsLayout/productsLayout";
import { productsData, productFaqs, productCtas,productReviews,productDevData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import DevSection from "@/components/main-ui-components/LandingPage/DeveloperBanner/Developer";
import ProductReviews from "@/components/reusablesComponents/ProductReview/Reviews";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: Props) {
  // 🟣 Unwrap params using React.use()
  const { slug } = React.use(params);

  const product = productsData.find((p) => p.slug === slug);
  if (!product) return notFound();

  const faqs = productFaqs[slug as keyof typeof productFaqs] || [];
  const cta = productCtas[slug as keyof typeof productCtas]?.[0];
  const reviews = productReviews[slug as keyof typeof productReviews] || [];
  const devData = productDevData[slug as keyof typeof productDevData] || null;


  return (
    <div>
      <ProductLayout
      slug={product.slug}
        title={product.title}
        description={product.description}
        imageSrc={product.imageSrc}
        features={product.features}
        partners={product.partners}
        featureHeading={product.featureHeading}
        partnerHeading={product.partnerHeading}
      />
       {reviews.length > 0 && <ProductReviews reviews={reviews} />}
        {/* 🔵 Developer Section — dynamic by slug */}
      {devData && (
        <section id="developer" className="scroll-mt-24">
          <DevSection
            heading={devData.heading}
            description={devData.description}
            buttonText={devData.buttonText}
            codeSnippets={devData.codeSnippets}
          />
        </section>
      )}
      {faqs.length > 0 && (
        <section>
          <Accordion items={faqs} heading="Frequently Asked Questions" />
        </section>
      )}

      {cta && <CtaBannerUtil heading={cta.heading} button={cta.button} />}
    </div>
  );
}
