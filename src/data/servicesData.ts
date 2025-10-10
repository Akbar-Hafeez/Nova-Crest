import {
  FaExchangeAlt,
  FaDatabase,
  FaCoins,
  FaWallet,
  FaCreditCard,
  FaChartLine,
  FaLock,
  FaCogs,
  FaShieldAlt,
  FaGlobe,
  FaBolt,
  FaCloud,
} from "react-icons/fa";

export const productsData = [
  // 1 Stablecoin Infrastructure
  {
    slug: "stablecoin-infrastructure",
    title: "Stablecoin Infrastructure",
    description:
      "Launch and manage compliant, reserve-backed stablecoins with transparent tracking and enterprise-grade blockchain infrastructure by Nova Crest.",
    imageSrc: "/stablecoin-mockup.png",
    featureHeading: "Core Capabilities",
    features: [
      { icon: FaDatabase, text: "Custom token issuance and reserve management" },
      { icon: FaWallet, text: "Secure multi-signature custody system" },
      { icon: FaShieldAlt, text: "Full compliance and audit visibility" },
      { icon: FaExchangeAlt, text: "Integrated liquidity and transfer channels" },
      { icon: FaCoins, text: "Multi-chain deployment flexibility" },
      { icon: FaCreditCard, text: "Programmable stablecoin payments" },
      { icon: FaChartLine, text: "Real-time reserve tracking dashboards" },
      { icon: FaLock, text: "Advanced key management infrastructure" },
      { icon: FaCogs, text: "Modular SDK for fintech integration" },
    ],
    partnerHeading: "Our Trusted Partners",
   partners: [
      { logo: "/Partners/apple-pay.svg", name: "apple" },
      { logo: "/Partners/Kraken-logo.png", name: "kraken" },
      { logo: "/Partners/KUCOIN-logo.png", name: "Kucoin" },
      { logo: "/Partners/new-visa-logo.webp", name: "visa" },
      { logo: "/Partners/gpay.svg", name: "gpay" },
      { logo: "/Partners/new-Worldpay_logo.webp", name: "worldpay" },
      { logo: "/Partners/wire.svg", name: "wire" },
      { logo: "/Partners/new-mclogo.svg", name: "mclogo" },
      { logo: "/Partners/Trust-Wallet-Logo.png", name: "Trust" },
      { logo: "/Partners/sepa.svg", name: "sepa" },
      
    ],
  },

  // 2️⃣ OTC Trading
  {
    slug: "otc",
    title: "OTC Trading",
    description:
      "Execute institutional-grade crypto trades with deep liquidity, low latency execution, and transparent post-trade settlement.",
    imageSrc: "/otc-mockup.png",
    featureHeading: "Trading Advantages",
    features: [
      { icon: FaExchangeAlt, text: "Access deep global liquidity pools" },
      { icon: FaDatabase, text: "Smart order routing and aggregation" },
      { icon: FaWallet, text: "Segregated client account management" },
      { icon: FaCoins, text: "Support for spot, fiat, and stablecoin pairs" },
      { icon: FaChartLine, text: "Post-trade analytics and insights" },
      { icon: FaLock, text: "Secure, compliant trade workflows" },
      { icon: FaCogs, text: "API-first integration for programmatic access" },
      { icon: FaShieldAlt, text: "Audit-grade reporting and transparency" },
      { icon: FaCreditCard, text: "Competitive pricing and execution spreads" },
    ],
    partnerHeading: "Our Liquidity Partners",
   partners: [
      { logo: "/Partners/apple-pay.svg", name: "apple" },
      { logo: "/Partners/Kraken-logo.png", name: "kraken" },
      { logo: "/Partners/KUCOIN-logo.png", name: "Kucoin" },
      { logo: "/Partners/new-visa-logo.webp", name: "visa" },
      { logo: "/Partners/gpay.svg", name: "gpay" },
      { logo: "/Partners/new-Worldpay_logo.webp", name: "worldpay" },
      { logo: "/Partners/wire.svg", name: "wire" },
      { logo: "/Partners/new-mclogo.svg", name: "mclogo" },
      { logo: "/Partners/Trust-Wallet-Logo.png", name: "Trust" },
      { logo: "/Partners/sepa.svg", name: "sepa" },
      
    ],
  },

  // 3️⃣ Digital Assets as a Service (DaaS)
  {
    slug: "daas",
    title: "Digital Assets as a Service (DaaS)",
    description:
      "Tokenize, distribute, and manage digital assets — from NFTs to tokenized securities — through one API-powered infrastructure.",
    imageSrc: "/daas-mockup.png",
    featureHeading: "DaaS Highlights",
    features: [
      { icon: FaDatabase, text: "End-to-end token issuance APIs" },
      { icon: FaWallet, text: "Custody solutions for all asset types" },
      { icon: FaCoins, text: "Support for tokens, NFTs, and securities" },
      { icon: FaExchangeAlt, text: "Instant on/off-chain settlements" },
      { icon: FaLock, text: "Enterprise-grade encryption and access control" },
      { icon: FaCloud, text: "Scalable cloud deployment architecture" },
      { icon: FaCogs, text: "Customizable asset workflows" },
      { icon: FaShieldAlt, text: "KYC/AML-ready compliance integrations" },
      { icon: FaChartLine, text: "Performance and usage monitoring tools" },
    ],
    partnerHeading: "Our Ecosystem Partners",
  partners: [
      { logo: "/Partners/apple-pay.svg", name: "apple" },
      { logo: "/Partners/Kraken-logo.png", name: "kraken" },
      { logo: "/Partners/KUCOIN-logo.png", name: "Kucoin" },
      { logo: "/Partners/new-visa-logo.webp", name: "visa" },
      { logo: "/Partners/gpay.svg", name: "gpay" },
      { logo: "/Partners/new-Worldpay_logo.webp", name: "worldpay" },
      { logo: "/Partners/wire.svg", name: "wire" },
      { logo: "/Partners/new-mclogo.svg", name: "mclogo" },
      { logo: "/Partners/Trust-Wallet-Logo.png", name: "Trust" },
      { logo: "/Partners/sepa.svg", name: "sepa" },
      
    ],
  },

  // 4️⃣ On-Ramp / Off-Ramp
  {
    slug: "onramp-offramp",
    title: "On-Ramp / Off-Ramp",
    description:
      "Enable users to convert fiat and crypto instantly using our globally connected payment rails with compliance and low fees.",
    imageSrc: "/onofframp-mockup.png",
    featureHeading: "Payment Connectivity",
    features: [
      { icon: FaCreditCard, text: "Support for 180+ global fiat currencies" },
      { icon: FaExchangeAlt, text: "Instant fiat-to-crypto conversions" },
      { icon: FaWallet, text: "Wallet-based deposits and withdrawals" },
      { icon: FaShieldAlt, text: "Built-in KYC and AML verification" },
      { icon: FaGlobe, text: "Worldwide partner network access" },
      { icon: FaCogs, text: "Seamless API integration for apps" },
      { icon: FaLock, text: "PCI DSS-compliant security standards" },
      { icon: FaChartLine, text: "Transaction insights and reporting" },
      { icon: FaBolt, text: "Optimized transaction speeds and fees" },
    ],
    partnerHeading: "Our Global Partners",
   partners: [
      { logo: "/Partners/apple-pay.svg", name: "apple" },
      { logo: "/Partners/Kraken-logo.png", name: "kraken" },
      { logo: "/Partners/KUCOIN-logo.png", name: "Kucoin" },
      { logo: "/Partners/new-visa-logo.webp", name: "visa" },
      { logo: "/Partners/gpay.svg", name: "gpay" },
      { logo: "/Partners/new-Worldpay_logo.webp", name: "worldpay" },
      { logo: "/Partners/wire.svg", name: "wire" },
      { logo: "/Partners/new-mclogo.svg", name: "mclogo" },
      { logo: "/Partners/Trust-Wallet-Logo.png", name: "Trust" },
      { logo: "/Partners/sepa.svg", name: "sepa" },
      
    ],
  },

  // 5️⃣ Payments
  {
    slug: "payments",
    title: "Payments",
    description:
      "Power seamless global payments with blockchain rails, stablecoin settlement, and merchant-ready infrastructure.",
    imageSrc: "/payment-mockup.png",
    featureHeading: "Core Features",
    features: [
      { icon: FaCreditCard, text: "Instant blockchain payment processing" },
      { icon: FaExchangeAlt, text: "Cross-border and multi-currency support" },
      { icon: FaWallet, text: "Merchant wallet infrastructure" },
      { icon: FaChartLine, text: "Payment analytics and reconciliation" },
      { icon: FaCoins, text: "Support for stablecoins and crypto assets" },
      { icon: FaShieldAlt, text: "Compliance with PSD2 and AML regulations" },
      { icon: FaCogs, text: "API and SDK for global merchant integration" },
      { icon: FaLock, text: "End-to-end encryption and fraud monitoring" },
      { icon: FaBolt, text: "Low latency transactions for enterprise scale" },
    ],
    partnerHeading: "Payment Network Partners",
    partners: [
      { logo: "/Partners/apple-pay.svg", name: "apple" },
      { logo: "/Partners/Kraken-logo.png", name: "kraken" },
      { logo: "/Partners/KUCOIN-logo.png", name: "Kucoin" },
      { logo: "/Partners/new-visa-logo.webp", name: "visa" },
      { logo: "/Partners/gpay.svg", name: "gpay" },
      { logo: "/Partners/new-Worldpay_logo.webp", name: "worldpay" },
      { logo: "/Partners/wire.svg", name: "wire" },
      { logo: "/Partners/new-mclogo.svg", name: "mclogo" },
      { logo: "/Partners/Trust-Wallet-Logo.png", name: "Trust" },
      { logo: "/Partners/sepa.svg", name: "sepa" },
      
    ],
  },
];
//  Product FAQs mapped by slug
export const productFaqs = {
  "stablecoin-infrastructure": [
    [
      {
        question: "What is Nova Crest’s stablecoin infrastructure?",
        answer:
          "It’s a full-stack platform that lets institutions launch, manage, and track reserve-backed stablecoins with regulatory compliance and transparency.",
      },
      {
        question: "How are stablecoin reserves verified?",
        answer:
          "All reserves are fully backed and tracked on-chain, with real-time dashboards and external audit reports for verification.",
      },
      {
        question: "Can I customize the stablecoin’s branding or features?",
        answer:
          "Yes, Nova Crest allows full customization — from naming and design to smart contract logic and compliance configurations.",
      },
      {
        question: "Which blockchains are supported?",
        answer:
          "Nova Crest supports Ethereum, Polygon, BNB Chain, and other major EVM-compatible networks for multi-chain deployment.",
      },
      {
        question: "Is it suitable for regulated entities?",
        answer:
          "Absolutely. Our infrastructure includes KYC/AML modules, reserve attestations, and compliance APIs for regulated businesses.",
      },
    ],
  ],

  otc: [
    [
      {
        question: "What is OTC trading?",
        answer:
          "Over-the-counter (OTC) trading enables large-volume crypto transactions directly between institutions, bypassing public exchanges.",
      },
      {
        question: "How does Nova Crest ensure liquidity?",
        answer:
          "We aggregate global liquidity from top-tier exchanges, desks, and institutional partners for deep and competitive execution.",
      },
      {
        question: "Is OTC trading secure?",
        answer:
          "All trades are settled through secure custody accounts with compliance checks, ensuring safety and confidentiality.",
      },
      {
        question: "What assets can I trade?",
        answer:
          "We support major cryptocurrencies, stablecoins, and select fiat pairs with institutional liquidity.",
      },
      {
        question: "Can I integrate OTC APIs into my platform?",
        answer:
          "Yes. Nova Crest offers programmatic OTC trading through APIs for automated quoting and settlement.",
      },
    ],
  ],

  daas: [
    [
      {
        question: "What is Digital Assets as a Service (DaaS)?",
        answer:
          "It’s Nova Crest’s end-to-end solution for tokenizing, distributing, and managing digital assets — including NFTs, tokens, and securities.",
      },
      {
        question: "Which assets can be tokenized?",
        answer:
          "You can tokenize real-world assets, financial instruments, NFTs, or utility tokens through standardized APIs.",
      },
      {
        question: "How does Nova Crest handle compliance?",
        answer:
          "We provide built-in KYC/AML tools, whitelist management, and smart contract modules aligned with global regulatory standards.",
      },
      {
        question: "Is the platform scalable?",
        answer:
          "Yes, it’s cloud-native and supports horizontal scaling for enterprises managing high asset volumes.",
      },
      {
        question: "Can developers integrate custom workflows?",
        answer:
          "Developers can use Nova Crest SDKs and APIs to build custom issuance, distribution, or management flows.",
      },
    ],
  ],

  "onramp-offramp": [
    [
      {
        question: "What does On-Ramp / Off-Ramp mean?",
        answer:
          "It enables users to convert between fiat and crypto assets seamlessly — either entering (on-ramp) or exiting (off-ramp) the crypto ecosystem.",
      },
      {
        question: "Which payment methods are supported?",
        answer:
          "Nova Crest supports cards, bank transfers, Apple Pay, Google Pay, and SEPA/ACH rails across 180+ countries.",
      },
      {
        question: "How fast are conversions?",
        answer:
          "Conversions are processed in real time, leveraging Nova Crest’s optimized settlement rails and liquidity providers.",
      },
      {
        question: "Is compliance handled?",
        answer:
          "Yes. Our system includes automated KYC/AML checks and transaction monitoring for every conversion.",
      },
      {
        question: "Can I embed on/off-ramp in my app?",
        answer:
          "Absolutely. Nova Crest offers embeddable widgets and APIs for seamless integration in web or mobile apps.",
      },
    ],
  ],

  payments: [
    [
      {
        question: "How does Nova Crest’s payment system work?",
        answer:
          "It connects merchants and businesses to blockchain-based payment rails for instant and low-cost global transactions.",
      },
      {
        question: "Which currencies and assets are supported?",
        answer:
          "We support major fiat currencies, stablecoins, and leading cryptocurrencies for settlements and transfers.",
      },
      {
        question: "Can I accept payments on my website?",
        answer:
          "Yes. Nova Crest provides APIs and SDKs for integrating crypto and stablecoin payments into e-commerce platforms.",
      },
      {
        question: "How secure are transactions?",
        answer:
          "All transactions use end-to-end encryption, fraud prevention, and blockchain confirmation for transparency.",
      },
      {
        question: "Does it support recurring or bulk payments?",
        answer:
          "Yes. Businesses can automate recurring, mass, or multi-currency payments through our programmable APIs.",
      },
    ],
  ],
};
//  Product CTA Banners mapped by slug
export const productCtas = {
  "stablecoin-infrastructure": [
    {
      heading: "Empower Your Platform with Next-Gen Stablecoin Infrastructure",
      button: "Schedule a Demo",
    },
  ],

  otc: [
    {
      heading: "Launch Your Digital Finance Revolution Today",
      button: "Get Started",
    },
  ],

  daas: [
    {
      heading: "Seamless Blockchain Solutions for Modern Fintechs",
      button: "Explore Solutions",
    },
  ],

  "onramp-offramp": [
    {
      heading: "Build, Scale, and Secure Your Digital Assets with Confidence",
      button: "Start Building",
    },
  ],

  payments: [
    {
      heading: "Experience Enterprise-Grade Blockchain Innovation",
      button: "Contact Our Team",
    },
  ],
};
