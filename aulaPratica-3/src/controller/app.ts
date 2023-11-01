import express from "express";
import { inicializarPessoas, listarPessoas } from "./bancoDeDados";

inicializarPessoas();

const app = express();
const port: number = 3055;

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

res.send({ mensegem: "Estou desenvolvendo a resposta para sua requisição"});
});

app.get('/pessoa', (req, res) => {
    const listaDePessoas = listarPessoas();

    res.json(listaDePessoas);
});

app.listen(port, () => {
    console.log(`Servidor Express ouvindo na endereço https://localhost:${port}/`);
});