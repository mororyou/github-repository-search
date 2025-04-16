import { Button } from '@/components/_ui/button';
import { Input } from '@/components/_ui/input';

export default function SearchRepositoryForm() {
  return (
    <form className="grid w-full grid-cols-12 gap-4">
      <Input
        className="col-span-10 rounded-full"
        placeholder="レポジトリ名を入力してください"
      />
      <Button className="col-span-2 rounded-full font-semibold" type="submit">
        検 索
      </Button>
    </form>
  );
}
