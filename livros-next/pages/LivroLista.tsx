// pages/LivroLista.tsx

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';

import Menu from '../componentes/Menu';
import LinhaLivro from '../componentes/LinhaLivro';

import { Livro } from '@/classes/modelo/Livro';
import { ControleLivro } from '@/classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const handleExcluirLivro = (codigo:number) => {    
    controleLivro.excluir(codigo);
    setCarregado(false);
};

  return (
    <div className="container">
      <Menu />
      <main className="mt-5">
        <h1 className="text-center">Catálogo de Livros</h1>
        <table className="table mt-4">
          <thead>
            <tr>
                <th scope="col">Título</th>
                <th scope="col">Resumo</th>
                <th scope="col">Editora</th>
                <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map(livro => (
              <LinhaLivro key={livro.codigo} livro={livro} onExcluir={() => handleExcluirLivro(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
