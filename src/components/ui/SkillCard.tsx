import { Card, CardContent } from "./card";
import { Badge } from "./badge";

type SkillInput = {
  name: string;
  level?: number | string;
};

export default function SkillCard({
  skill,
}: {
  skill: SkillInput;
  sIdx: number;
}) {
  const toLabel = (lvl?: number | string) => {
    if (typeof lvl === "string") return lvl;
    if (typeof lvl === "number") {
      if (lvl >= 95) return "Expert";
      if (lvl >= 90) return "Advanced";
      if (lvl >= 80) return "Proficient";
      return "Familiar";
    }
    return undefined;
  };

  const label = toLabel(skill.level);

  return (
    <Card className="bg-card/50 border-border/50">
      <CardContent className="p-4 flex items-center justify-between">
        <span className="font-semibold text-sm">{skill.name}</span>
        {label ? (
          <Badge variant="outline" className="text-[10px] px-2 py-0.5">
            {label}
          </Badge>
        ) : null}
      </CardContent>
    </Card>
  );
}
