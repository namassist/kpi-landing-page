"use client"
import { BackgroundGradient } from "../ui/background-gradient";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { year: "2021", populasi: 0 },
  { year: "2022", populasi: 3 },
  { year: "2023", populasi: 10 },
  { year: "2024", populasi: 10 },
]

const chartConfig = {
  populasi: {
    label: "jumlah",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


export function LineChartComponent() {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-foreground">
    <Card className="w-full bg-foreground text-neutral-200 border-transparent">
        <CardHeader>
          <CardTitle>Grafik Populasi Mambruk</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
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
                color="text-neutral-200"
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
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-neutral-100"
                  fontSize={12}
                />
              </Line>
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </BackgroundGradient>
  )
}
