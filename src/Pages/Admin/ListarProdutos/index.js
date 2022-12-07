import { useEffect, useState } from "react";
import { FaTrashAlt, FaTools } from "react-icons/fa"
import { Table } from "react-bootstrap";

function ListarProdutos() {


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
        <>
            <Table striped style={{ width: "50%", padding: "2em", boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)" }}>
                <thead style={{ background: "#000", color: "#fff", fontWeight: "bold" }}>
                    <tr>
                        <th style={{ textAlign: "start" }}>#</th>
                        <th style={{ textAlign: "start" }}>TITLE</th>
                        <th style={{ textAlign: "start" }}>PRICE</th>
                        <th style={{ textAlign: "start" }}>CATEGORY</th>
                        <th style={{ textAlign: "center" }}>UPDATE</th>
                        <th style={{ textAlign: "center" }}>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => {
                        return (
                            <tr>
                                <td style={{ textAlign: "start " }}>{produto.id}</td>
                                <td style={{ textAlign: "start " }}>{produto.title}</td>
                                <td style={{ textAlign: "start " }}>{produto.price}</td>
                                <td style={{ textAlign: "start " }}>{produto.category}</td>
                                <td style={{ textAlign: "center" }}><button style={{ color: "#143F6B", border: "none", background: "none" }}><FaTools /></button></td>
                                <td style={{ textAlign: "center" }}><button style={{ color: "#F55353", border: "none", background: "none" }}><FaTrashAlt /></button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )

}
export default ListarProdutos();

