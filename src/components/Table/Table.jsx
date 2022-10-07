import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Container,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageData, setCurrentPage } from '../../helper/chartSlice';
import './Table.scss';


export default function TableData() {
    const data = useSelector((state) => state.chart.currentPageData);
    const allData = useSelector((state) => state.chart.data);
    const currentPage = useSelector((state) => state.chart.currentPage);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPageData(currentPage))
    }, [currentPage])
    return (
            <TableContainer>
                <Table >
                    <TableCaption>All Revenue Data</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>S No.</Th>
                            <Th>Line of Business</Th>
                            <Th>Revenue</Th>
                            <Th>Product</Th>
                            <Th>Posting Period</Th>
                            <Th>ACV</Th>
                            <Th>TCV</Th>
                            <Th>Revenue</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data && data.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.S_no}</Td>
                                    <Td>{item.line_of_business}</Td>
                                    <Td>{item.revenue_type}</Td>
                                    <Td>{item.product}</Td>
                                    <Td>{item.month}-{item.year}</Td>
                                    <Td>{item.acv}</Td>
                                    <Td>{item.tcv}</Td>
                                    <Td>{item.revenue}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
                <Flex w='100%' p={4} color='white' alignItems='center' justifyContent='space-between'>
                    <Button colorScheme='blue'
                        onClick={() => currentPage > 0 && dispatch(setCurrentPage(currentPage - 1))}
                    >Previous</Button>
                    <Button colorScheme='blue'
                        onClick={() => currentPage < Math.floor(allData.length / 10) && dispatch(setCurrentPage(currentPage + 1))}
                    >Next</Button>
                </Flex>

            </TableContainer>
    )
}
