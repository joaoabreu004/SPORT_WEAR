import { Button, Paper, Stack, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from "react";
import { FaTools, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./AdminProdutos.module.scss";





function AdminProdutos() {

    const [produtos, setProdutos] = useState([])


    //OBTER TODOS OS PRODUTOS 
    useEffect(() => {
        fetch("http://localhost:8080/produtos")
            .then(resp => resp.json())
            .then(resp => {
                setProdutos(resp)
                console.log(produtos)
            })
            .catch(err => console.error(err))
    }, []);


    const excluirProduto = (id) => {
        fetch(`http://localhost:8080/produtos/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                const lista = produtos.filter((produto) =>
                    produto.id !== id
                )
                setProdutos([...lista])
            })
            .catch((error) => alert(error))
    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontSize: 20,
            textAlign: "end",
        },
        [`&.${tableCellClasses.body} `]: {
            textAlign: "end",
            fontWeight: "bold"
        },
    }));



    return (
        <section className={style.sectionLista}>
            <h2>TABELA DE PRODUTOS</h2>
            <Paper sx={{ width: '90%', boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2);" }}>
                <TableContainer sx={{maxHeight: 640}}>
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
                                    <StyledTableCell sx={{ textAlign: "center" }}><Button color="warning" variant="text"><Link to={`/admin/produtos/novo/${produto.id}`}><FaTools /></Link></Button></StyledTableCell>
                                    <StyledTableCell sx={{ textAlign: "center" }}><Button onClick={() => excluirProduto(produto.id)} color="error" variant="text"><FaTrashAlt /></Button></StyledTableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Stack direction="row" className={style.buttonSection}>
                <Button variant="contained" className={style.buttonLink}><Link className={style.link} to={`/admin/produtos/novo`}>CADASTRAR PRODUTO</Link></Button>
            </Stack>



        </section>
    )

}
export default AdminProdutos;

