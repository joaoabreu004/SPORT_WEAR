import { TableContainer, TableHead, TableRow, Paper, Table, TableBody, Button } from "@mui/material";
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from "react";
import { FaTrashAlt, FaTools } from "react-icons/fa"





function AdminProdutos() {

    const [produtos, setProdutos] = useState([])


    //OBTER TODOS OS PRODUTOS 
    useEffect(() => {
        fetch("http://localhost:3000/produtos")
            .then(resp => resp.json())
            .then(resp => {
                setProdutos(resp)
                console.log(produtos)
            })
            .catch(err => console.error(err))
    }, []);




    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontSize: 20,
            textAlign: "end",
        },
        [`&.${tableCellClasses.body}`]: {
            textAlign: "end",
            fontWeight: "bold"
        },
    }));


    return (
        <section>
            <h2>NOSSOS PRODUTOS</h2>
            <Paper sx={{ width: '75%', boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2);" }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#000", color: "#fff" }}>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>TITLE</StyledTableCell>
                                <StyledTableCell>PRICE</StyledTableCell>
                                <StyledTableCell>CATEGORY</StyledTableCell>
                                <StyledTableCell>UPDATE</StyledTableCell>
                                <StyledTableCell>DELETE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {produtos.map(produto =>
                                <TableRow>
                                    <StyledTableCell>{produto.id}</StyledTableCell>
                                    <StyledTableCell>{produto.title}</StyledTableCell>
                                    <StyledTableCell>{produto.price}</StyledTableCell>
                                    <StyledTableCell>{produto.category}</StyledTableCell>
                                    <StyledTableCell sx={{ textAlign: "center" }}><Button color="warning" variant="text"><FaTools /></Button></StyledTableCell>
                                    <StyledTableCell sx={{ textAlign: "center" }}><Button color="error" variant="text"><FaTrashAlt /></Button></StyledTableCell>
                                </TableRow>

                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>



        </section>
    )

}
export default AdminProdutos;

