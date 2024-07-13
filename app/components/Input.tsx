import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputData({
  label,
  type,
  onChange,
}: {
  label: string;
  type: string;
  onChange: any;
}) {
  return (
    <>
      <div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">{label}</Label>
          <Input
            placeholder={label}
            id="email"
            type={type}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}
