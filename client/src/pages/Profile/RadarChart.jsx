import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

export default function Radarchart({ reliability, speed, strength, jumping, aerobic }) {
  const data = [
    {
      stats: 'reliability',
      value: parseInt(reliability, 10),
    },
    {
      stats: 'speed',
      value: parseInt(speed, 10),
    },
    {
      stats: 'strength',
      value: parseInt(strength, 10),
    },
    {
      stats: 'jumping',
      value: parseInt(jumping, 10),
    },
    {
      stats: 'aerobic',
      value: parseInt(aerobic, 10),
    },
  ]
  console.log(data);

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
