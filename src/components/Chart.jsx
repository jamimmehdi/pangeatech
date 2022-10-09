import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { setChartData } from "../utils/common/commonFunction";
const color = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

export default function Chart() {
    const sumOfRevenueProduct = useSelector((state) => state.revenue.sumOfRevenueProduct);
    const [data, setData] = useState([]);

    useEffect(() => {
        setChartData(sumOfRevenueProduct, setData)
    }, [sumOfRevenueProduct]);

    return (
        <VStack mt="2rem">
            <ResponsiveContainer width="80%" height={300}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                        key !== "month" && <Line key={index} type="monotone" dataKey={key} stroke={color[index]} strokeWidth={2} />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </VStack>
    )
}
