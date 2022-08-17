import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

interface IOrderEvolutionGraficProps{
    companySummary: any
}
export function OrderEvolutionGrafic({companySummary}: IOrderEvolutionGraficProps) {
    const [viewPortWidth, setViewPortWidth] = useState<number>(window.innerWidth)
    const data = [
        { name: '05/06-12/06', Faturamento: 100000, pv: 2400, amt: 2000 },
        { name: '19/06-26/06', Faturamento: 180000, pv: 2400, amt: 2000 },
        { name: '03/07-10/07', Faturamento: 100000, pv: 2400, amt: 2000 },
        { name: '17/07-24/07', Faturamento: 160000, pv: 2400, amt: 2000 },
        { name: '31/07-07/08', Faturamento: 100000, pv: 2400, amt: 2000 },
        { name: '08/08-15/08', Faturamento: 200000, pv: 2400, amt: 2000 }
    ];

    return (
        <>
  <BarChart width={(viewPortWidth * 0.8)} height={300} data={data}>
    <XAxis dataKey="name" stroke="#0a00d2" />
    <YAxis />
    <Tooltip  wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
    <Legend  width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px', width: "200px" }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="Faturamento" fill="#2b21e7" barSize={30} />
  </BarChart>
        </>
    )
}