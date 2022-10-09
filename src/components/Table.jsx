import { Table, Thead, Tbody, Tr, Td, TableContainer, Button, Flex, VStack, } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

export default function TableData() {
    const data = useSelector((state) => state.revenue.data);
    const [page, setPage] = useState(0);
    const [currentPageData, setCurrentPageData] = useState([]);

    const handlePageChange = (navigate) => {
        if (navigate === 'next')
            page < ((data.length) / 10) - 1 && setPage(prev => prev + 1);

        else if (navigate === 'prev')
            page > 0 && setPage(prev => prev - 1);

    }

    useEffect(() => {
        if (data.length) setCurrentPageData(data.slice(page * 10, (page + 1) * 10));
    }, [data, page])

    return (
        <VStack mt="2rem" mb="2rem">
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                <Td key={index} fontWeight="medium">{key.toUpperCase()}</Td>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentPageData.length > 0 && currentPageData.map((item, index) => (
                            <Tr key={index}>
                                {item && Object.keys(item).map((key, index) => (
                                    <Td key={index}>{item[key]}</Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Flex w="100%" justifyContent="space-between" mt="10px">
                    <Button bg="#3742fa" color="white" onClick={() => handlePageChange("prev")}>Previous</Button>
                    <Button bg="#3742fa" color="white" onClick={() => handlePageChange("next")}>Next</Button>
                </Flex>
            </TableContainer>

        </VStack>
    )
}
