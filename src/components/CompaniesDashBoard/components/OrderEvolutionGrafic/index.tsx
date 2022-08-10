import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Sem 1', uv: 100000, pv: 2400, amt: 2400 },
    { name: 'Sem 2', uv: 180000, pv: 2400, amt: 2200 },
    { name: 'Sem 3', uv: 100000, pv: 2400, amt: 2100 },
    { name: 'Sem 4', uv: 160000, pv: 2400, amt: 2000 },
    { name: 'Sem 5', uv: 100000, pv: 2400, amt: 1900 },
    { name: 'Sem 5', uv: 200000, pv: 2400, amt: 1800 }
];


export function OrderEvolutionGrafic() {


    return (
        <>
             <LineChart width={320} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
        </>
    )
}