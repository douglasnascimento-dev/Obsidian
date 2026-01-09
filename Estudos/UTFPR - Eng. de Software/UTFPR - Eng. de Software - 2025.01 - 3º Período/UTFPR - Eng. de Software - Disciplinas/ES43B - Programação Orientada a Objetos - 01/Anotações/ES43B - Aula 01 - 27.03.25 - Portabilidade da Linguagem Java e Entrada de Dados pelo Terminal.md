---
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Tipo: Anotação
---

![[Programação Orientada a Objetos.png|banner]]
> [!banner-icon] 🌿Aula 27.03.25

## 🌳 O Que é Portabilidade na Linguagem Java?

Portabilidade em Java refere-se à capacidade de executar programas escritos nessa linguagem em diferentes plataformas (sistemas operacionais) sem a necessidade de recompilação. Isso é possível graças ao conceito de "_write once, run anywhere_" (escreva uma vez, execute em qualquer lugar), que se baseia na Máquina Virtual Java (JVM).

Em linguagens como C, a compilação estabelece uma conexão direta com o sistema operacional. Dessa forma, o executável gerado tem a capacidade de se comunicar apenas com o sistema operacional para o qual ele foi criado. Veja a representação abaixo:

- **Funcionamento**: 'CodigoEmC.c' > Compilação > Sistema Operacional > 'CodigoEmC.exe'

Já na linguagem Java, o processo de compilação não se comunica diretamente com o sistema operacional. Para fazer essa comunicação, é utilizada a JVM, que possui a função de ser um interpretador para a linguagem Java. É por isso que, ao executar um arquivo Java, se declara da seguinte forma: _java NomeDoArquivo.class_. A declaração da palavra "java" antes do nome do arquivo é uma chamada à JVM. Veja a representação abaixo:

- **Funcionamento**: 'CodigoEmJava.java' > Compilação > JVM > Sistema Operacional > JVM > 'CodigoEmJava.class'

Observe que, em momento algum, o arquivo de compilação se comunica diretamente com o sistema operacional. Isso permite que o Java tenha comandos universais para qualquer sistema operacional. Ou seja, um arquivo '.class' pode ser executado em Windows, Linux ou macOS, sem necessidade de recompilação.

## 🌳Execução de Arquivos pelo Terminal

Para executar um programa em Linguagem Java pelo Terminal, é necessário seguir os seguintes passos. Primeiramente, é necessário compilar esse programa para isso será utilizado o seguinte comando no CMD do Windows. Isso chamará o compilador da Linguagem Java

```
javac NomeDoArquivo.java
```

Após a compilação do arquivo java, é necessário um segundo comando para iniciar a JVM, e executar o programa no Windows. Observe que tanto para a compilação, quanto para a execução, o nome da Classe tem que ser semelhante ao nome do Arquivo, inclusive com Case Sensitive

```
java NomeDoArquivo
```

### 🌿Passando e Recebendo Parâmetros pelo Terminal

Todo parâmetro que for passado pelo terminal, irá ser recebido pela função 'main', para isso a 'main' deve conter os seguintes argumentos

```java
public static void main(String[] args){}
```

Observe que todo parâmetro será recebido em um arrays de string, ou seja, mesmo que for passado um número, esse número estará tipificado como string. Para passar um valor através do terminal, é necessário declarar o conteúdo após a chamada do arquivo para a execução.

```
java NomeDoArquivo Parametro01 Paramentro02 "Isso será um ùnico parametro"
```