
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SiTypescript, SiPython } from "react-icons/si";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { RiJavaLine } from "react-icons/ri";

const codeSnippets: Record<string, { code: string; language: string }> = {
  typescript: {
    language: "typescript",
    code: `import { NovaCrest, BasePath } from "@novacrest/ts-sdk";
import fs from "fs";
import path from "path";

const secretKey = fs
  .readFileSync(path.resolve(__dirname, "novacrest_secret.key"), "utf8")
  .split(String.raw\`\n\`)
  .join("\\n");

const novacrest = NovaCrest({ secretKey, apiKey: "api-key", basePath: BasePath.US });

// create vault
await novacrest.vaults.createVaultAccount({
  createVaultAccountRequest: { name: "QuickStartVaultAccount" }
});

// create tx
await novacrest.transactions.createTransaction({
  assetId: "BTC",
  source: { id: "1", type: "VAULT_ACCOUNT" },
  destination: { id: "2", type: "VAULT_ACCOUNT" }
});`
  },

  python: {
    language: "python",
    code: `from novacrest_sdk import NovaCrestSDK, TransferPeerPath, VAULT_ACCOUNT

apiSecret = open('novacrest_secret.key', 'r').read()
apiKey = 'api-key'
novacrest = NovaCrestSDK(apiSecret, apiKey)

# create vault
vault = novacrest.create_vault_account("QuickStartVaultAccount")

# create tx
tx = novacrest.create_transaction(
    assetId="BTC",
    source=TransferPeerPath(VAULT_ACCOUNT, 1),
    destination=TransferPeerPath(VAULT_ACCOUNT, 2)
)`
  },

  java: {
    language: "java",
    code: `import com.novacrest.sdk.NovaCrestSDK;
import com.novacrest.sdk.types.*;

NovaCrestSDK novacrest = new NovaCrestSDK("api-key", "novacrest_secret.key");

// create vault
VaultAccount vault = novacrest.createVaultAccount("QuickStartVaultAccount");

// create tx
TransactionResponse tx = novacrest.createTransaction(
    new TransactionRequest("BTC", 
        new TransferPeerPath(PeerType.VAULT_ACCOUNT, "1"),
        new TransferPeerPath(PeerType.VAULT_ACCOUNT, "2"))
);`
  }
};
export default function DevSection() {
  const [activeTab, setActiveTab] = useState<"typescript" | "python" | "java">(
    "java"
  );

  const tabs = [
    { id: "java", label: "Java", icon: <RiJavaLine size={16} /> },
    { id: "typescript", label: "TypeScript", icon: <SiTypescript size={16} /> },
    { id: "python", label: "Python", icon: <SiPython size={16} /> },
  ] as const;

  return (
    <section className="mt-10 sm:mt-16 md:mt-20 bg-[#0a1630] text-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 rounded-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side */}
        <div className="mt-4 sm:mt-6 md:mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight mb-4">
            Create Secure Digital Asset Solutions With Nova Crest APIs
          </h2>
          <p className="text-base sm:text-lg text-gray-300 my-6 sm:my-8">
            Explore the Nova Crest platform to build with security and scale 
            without limits using our APIs, SDKs, guides, and tutorials.
          </p>
          <Button variant="secondary" showArrow className="px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base text-white md:text-lg">
            Explore more
          </Button>
        </div>

        {/* Right side */}
        <div className="bg-[#111c3d] rounded-xl shadow-lg p-3 sm:p-4 overflow-x-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#1c2a52] text-violet-400"
                    : "bg-transparent text-gray-400 hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language={codeSnippets[activeTab].language}
              style={oneDark}
              wrapLines={true}
              customStyle={{
                background: "#0a1328",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                padding: "1rem",
                minWidth: "100%",
              }}
            >
              {codeSnippets[activeTab].code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
