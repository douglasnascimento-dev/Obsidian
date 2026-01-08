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

> [!banner-icon] 🌿 Aula 10.06.25

## 🌳 Separando Responsabilidades: Interface Gráfica e Lógica de Negócios

No código fornecido, observamos a interação entre duas classes, 'CadPes' e 'GerPes', que exemplifica um princípio fundamental da engenharia de software: a separação de responsabilidades. A classe 'CadPes' é responsável pela interface com o usuário (a camada de **Apresentação**), enquanto 'GerPes' cuida do gerenciamento dos dados (a camada de **Negócios/Controle**).

---

### 🌿 'CadPes.java': A Camada de Apresentação (View)

Esta classe é um 'JFrame', uma janela gráfica construída com a biblioteca Swing. Sua única responsabilidade é exibir os campos de entrada de dados e os botões para o usuário e capturar as interações dele. Ela não sabe como os dados são salvos, apenas para qual objeto deve enviar essa informação.

```Java
public class CadPes extends javax.swing.JFrame {
    private Pessoa p1 = new Pessoa();
    private final GerPes gp = new GerPes();

    public void insPes(){
        p1 = new Pessoa();
        
         p1.setCpf(Integer.parseInt(cpfInput.getText())); 
         p1.setNome(nomeInput.getText());
         p1 = gp.insPes(p1);
         
         if(p1 != null){
             JOptionPane.showMessageDialog(null, "Cadastro realizado com sucesso", "Inserção de Pessoa", JOptionPane.INFORMATION_MESSAGE);
         } else {
             JOptionPane.showMessageDialog(null, "Já existem uma pessoa com esse CPF", "Inserção de Pessoa", JOptionPane.ERROR);
         }
    
        cpfInput.setText("");
        cpfInput.requestFocus();
   }
}
```

No trecho acima, o método 'insPes' é acionado por um botão. Ele coleta os dados dos campos de texto ('cpfInput' e 'nomeInput'), cria um objeto 'Pessoa' e o envia para o objeto 'gp' (uma instância de 'GerPes') através do método 'gp.insPes(p1)'. A classe 'CadPes' não manipula a lista de pessoas diretamente; ela **delega** essa tarefa. Com base no retorno do método ('p1'), ela simplesmente exibe uma mensagem de sucesso ou erro ao usuário.

---

### 🌿 'GerPes.java': A Camada de Gerenciamento de Dados (Controller)

Esta classe atua como um gerenciador. Ela contém a lógica para manipular os dados — neste caso, uma lista de objetos 'Pessoa' armazenada em memória. Note que esta classe não possui nenhum código relacionado à interface gráfica (nenhum 'import javax.swing.*'). Isso a torna reutilizável, podendo ser usada por uma aplicação web ou de console, por exemplo.

```Java
public class GerPes{
    
    private final List<Pessoa> bdPes = new ArrayList<>();

	public Pessoa consPesCpf(Pessoa pes){
		for(int i = 0; i < bdPes.size(); i++){
			if(pes.getCpf() == bdPes.get(i).getCpf()){
				return bdPes.get(i);
			}
		}
		return null;
	}
        
	public Pessoa insPes(Pessoa pes){
		if(consPesCpf(pes)== null){
			bdPes.add(pes);
			return pes;
		}
		else{
			return null;
		}
	}
}
```

O método 'insPes' em 'GerPes' recebe um objeto 'Pessoa'. Antes de adicioná-lo à lista ('bdPes'), ele utiliza seu próprio método auxiliar, 'consPesCpf', para verificar se já existe uma pessoa com o mesmo CPF. Essa é uma **regra de negócio**. Se o CPF for único, a pessoa é adicionada, e o objeto é retornado para sinalizar sucesso. Caso contrário, retorna 'null', indicando que a regra de negócio foi violada.