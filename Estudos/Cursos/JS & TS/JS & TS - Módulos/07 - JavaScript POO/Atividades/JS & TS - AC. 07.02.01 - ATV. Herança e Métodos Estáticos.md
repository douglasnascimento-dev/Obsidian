---
Tipo: Atividade
Início: 2025-02-08
Final: 2025-02-08
Conclusão: 2025-02-10
Conteúdo: " JS & TS - JS POO"
Status: true
Disciplina:
  - JS & TS
---
## 🌳 Exercício: Gerenciamento de Dispositivos Inteligentes

#### 🌱 Descrição

Este exercício tem como objetivo praticar a criação e manipulação de classes em JavaScript, incluindo herança, atributos e métodos estáticos, além de lógica condicional. O sistema de automação residencial deve gerenciar dispositivos inteligentes, permitindo que sejam ligados, desligados, ajustados, conectados ao Wi-Fi e resetados conforme necessário.

### 🌿 Requisitos

#### 🌱 1. Criando a Classe Base - Dispositivo

Crie uma classe Dispositivo com os seguintes atributos e métodos:

- **Atributos:**
    - nome (string): Nome do dispositivo.
    - ligado (boolean): Define se o dispositivo está ligado (inicia como false).
- **Métodos:**
    - ligar(): Liga o dispositivo, a menos que já esteja ligado. Exibe uma mensagem indicando o estado.
    - desligar(): Desliga o dispositivo, a menos que já esteja desligado. Exibe uma mensagem indicando o estado.

#### 🌱 2. Criando a Subclasse SmartDevice

Crie uma classe SmartDevice, que herda de Dispositivo, e adicione:

- **Atributos adicionais:**
    - bateria (número de 0 a 100, inicia em 100).
    - conectadoWiFi (boolean, inicia como false).
- **Métodos adicionais:**
    - usarBateria(): Reduz a bateria em 10 unidades toda vez que o dispositivo for ligado.
    - conectarWiFi(): Conecta o dispositivo ao Wi-Fi se ele estiver ligado.
    - desconectarWiFi(): Desconecta o dispositivo do Wi-Fi.
    - **Regra:** Se a bateria estiver em 0, o dispositivo não pode ser ligado.

#### 🌱 3. Criando a Classe ControleUniversal

Crie uma classe ControleUniversal sem herança, contendo:

- Um **método estático** resetarDispositivo(dispositivo), que:
    - Desliga o dispositivo.
    - Define a bateria como 100, se for um SmartDevice.
    - Exibe uma mensagem informando que o dispositivo foi resetado.

#### 🌱 4. Criando Dispositivos Específicos

Agora, crie duas classes que herdam de SmartDevice:

##### 🌵**SmartLampada**

- **Atributos adicionais:**
    - intensidade (0 a 100, inicia em 50).
- **Métodos adicionais:**
    - ajustarIntensidade(valor): Modifica a intensidade da luz, garantindo que fique entre 0 e 100.

##### 🌵 **SmartTV**

- **Atributos adicionais:**
    - 'canalAtual' (string, inicia como "Nenhum").
    - 'volume' (0 a 100, inicia em 20).
- **Métodos adicionais:**
    - 'mudarCanal(canal)': Altera o canal da TV.
    - 'ajustarVolume(valor)': Modifica o volume, garantindo que fique entre 0 e 100.

### 🌿 Testes

Instancie um objeto de cada classe e realize as seguintes operações:

- Ligue e desligue os dispositivos.
- Conecte e desconecte dispositivos ao Wi-Fi.
- Ajuste a intensidade da SmartLampada.
- Mude de canal e ajuste o volume da SmartTV.
- Use ControleUniversal.resetarDispositivo() para redefinir os dispositivos.

### 🌿 Bônus

1. **Adicione um atributo modoNoturno na SmartLampada**, que reduz automaticamente a intensidade para 20 quando ativado.
2. **Implemente um sistema de economia de bateria**, desligando automaticamente um SmartDevice se a bateria cair abaixo de 5%.

### 🌿 Resultado Esperado

- **Classe Dispositivo**: Permite ligar e desligar dispositivos.
- **Classe SmartDevice**: Inclui bateria e conexão Wi-Fi, com métodos para gerenciar a bateria e Wi-Fi.
- **Classe ControleUniversal**: Método estático para resetar os dispositivos.
- **Classe SmartLampada**: Ajuste de intensidade da luz.
- **Classe SmartTV**: Controle de canal e volume da TV.

Esse exercício abrange herança, lógica condicional, métodos estáticos e encapsulamento de funcionalidades.