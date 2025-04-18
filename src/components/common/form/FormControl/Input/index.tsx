import { FormControl, FormItem, FormMessage } from '@/components/_ui/form';
import { Input } from '@/components/_ui/input';

export type InputFormControlProps = Readonly<{
  type: 'text' | 'email' | 'number' | 'tel' | 'url';
  placeholder?: string;
}>;

export default function InputFormControl({
  type,
  placeholder,
  ...props
}: InputFormControlProps) {
  return (
    <FormItem>
      <FormControl>
        <Input type={type} placeholder={placeholder} {...props} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
