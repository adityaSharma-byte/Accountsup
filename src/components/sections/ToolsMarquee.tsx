const tools = [
  "QuickBooks Online",
  "Xero",
  "NetSuite",
  "Sage Intacct",
  "Sage",
  "Bill.com",
  "Dext",
  "ADP",
  "Gusto",
  "Ceridian Dayforce",
  "Paylocity",
  "Rippling",
  "Wave",
  "FreshBooks",
];

export default function ToolsMarquee() {
  const row = [...tools, ...tools];
  return (
    <div className="marquee py-2">
      <div className="marquee-track gap-4">
        {row.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
