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
      "Tokenize, distribute, and manage digital assets  from NFTs to tokenized securities  through one API-powered infrastructure.",
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
          "Yes, Nova Crest allows full customization  from naming and design to smart contract logic and compliance configurations.",
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
          "It’s Nova Crest’s end-to-end solution for tokenizing, distributing, and managing digital assets  including NFTs, tokens, and securities.",
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
          "It enables users to convert between fiat and crypto assets seamlessly  either entering (on-ramp) or exiting (off-ramp) the crypto ecosystem.",
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
// 🏆 Product Reviews mapped by slug
export const productReviews = {
  "stablecoin-infrastructure": [
    {
      logo: "/Partners/metamask.svg",
      company: "MetaMask",
      quote:
        "Nova Crest’s stablecoin infrastructure gave us full control and transparency over our tokenized reserves  setting new standards for compliant, enterprise-grade deployments.",
      author: "Lorenzo Santos",
      role: "Product Lead, MetaMask",
      image: "/Partners/lorenzo.png",
    },
    {
      logo: "/Partners/new-visa-logo.webp",
      company: "Visa",
      quote:
        "Through Nova Crest’s reserve-backed framework, Visa can now facilitate cross-border settlements faster and with on-chain verifiability  a true evolution in payments.",
      author: "Yanilsa Gonzalez-Ore",
      role: "VP Payments, Visa",
      image: "/Partners/yanilsa.jpeg",
    },
  ],

  otc: [
    {
      logo: "/Partners/Kraken-logo.png",
      company: "Kraken",
      quote:
        "Nova Crest’s OTC technology seamlessly integrates liquidity from top exchanges, enabling high-volume institutional execution with precision and reliability.",
      author: "James Ellis",
      role: "Head of OTC, Kraken",
        image: "/Partners/lorenzo.png",
    },
    {
      logo: "/Partners/binance-us.svg",
      company: "Binance Institutional",
      quote:
        "By leveraging Nova Crest’s OTC aggregation tools, our trading desk achieved deeper liquidity access and faster settlement cycles across multiple networks.",
      author: "Clara Zhang",
      role: "Global Trading Operations, Binance",
     image: "/Partners/mary-cath.jpeg",
    },
  ],

  daas: [
    {
      logo: "/Partners/Trust-Wallet-Logo.png",
      company: "Trust Wallet",
      quote:
        "With Nova Crest’s Digital Assets as a Service, we launched tokenized assets globally  achieving high scalability and compliance without compromising user experience.",
      author: "Maria Lopez",
      role: "Blockchain Partnerships, Trust Wallet",
     image: "/Partners/yanilsa.jpeg",
    },
    {
  logo: "/Partners/phantom.svg",
  company: "Phantom",
  quote:
    "By leveraging Nova Crest’s DaaS infrastructure, Phantom delivers seamless tokenized asset management with enterprise-grade security and transparent on-chain verification.",
  author: "Ryan Peterson",
  role: "Partnerships Manager, Phantom",
  image: "/Partners/lorenzo.png",
},
  ],

  "onramp-offramp": [
    {
      logo: "/Partners/gpay.svg",
      company: "Google Pay",
      quote:
        "Nova Crest’s on/off-ramp APIs helped us embed seamless crypto-to-fiat transactions directly within Google Pay, all under strict global compliance frameworks.",
      author: "Kevin Brooks",
      role: "Payments Strategy, Google Pay",
      image: "/Partners/brian.png",
    },
    {
      logo: "/Partners/sepa.svg",
      company: "SEPA",
      quote:
        "Partnering with Nova Crest accelerated our digital asset conversion capabilities  enabling near-instant settlements between traditional and blockchain economies.",
      author: "Isabella Grant",
      role: "Crypto Product Lead, SEPA",
      image: "/Partners/mary-cath.jpeg",
    },
  ],

  payments: [
    {
      logo: "/Partners/new-mclogo.svg",
      company: "Mastercard",
      quote:
        "Nova Crest’s blockchain payment rails provide the scalability and compliance needed for enterprise-grade cross-border transfers with real-time transparency.",
      author: "Sophie Turner",
      role: "Innovation Lead, Mastercard",
     image: "/Partners/mary-cath.jpeg",
    },
    {
      logo: "/Partners/apple-pay.svg",
      company: "Apple Pay",
      quote:
        "With Nova Crest’s payment infrastructure, Apple Pay achieved faster settlements and better traceability across digital and fiat payment ecosystems.",
      author: "Michael Reyes",
      role: "Head of Blockchain Integrations, Apple Pay",
      image: "/Partners/brian.png",
    },
  ],
};
export const productDevData = {
  // 🟣 Stablecoin Infrastructure
  "stablecoin-infrastructure": {
    heading: "Build Compliant Stablecoin Infrastructure with Nova Crest SDKs",
    description:
      "Issue, manage, and track reserve-backed stablecoins programmatically with complete transparency, AML-ready controls, and multi-chain deployment using the Nova Crest Stablecoin APIs.",
    buttonText: "Explore Stablecoin API Docs",
    codeSnippets: {
      typescript: {
        language: "typescript",
        code: `import { NovaCrestStablecoin } from "@novacrest/ts-sdk";

const client = new NovaCrestStablecoin({
  apiKey: "api-key",
  secretKey: "secret-key",
  network: "mainnet"
});

// Issue a new stablecoin
await client.issue({
  symbol: "USDN",
  reserveAsset: "USD",
  supply: 1000000
});

// Track reserve proof
const audit = await client.getReserveReport("USDN");
console.log(audit.status);`,
      },
      python: {
        language: "python",
        code: `from novacrest_sdk import StablecoinClient

client = StablecoinClient(api_key="api-key", secret_key="secret-key")

# Issue a new stablecoin
client.issue(symbol="USDN", reserve_asset="USD", supply=1_000_000)

# Get transparency report
report = client.get_reserve_report("USDN")
print(report.status)`,
      },
      java: {
        language: "java",
        code: `import com.novacrest.sdk.StablecoinClient;

StablecoinClient client = new StablecoinClient("api-key", "secret-key");

// Issue a reserve-backed stablecoin
client.issue("USDN", "USD", 1_000_000);

// Fetch transparency audit
client.getReserveReport("USDN");`,
      },
    },
  },

  // 🟢 OTC Infrastructure
  otc: {
    heading: "Automate Institutional Trading with OTC APIs",
    description:
      "Access deep liquidity, automate large-volume trades, and ensure compliance with Nova Crest’s OTC infrastructure APIs for institutional partners.",
    buttonText: "View OTC API Reference",
    codeSnippets: {
      typescript: {
        language: "typescript",
        code: `import { NovaCrestOTC } from "@novacrest/ts-sdk";

const otc = new NovaCrestOTC({ apiKey: "api-key", secretKey: "secret-key" });

// Quote request
const quote = await otc.requestQuote({
  baseAsset: "BTC",
  quoteAsset: "USDT",
  amount: 10,
});

// Execute trade
await otc.executeTrade(quote.id);`,
      },
      python: {
        language: "python",
        code: `from novacrest_sdk import OTCClient

otc = OTCClient(api_key="api-key", secret_key="secret-key")

quote = otc.request_quote(base="BTC", quote="USDT", amount=10)
otc.execute_trade(quote_id=quote["id"])`,
      },
      java: {
        language: "java",
        code: `import com.novacrest.sdk.OTCClient;

OTCClient otc = new OTCClient("api-key", "secret-key");

// Request and execute OTC trade
String quoteId = otc.requestQuote("BTC", "USDT", 10);
otc.executeTrade(quoteId);`,
      },
    },
  },

  // 🔵 DaaS (Digital Assets as a Service)
  daas: {
    heading: "Tokenize and Manage Digital Assets with Nova Crest DaaS",
    description:
      "Leverage Nova Crest’s DaaS SDKs to issue, custody, and manage tokenized assets securely with complete auditability and flexible compliance layers.",
    buttonText: "Explore DaaS Developer Tools",
    codeSnippets: {
      typescript: {
        language: "typescript",
        code: `import { NovaCrestDaaS } from "@novacrest/ts-sdk";

const daas = new NovaCrestDaaS({ apiKey: "api-key", secretKey: "secret-key" });

// Tokenize a digital asset
await daas.createToken({
  name: "RealEstateBond",
  symbol: "REBND",
  type: "ERC20",
  supply: 500000,
});

// List all issued tokens
const tokens = await daas.listTokens();`,
      },
      python: {
        language: "python",
        code: `from novacrest_sdk import DaaSClient

client = DaaSClient(api_key="api-key", secret_key="secret-key")

client.create_token(name="RealEstateBond", symbol="REBND", token_type="ERC20", supply=500_000)
tokens = client.list_tokens()
print(tokens)`,
      },
      java: {
        language: "java",
        code: `import com.novacrest.sdk.DaaSClient;

DaaSClient daas = new DaaSClient("api-key", "secret-key");
daas.createToken("RealEstateBond", "REBND", "ERC20", 500_000);
daas.listTokens();`,
      },
    },
  },

  // 🟡 Onramp/Offramp
  "onramp-offramp": {
    heading: "Enable Seamless Fiat ↔ Crypto Conversion via Nova Crest APIs",
    description:
      "Integrate compliant fiat-to-crypto and crypto-to-fiat conversion directly into your platform with Nova Crest Onramp/Offramp SDKs.",
    buttonText: "Integrate On/Off-Ramp SDK",
    codeSnippets: {
      typescript: {
        language: "typescript",
        code: `import { NovaCrestRamp } from "@novacrest/ts-sdk";

const ramp = new NovaCrestRamp({ apiKey: "api-key", secretKey: "secret-key" });

// Initiate fiat-to-crypto conversion
await ramp.createOnramp({
  fiatCurrency: "USD",
  cryptoAsset: "ETH",
  amount: 1000,
  walletAddress: "0xabc123..."
});

// Off-ramp conversion
await ramp.createOfframp({
  cryptoAsset: "BTC",
  fiatCurrency: "EUR",
  amount: 0.2,
  bankAccount: "DE123456789"
});`,
      },
      python: {
        language: "python",
        code: `from novacrest_sdk import RampClient

ramp = RampClient(api_key="api-key", secret_key="secret-key")

ramp.create_onramp(fiat="USD", crypto="ETH", amount=1000, wallet="0xabc123...")
ramp.create_offramp(crypto="BTC", fiat="EUR", amount=0.2, bank_account="DE123456789")`,
      },
      java: {
        language: "java",
        code: `import com.novacrest.sdk.RampClient;

RampClient ramp = new RampClient("api-key", "secret-key");
ramp.createOnramp("USD", "ETH", 1000, "0xabc123...");
ramp.createOfframp("BTC", "EUR", 0.2, "DE123456789");`,
      },
    },
  },

  // 🔴 Payments
  payments: {
    heading: "Process Global Payments with Blockchain Precision",
    description:
      "Accept, send, and reconcile digital payments at scale through Nova Crest’s high-performance blockchain payment APIs with sub-second finality.",
    buttonText: "Access Payments API Docs",
    codeSnippets: {
      typescript: {
        language: "typescript",
        code: `import { NovaCrestPayments } from "@novacrest/ts-sdk";

const payments = new NovaCrestPayments({ apiKey: "api-key", secretKey: "secret-key" });

// Create payment
await payments.createPayment({
  sender: "Vault123",
  receiver: "Merchant456",
  asset: "USDC",
  amount: 250.00,
});

// Track payment status
const status = await payments.getStatus("txn_001");
console.log(status);`,
      },
      python: {
        language: "python",
        code: `from novacrest_sdk import PaymentsClient

client = PaymentsClient(api_key="api-key", secret_key="secret-key")

client.create_payment(sender="Vault123", receiver="Merchant456", asset="USDC", amount=250.00)
status = client.get_status("txn_001")
print(status)`,
      },
      java: {
        language: "java",
        code: `import com.novacrest.sdk.PaymentsClient;

PaymentsClient client = new PaymentsClient("api-key", "secret-key");
client.createPayment("Vault123", "Merchant456", "USDC", 250.00);
client.getStatus("txn_001");`,
      },
    },
  },
};


