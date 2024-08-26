"use client";
import { BackgroundGradient } from "../ui/background-gradient";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  populasi: {
    label: "jumlah",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface PopulationData {
  year: string;
  populasi: number;
}

interface ChartsData {
  title: string;
  data: PopulationData[];
}

export function LineChartComponent({ data }: { data: ChartsData[] }) {
  return (
    <>
      {data.map((chart, index) => (
        <BackgroundGradient
          className="rounded-[22px] p-4 sm:p-6 bg-gray-100"
          key={index}
        >
          <Card className="w-full border-transparent">
            <CardHeader>
              <CardTitle>{chart.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart
                  accessibilityLayer
                  data={chart.data}
                  margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis
                    dataKey="populasi"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Line
                    dataKey="populasi"
                    type="natural"
                    stroke="var(--color-populasi)"
                    strokeWidth={2}
                    dot={{
                      fill: "var(--color-populasi)",
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  >
                    <LabelList position="top" offset={12} fontSize={10} />
                  </Line>
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </BackgroundGradient>
      ))}
    </>
  );
}
