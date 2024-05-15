// ControleLivros.ts
import { Livro } from "../modelo/Livro";

const livros: Livro[] = [
    new Livro(1, 1, "Use a Cabeça: Java", "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java", ["Bert Bates", "Kathy Sierra"]),
    new Livro(2, 2, "Java, como Programar", "Milhões de alunos e profissionais aprenderam programação e desemolvimento de software com os livros Deitel.", ["Paul Deitel", "Harvery Deitel"]),
    new Livro(3, 3, "Core Java for the Impatient", "Readers farniiar with Horstmann's original, two-volume \"Core Java\" books who are locking for a comprehensive. but condensed guide to all of the new features and functicns of Java SE 9 will learn how these new features impact the language and core libraries.", ["Cay Horstmann"])
];

export class ControleLivro {
    obterLivros(): Livro[] {
        return livros;
    }

    obterLivro(codigo: number): string {
        const livro = livros.find(e => e.codigo === codigo);
        return livro ? livro.titulo : "Livro não encontrado";
    }

    incluir(livro: Livro): void {
        const codigo = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
        livro.codigo = codigo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
