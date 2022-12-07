import { StyledTableCell, StyledTableRow, TableContainer, TableHead, TableRow, Paper, Table, TableBody, TableCell } from "@mui/material";
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





    return (
        <Paper sx={{ width: '75%'}}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>TITLE</TableCell>
                            <TableCell>IMG</TableCell>
                            <TableCell>PRICE</TableCell>
                            <TableCell>CATEGORY</TableCell>
                            <TableCell>DELETE</TableCell>
                            <TableCell>UPDATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {produtos.map(produto =>
                            <TableRow>
                                <TableCell>{produto.id}</TableCell>
                                <TableCell>{produto.title}</TableCell>
                                <TableCell>{produto.img}</TableCell>
                                <TableCell>{produto.price}</TableCell>
                                <TableCell>{produto.category}</TableCell>
                                <TableCell><FaTrashAlt /></TableCell>
                                <TableCell><FaTools /></TableCell>
                            </TableRow>

                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    )

}
export default AdminProdutos;

