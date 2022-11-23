import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    stats: 'speed',
    value: 86,
  },
  {
    stats: 'reliability',
    value: 77,
  },
  {
    stats: 'strength',
    value: 95,
  },
  {
    stats: 'jumping',
    value: 55,
  },
  {
    stats: 'aerobic',
    value: 66,
  },
]

export default function Radarchart() {
  // TODO: Fetch statistic data from user

  return (
    <ResponsiveContainer>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="stats" />
        <PolarRadiusAxis />
        <Radar dataKey="value" stroke="#c3d350" fill="#e6f14a" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
