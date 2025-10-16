import Accordion from "../../../reusablesComponents/Accordion/Accordion";


export default function FaqPage() {
  const faqItems = [
    [
      {
        question: "How does Nova Crest support businesses with financial infrastructure?",
        answer: "Nova Crest delivers an institutional-grade suite of financial infrastructure solutions designed to power modern enterprises. Our offerings include secure merchant acquiring, seamless B2B payment rails, and efficient cross-border settlement frameworks. In addition, we provide robust crypto infrastructure and stablecoin-based finance solutions engineered for scalability, compliance, and global reach. By partnering with Nova Crest, businesses gain the stability and innovation needed to operate with confidence in today’s digital economy."
      },
      {
        question: "Can Nova Crest simplify international payment operations for my business?",
        answer: "Nova Crest streamlines international transactions by providing enterprises with multi-currency accounts, virtual IBANs, and stablecoin settlement options. These tools allow businesses to collect, hold, and disburse funds globally without the need for costly local entities or complex banking arrangements. Our infrastructure is designed for speed, compliance, and transparency, ensuring cross-border payments are both efficient and secure. With Nova Crest, your business can operate confidently across borders while maintaining stability and control over global cash flows."
      },
      {
        question: "Is my business data and capital safe with Nova Crest?",
        answer: "At Nova Crest, safeguarding client assets and data is our highest priority. We employ enterprise-grade encryption, advanced fraud detection systems, and rigorous compliance protocols to ensure every transaction is executed securely. Digital assets are protected through institutional-level custody solutions with layered security controls designed to meet global regulatory standards. By combining cutting-edge technology with continuous monitoring, Nova Crest provides the trust and resilience businesses need to operate with complete confidence."
      }
    ],
    [
      {
        question: "Can Nova Crest integrate digital asset services into my existing platform?",
        answer: "Yes  Nova Crest provides powerful API integrations that allow you to seamlessly embed digital asset services within your existing banking, fintech, or enterprise platforms. Our infrastructure supports secure trading, institutional-grade custody, and lending capabilities, giving you a full crypto toolkit without the complexity of building it in-house. Designed for scalability and compliance, our APIs ensure a smooth, reliable integration process. With Nova Crest, you can expand your offerings and deliver cutting-edge crypto services to your customers with confidence."
      },
      {
        question: "What types of businesses does Nova Crest serve?",
        answer: "Nova Crest empowers a diverse range of industries with tailored financial infrastructure designed for scale and security. Our solutions support banks, fintech innovators, payment service providers, e-commerce platforms, real estate firms, gaming ecosystems, and remittance providers, among others. Each industry benefits from customized capabilities from streamlined payments and stablecoin settlement to advanced digital asset services. By partnering with Nova Crest, businesses across sectors gain the stability, compliance, and innovation needed to thrive in a rapidly evolving global economy."
      },
      {
        question: "How can my business start working with Nova Crest?",
        answer: "Getting started with Nova Crest is seamless  simply request a demo or connect with our team to explore how our solutions can power your financial operations."
      }
    ]
  ];

  return <Accordion items={faqItems} />;
}
