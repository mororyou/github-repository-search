'use client';

import { Button } from '@/components/_ui/button';
import { Form, FormField } from '@/components/_ui/form';
import InputFormControl from '@/components/common/form/FormControl/Input';
import { FormError } from '@/components/common/form/FormError';
import { keywordAtom } from '@/queries/repository';
import {
  SearchRepositorySchema,
  zSearchRepositorySchema,
} from '@/schemas/validations/search';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { Loader2 } from 'lucide-react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

export default function SearchRepositoryForm() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [keyword, setKeyword] = useAtom(keywordAtom);
  const form = useForm<SearchRepositorySchema>({
    resolver: zodResolver(zSearchRepositorySchema),
    defaultValues: {
      repositoryName: keyword,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: SearchRepositorySchema) => {
    setError(null);
    startTransition(() => {
      setKeyword(data.repositoryName);
    });
  };

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-12 gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="col-span-10">
          <FormField
            control={form.control}
            name="repositoryName"
            render={({ field }) => (
              <InputFormControl
                {...field}
                type="text"
                placeholder="リポジトリ名を入力してください"
              />
            )}
          />
        </div>

        <Button
          className="col-span-2 rounded-full font-semibold"
          type="submit"
          disabled={isPending || !form.formState.isValid}
        >
          {isPending && <Loader2 className="h-4 w-4 animate-spin" />}検 索
        </Button>
        {error && <FormError message={error} />}
      </form>
    </Form>
  );
}
