import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface RentEscalationChartProps {
  baseRent: number;
  escalationRate: number;
  years: number;
}

export const RentEscalationChart = ({ baseRent, escalationRate, years }: RentEscalationChartProps) => {
  const data = Array.from({ length: years }, (_, i) => {
    const year = i + 1;
    const rentAmount = baseRent * Math.pow(1 + escalationRate / 100, i);

    return {
      year: `Year ${year}`,
      rent: parseFloat(rentAmount.toFixed(2)),
    };
  });

  return (
    <div className="w-full h-64 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value} PSF`, "Rent"]} labelFormatter={(label) => `${label}`} />
          <Bar dataKey="rent" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
