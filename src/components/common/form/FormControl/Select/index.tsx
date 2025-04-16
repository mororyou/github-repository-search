import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/_ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/_ui/select';

export type SelectFormControlProps = Readonly<{
  label: string;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
}>;

export default function SelectFormControl({
  label,
  placeholder,
  options,
  ...props
}: SelectFormControlProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Select>
          <SelectTrigger {...props}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
