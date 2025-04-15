import { HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './button';

type Props = {
    color: string
    onChange: (val: string) => void
}

const ColorPicker = ({ color, onChange }: Props ) => {
  return (
    <Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className='p-2'>
        <div className='w-5 h-5 shadow-md border rounded-sm' style={{ backgroundColor: color }}></div>
    </Button>
  </PopoverTrigger>
  <PopoverContent><HexColorPicker color={color} onChange={onChange} /></PopoverContent>
</Popover>
  )
}

export default ColorPicker