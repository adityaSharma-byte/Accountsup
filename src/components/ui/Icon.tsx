import {
  Globe,
  UserCheck,
  ShieldCheck,
  Coins,
  Plug,
  Lock,
  BookOpen,
  Receipt,
  Percent,
  ClipboardCheck,
  FileText,
  LineChart,
  Wallet,
  BadgeCheck,
  Banknote,
  FileCheck,
  PieChart,
  Users,
  TrendingUp,
  Cpu,
  Database,
  Code,
  Palette,
  Workflow,
  Briefcase,
  Headset,
  Activity,
  Landmark,
  ShoppingBag,
  Building2,
  Factory,
  Rocket,
  type LucideIcon,
} from "lucide-react";

// Central kebab-key → lucide component map, with a safe fallback so a missing
// or mistyped key can never break the build.
const map: Record<string, LucideIcon> = {
  globe: Globe,
  "user-check": UserCheck,
  "shield-check": ShieldCheck,
  coins: Coins,
  plug: Plug,
  lock: Lock,
  "book-open": BookOpen,
  receipt: Receipt,
  percent: Percent,
  "clipboard-check": ClipboardCheck,
  "file-text": FileText,
  "line-chart": LineChart,
  wallet: Wallet,
  "badge-check": BadgeCheck,
  banknote: Banknote,
  "file-check": FileCheck,
  "pie-chart": PieChart,
  users: Users,
  "trending-up": TrendingUp,
  cpu: Cpu,
  database: Database,
  code: Code,
  palette: Palette,
  workflow: Workflow,
  briefcase: Briefcase,
  headset: Headset,
  activity: Activity,
  landmark: Landmark,
  "shopping-bag": ShoppingBag,
  "building-2": Building2,
  factory: Factory,
  rocket: Rocket,
};

export default function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = map[name] ?? Globe;
  return <Cmp size={size} className={className} />;
}
