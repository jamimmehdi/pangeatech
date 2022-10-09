const sortByMonth = (arr) => {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    arr.sort((a, b) => months.indexOf(a.month) - months.indexOf(b.month));
}

export const setChartData = (sumOfRevenueProduct, setData) => {
    const products = [];
    Object.keys(sumOfRevenueProduct).forEach((key) => {
        const data = { month: key, ...sumOfRevenueProduct[key] };
        products.push(data);
    })
    sortByMonth(products);
    setData([...products]);
}