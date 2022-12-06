import { TableCell, TableContainer, TableHead, TableRow, Paper, Table } from "@mui/material";

function AdminProdutos() {
    return (
        <TableContainer component={Paper}>
            <Table align="center" sx={{ width: "100%"}}>
                <TableHead>
                    <TableRow sx={{display: "flex", textAlign: "center", justifyContent:"center"}}>
                        <TableCell sx={{alignItems: "center", padding: "2em" ,margin: "0 2em"}}>ID PRODUCT</TableCell>
                        <TableCell  sx={{alignItems: "center", padding: "2em" ,margin: "0 2em"}}>TITLE</TableCell>
                        <TableCell  sx={{alignItems: "center", padding: "2em" ,margin: "0 2em"}}>PICTURE</TableCell>
                        <TableCell  sx={{alignItems: "center", padding: "2em" ,margin: "0 2em"}}>PRICE</TableCell>
                        <TableCell  sx={{alignItems: "center", padding: "2em" ,margin: "0 2em"}}>CATEGORY</TableCell>
                    </TableRow>
                </TableHead>

            </Table>


        </TableContainer>
    )

}
export default AdminProdutos;

