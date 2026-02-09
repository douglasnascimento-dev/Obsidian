---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - wideFC
  - wideTable
  - yellowCab
---


![[JS & TS.png|banner]]
> [!banner-icon] Módulo 21

## 🍏Function Overloads

**Conceito:** O _Overload_ (sobrecarga) permite que uma função aceite diferentes combinações de argumentos e retorne tipos diferentes com base neles. O TypeScript seleciona a assinatura correta em tempo de compilação, mas a implementação real deve lidar com todos os casos possíveis.

### 🌿 Implementação

```TS
type codeFunction = {
    (x: number): number;
    (x: number, y: string): string;
    (x: number, y: string, z: boolean, ...args: string[]): boolean;
};

const minhaFuncaoDinamica: codeFunction = (
    x: number, 
    y?: string, 
    z?: boolean, 
    ...args: string[]
): number | string | boolean => {
    
    // Caso 3: Recebeu boolean e args (Retorna boolean)
    if (typeof z === 'boolean' && typeof y === 'string') {
        console.log(`Args extras: ${args.join(', ')}`);
        return z; 
    }

    // Caso 2: Recebeu string (Retorna string)
    if (typeof y === 'string') {
        return `O número é ${x} e o texto é "${y}"`;
    }

    // Caso 1: Apenas número (Retorna number)
    return x * 10;
};
```

> Utilizando a Função:

```TS
const resultado1 = minhaFuncaoDinamica(5); 
// ➝ Retorna number: 50

const resultado2 = minhaFuncaoDinamica(5, "Olá"); 
// ➝ Retorna string: 'O número é 5 e o texto é "Olá"'

const resultado3 = minhaFuncaoDinamica(5, "Teste", true, "extra1", "extra2"); 
// ➝ Retorna boolean: true
```