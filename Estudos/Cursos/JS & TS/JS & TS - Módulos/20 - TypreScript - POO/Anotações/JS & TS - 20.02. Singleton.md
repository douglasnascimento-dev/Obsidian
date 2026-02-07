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
> [!banner-icon] Módulo 20

## 🌿Funcionamento

O Singleton é um padrão de código que busca evitar que mais de uma Instância da Mesma Classe possa ser Instanciada ao mesmo tempo.

### 🌿Exemplo

```ts
export class Database {
	private static database: Database;
	
	private constructor(
		private host: string;
	) {}
	
	connect(): void {
		// AÇÃO PARA CONECTAR
	}
	
	static getDatabase(host: string): Database {
		if (Database.database) return Database.database
		
		Database.database = new Database (host);
		return Database.database
	}
}

const db1 = Database.getDatabase('localhost);
db1.connect();

const db2 = Database.getDatabase('localhost);
db2.connect();
```

No caso acima, será criado uma nova `Database` apenas uma vez. Em todas as demais ocasiões, será retornada a `Database` já existente.

