import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ({ label }: { label: string }) {
  return (
    <>
      <div>
        <Label htmlFor="email">{label}</Label>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="packaging">Packaging equipment</SelectItem>
            <SelectItem value="flow">Flow Racks</SelectItem>
            <SelectItem value="cantilever">Cantilever Racks</SelectItem>
            <SelectItem value="pallet">Pallet Racks</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}