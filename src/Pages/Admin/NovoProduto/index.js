import { Typography, TextField, Card, CardContent, Button, CardActions, Select, InputLabel, FormControl, OutlinedInput, MenuItem, } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import style from './NovoProduto.module.scss'
function NovoProduto() {

    const [titulo, setTitulo] = useState("")
    const [imagem, setImagem] = useState("")
    const [preco, setPreco] = useState("")
    const [categoria, setCategoria] = useState("")


    const categorias = ["Vestuário", "Artigos", "Acessórios", "Calçados"]
    var produto = {}



    const CamposTexto = styled(TextField)({
        margin: '0 2em'
    })


    const handleChange = (e) => {
        setCategoria(e.target.value);
    }

    const criarDados = (e) => {
        e.preventDefault();



        var title = titulo
        var img = imagem
        var price = preco
        var category = categoria

        const produto = {
            title ,
            img,
            price,
            category
        }


        fetch('http://localhost:3000/produtos', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setTitulo("")
                setImagem("")
                setPreco("")
                setCategoria("")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <section className={style.form_produto}>
            <form style={{ "padding": "2em", "width": "50%", "backgroundColor": "#f2f2f2", "display": "flex", "flexDirection": "column", "borderRadius": "20px" }} onSubmit={criarDados}>
                <Typography m="2" variant="h6">PRODUTO</Typography>
                <FormControl sx={{ width: "100%" }}>
                    <TextField
                        className={style.input_textos}
                        id="filled-basic"
                        label="NOME PRODUTO"
                        value={titulo}
                        required
                        onChange={(e) => setTitulo(e.target.value)} />
                    <TextField
                        className={style.input_textos}
                        id="filled-basic"
                        label="URL IMG"
                        value={imagem}
                        required
                        onChange={(e) => setImagem(e.target.value)}
                    />
                    <TextField
                        className={style.input_textos}
                        id="filled-basic"
                        label="PREÇO"
                        required
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel id="demo-multiple-name-label">CATEGORIA</InputLabel>
                    <Select
                        className={style.input_textos}

                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={categoria}
                        onChange={handleChange}
                        sx={{ textAlign: "left" }}
                        input={<OutlinedInput id="select-multiple-chip" label="CATEGORIA" />}
                    >
                        {categorias.map((categoria) => (
                            <MenuItem key={categoria} value={categoria}>
                                {categoria}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button variant="contained" type="submit" color="success" sx={{ "color": "#fff", "width": "100%", "margin": "10px 0 " }}>
                        CRIAR AGORA
                    </Button>
                </FormControl>
            </form>

        </section>

    )

}
export default NovoProduto