import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Jan', uv: 10000, pv: 2400, amt: 2400 },
    { name: 'Fev', uv: 18000, pv: 2400, amt: 2200 },
    { name: 'Mar', uv: 10000, pv: 2400, amt: 2100 },
    { name: 'Abr', uv: 16000, pv: 2400, amt: 2000 },
    { name: 'Mai', uv: 10000, pv: 2400, amt: 1900 },
    { name: 'Jun', uv: 20000, pv: 2400, amt: 1700 },
    { name: 'Jul', uv: 20000, pv: 2400, amt: 1500 },
    { name: 'Ago', uv: 20000, pv: 2400, amt: 1200 },
    { name: 'Set', uv: 20000, pv: 2400, amt: 1900 },
    { name: 'Out', uv: 20000, pv: 2400, amt: 2100 },
    { name: 'Nov', uv: 20000, pv: 2400, amt: 1800 },
    { name: 'Dez', uv: 200000, pv: 2400, amt: 2000 }
];


export default function ExpensesGrafic() {


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