import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Admin({ label }: { label: string }) {
  return (
    <>
      <div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">{label}</Label>
          <Input placeholder="Admin/ ID" id="email" />
        </div>
      </div>
    </>
  );
}
