import { Card, CardContent, CardHeader } from '@/components/_ui/card';

type ResultCardProps = Readonly<{
  title: string;
  value: number;
  icon: React.ReactNode;
}>;

export default function ResultCard({ title, value, icon }: ResultCardProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardContent className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500">{title}</p>
          <div className="flex items-center gap-2">
            {icon}
            <p className="text-2xl font-bold">{value.toLocaleString()}</p>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
