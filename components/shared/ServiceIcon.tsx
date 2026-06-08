import { Zap, Hammer, ShowerHead, CookingPot, Wrench } from "lucide-react";
import type { ServiceIcon as IconName } from "@/content/services";

const map = {
  zap: Zap,
  hammer: Hammer,
  shower: ShowerHead,
  cooking: CookingPot,
  pipe: Wrench,
} as const;

export function ServiceIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden strokeWidth={1.6} />;
}
