import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

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

  return (
    <RadarChart
      width={500}
      height={250}
      cx="50%"
      cy="50%"
      outerRadius="80%"
      data={data}
      margin={{ right: 0, top: 0, left: 0, bottom: 0 }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="stats" />
      <PolarRadiusAxis />
      <Radar dataKey="value" stroke="#c3d350" fill="#e6f14a" fillOpacity={0.6} />
    </RadarChart>
  )
}
