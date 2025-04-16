import BlurText from '@/components/_ui/BlurText';
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
          <BlurText
            text={title}
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-sm text-gray-500"
          />
          <div className="flex items-center gap-2">
            {icon}
            <BlurText
              text={value.toLocaleString()}
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-2xl font-bold"
            />
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
