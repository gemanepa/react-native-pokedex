import { ViewStyle } from 'react-native';

// Overriding types because original .d.ts file doesn't
// think the chart should have a style prop, when it should
export type ProgressChartData =
  | Array<number>
  | { labels: Array<string>; data: Array<number> };

export interface ProgressChartProps {
  data: ProgressChartData;
  width: number;
  height: number;
  chartConfig: ChartConfig;
  hideLegend: boolean;
  style: ViewStyle;
}

export class ProgressChart extends React.Component<ProgressChartProps> {}