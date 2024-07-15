import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputData({
  label,
  type,
  onChange,
  disabled,
}: {
  label: string;
  type: string;
  onChange: any;
  disabled: any;
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
            disabled = {disabled}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}
