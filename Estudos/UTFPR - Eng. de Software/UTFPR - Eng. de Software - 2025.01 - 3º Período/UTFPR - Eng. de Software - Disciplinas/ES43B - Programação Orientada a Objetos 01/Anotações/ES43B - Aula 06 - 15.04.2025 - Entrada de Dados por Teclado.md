---
Tipo: Anotação
cssclasses:
  - banner
  - banner-fade
  - customMargin
  - yellowCab
  - wideTable
  - wideFC
Nota Final: "0.0"
---

![[Programação Orientada a Objetos.png|banner]]
> [!banner-icon] 🌿Aula 15.04.25

## 🌳Classe 'Leitura'

A Classe Leitura é uma classe de serviço, seu objetivo é permitir a entrada de dados por teclado, durante a execução, não mais o envio por parâmetro durante a execução. Ela receberá uma String que será impressa na tela, e também retornará uma String. Ela pode ser usada para a entrada de qualquer tipo de dados, que futuramente podem ser transformados usando as classes Wrappers

```java
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;

public class Leitura {

	public String entDados(String rotulo){
	
		System.out.printf("%s: ", rotulo);
		InputStreamReader teclado = new InputStreamReader(System.in);
		BufferedReader bufTec = new BufferedReader(teclado);
		String ret = "";

		try { 
			ret = bufTec.readLine();
		} catch(IOException ioe) {
			System.out.printf("ERRO | JVR ou RAM");
		}
			
		
		return ret;
	
	}
}
```

### 🌿Utilizando o classe de serviço Leitura

Antes de utilizar a classe leitura é necessário inicializar ela. Para usar, só é preciso declarar o '.entDados(dados)' e isso retorna uma String, que pode ser preciso transformar ou não.

```java
...
		Leitura l = new Leitura();		
		p1.setCpf(Integer.parseInt(l.entDados("CPF")));
...
```
