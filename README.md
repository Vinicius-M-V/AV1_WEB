# Lista de Tarefas - AV1 Desenvolvimento Web

## Descrição

Este é um projeto de avaliação (AV1) para a disciplina de Desenvolvimento Web. Trata-se de uma aplicação web simples de lista de tarefas (To-Do List) que permite aos usuários adicionar, editar e excluir tarefas de forma intuitiva.

## Funcionalidades

- **Adicionar Tarefas**: Digite uma tarefa no campo de entrada e clique em "Adicionar" para incluí-la na lista
- **Editar Tarefas**: Clique no botão "Editar" ao lado de qualquer tarefa para modificá-la
- **Excluir Tarefas**: Clique no botão "Excluir" para remover uma tarefa da lista
- **Validação**: O sistema impede a adição de tarefas vazias e exibe mensagens de erro quando necessário
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página web
- **CSS3**: Estilização com gradiente escuro roxo/preto e efeitos visuais
- **JavaScript (Vanilla)**: Lógica de interação e manipulação do DOM

## Como Executar

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em qualquer navegador web moderno
3. A aplicação estará pronta para uso

## Estrutura do Projeto

```
/
├── index.html          # Arquivo principal HTML
├── css/
│   └── style.css       # Estilos CSS da aplicação
└── js/
    └── script.js       # Lógica JavaScript da aplicação
```

## Design

A interface apresenta um tema escuro com gradiente que vai do roxo escuro para o preto, proporcionando uma experiência visual moderna e elegante. Os elementos interativos possuem efeitos de sombra e bordas coloridas para destacar a funcionalidade.

## Funcionalidades Técnicas

- Manipulação dinâmica do DOM para renderização da lista
- Armazenamento temporário das tarefas em memória (array JavaScript)
- Eventos de formulário para prevenir recarregamento da página
- Validação de entrada do usuário
- Interação via prompts para edição de tarefas
