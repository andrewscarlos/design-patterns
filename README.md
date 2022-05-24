# Design Patterns

## Benefícios

    * Você não precisa reinventar a roda
    * Padrão universais facilitam o entendimento do seu projeto
    * Evitar refatoração desnecessária
    * Ajuda na reutilizaçã de código (DRY)
    * Abstrai e nomeia partes particulares do projeto
    * Ajuda na aplicação dos princípios do design orientado a objetos (SOLID)
    * Facilitam a criação de testes unitários

## Problemas

    * Alguns padrões podem ser complexos até que você os compreenda
    * Muito código para atingit um objetivo simples
    * Podem trazer otimizações prematuras para o seu codigo (YAGNI)
    * Seu usados incorretamente, porem atrapalhar ao invés de ajudar

# Padrões de projetos de criação
- Os padrões de projeto de criação são padrões que abstraem o processo de instanciação e criação de objetos. Eles ajudam a tornar um sistema independente de como seus objetos são representados, criados e compostos. Geralmente, atingem este objetivo delegando tarefas para outros objetos.

- Esses padrões dão muita flexibilidade ao sistema, porque encapsulam o conhecimento sobre quais classes concretas são usadas. Além disso, ocultam o modo como as instâncias são criadas e compostas. O foco é eliminar conhecimento do cliente sobre o QUE, COMO e QUANDO está sendo criado e QUEM faz parte do processo de criação.  

    * Abstract factory - Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas;
    * Factory Method - Definir uma interface para criar um objeto, mas deixar as subclasses decidirem qual classe a ser instanciada. O Factory Method permite a uma classe postergar (defer) a instanciação às subclasses;
    * Builder - Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações.
    * Prototype - Especificar os tipos de objetos a serem criados usando uma instância prototípica e criar novos objetos copiando este protótipo;
    * Singleton - Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para ela.

# Padrões de projetos Estrutual

    * Adapter
    * Bridge
    * Composite
    * Decorator
    * Facade
    * Flyweight
    * Proxy

# Padrões de projetos Comportamental
    
    * Interpreter
    * Template Method
    * Chain Of Responsibility
    * Interator
    * Command
    * Mediator
    * Memento
    * Observer
    * State
    * Strategy
    * Visitor
