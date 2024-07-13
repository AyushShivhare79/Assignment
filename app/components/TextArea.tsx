import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ({
  label,
  onChange,
}: {
  label: string;
  onChange: any;
}) {
  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <Textarea
        id={label}
        placeholder="Type here..."
        className="h-40 rounded-xl"
        onChange={onChange}
      />
    </>
  );
}
