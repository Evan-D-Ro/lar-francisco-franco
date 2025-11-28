# Lar Francisco Franco - Rancharia/SP

Este é o repositório oficial do site institucional do **Lar Francisco Franco**, uma organização dedicada ao atendimento e desenvolvimento social em Rancharia, São Paulo.

O projeto visa modernizar a presença digital da instituição, facilitando a divulgação de notícias, transparência de parcerias (Projeto Guri, AABB Comunidade, Governo) e informações sobre o atendimento às crianças e adolescentes.

## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando uma stack moderna focada em performance e manutenibilidade:

* **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
* **[Vite](https://vitejs.dev/)**: Build tool rápida para desenvolvimento web moderno.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first para estilização ágil.
* **[shadcn/ui](https://ui.shadcn.com/)**: Coleção de componentes de interface reutilizáveis e acessíveis.

## ✨ Funcionalidades

* **Design Responsivo**: Adaptável para dispositivos móveis, tablets e desktops.
* **Seção de Parcerias**: Exibição dinâmica dos parceiros (Governo, AABB, Guri).
* **Gestão de Notícias**: Integração com API para atualização de eventos e novidades.
* **Animações Suaves**: Utilização de transições para uma experiência de usuário agradável.

## 🚀 Como executar o projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/Evan-D-Ro/lar-francisco-franco.git](https://github.com/Evan-D-Ro/lar-francisco-franco.git)
    ```

2.  Acesse a pasta do projeto:
    ```bash
    cd lar-francisco-franco
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

4.  Configure as variáveis de ambiente:
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione as chaves necessárias (ex: Tokens de API) conforme o modelo do projeto.
    * *Nota: O arquivo .env não é versionado por questões de segurança.*

5.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

O projeto estará rodando em `http://localhost:8080` (ou outra porta indicada no terminal).

## 📁 Estrutura do Projeto

```text
lar-francisco-franco/
├── src/
│   ├── components/   # Componentes React reutilizáveis
│   ├── pages/        # Páginas principais da aplicação
│   ├── lib/          # Utilitários e configurações
│   └── index.css     # Estilos globais e Tailwind
├── public/           # Assets estáticos (imagens, logos) e API endpoints
└── package.json      # Dependências e scripts