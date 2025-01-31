import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

type InputFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

const InputField = ({ label, type = "text", placeholder = "" }: InputFieldProps) => {
  return (
    <div className="flex flex-col space-y-1 pr-12 pl-24 pt-2">
      <Label className="text-sm font-avenirLight mb-2" style={{color:"#0C1029"}}>{label}</Label>
      <Input type={type} placeholder={placeholder} className="w-full h-10" />
    </div>
  );
};

export default InputField;