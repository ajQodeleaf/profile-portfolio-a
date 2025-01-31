import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5 pr-12 pl-24 pt-4">
      <Label className="text-sm font-avenirLight mb-2" style={{color:"#0C1029"}}>Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}
