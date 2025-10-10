// "use client";

// import Accordion from "@/components/reusablesComponents/Accordion/Accordion";
// import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
// import ProductLayout from "@/components/reusablesComponents/productsLayout/productsLayout";
// import { productsData, productFaqs, productCtas } from "@/data/servicesData";
// import { notFound } from "next/navigation";

// interface Props {
//   params: { slug: string };
// }

// export default function ProductPage({ params }: Props) {
//   // 🟣 Find product by slug
//   const product = productsData.find((p) => p.slug === params.slug);
//   if (!product) return notFound();

//   // 🟣 Get FAQs & CTA dynamically based on slug
//   const faqs = productFaqs[params.slug as keyof typeof productFaqs] || [];
//   const cta = productCtas[params.slug as keyof typeof productCtas]?.[0];

//   return (
//     <div>
//       {/* 🟢 Product Layout Section */}
//       <ProductLayout
//         title={product.title}
//         description={product.description}
//         imageSrc={product.imageSrc}
//         features={product.features}
//         partners={product.partners}
//         featureHeading={product.featureHeading}
//         partnerHeading={product.partnerHeading}
//       />

//       {/* 🟢 FAQ Section */}
//       {faqs.length > 0 && (
//         <section>
//           <Accordion
//             items={faqs}
//             heading="Frequently Asked Questions"
//           />
//         </section>
//       )}

//       {/* 🟢 CTA Banner Section */}
//       {cta && (
//         <CtaBannerUtil
//           heading={cta.heading}
//           button={cta.button}
//         />
//       )}
//     </div>
//   );
// }
"use client";

import React from "react";
import Accordion from "@/components/reusablesComponents/Accordion/Accordion";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import ProductLayout from "@/components/reusablesComponents/productsLayout/productsLayout";
import { productsData, productFaqs, productCtas } from "@/data/servicesData";
import { notFound } from "next/navigation";
import DevSection from "@/components/main-ui-components/LandingPage/DeveloperBanner/Developer";

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

  return (
    <div>
      <ProductLayout
        title={product.title}
        description={product.description}
        imageSrc={product.imageSrc}
        features={product.features}
        partners={product.partners}
        featureHeading={product.featureHeading}
        partnerHeading={product.partnerHeading}
      />
      <DevSection/>
      {faqs.length > 0 && (
        <section>
          <Accordion items={faqs} heading="Frequently Asked Questions" />
        </section>
      )}

      {cta && <CtaBannerUtil heading={cta.heading} button={cta.button} />}
    </div>
  );
}
