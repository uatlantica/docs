# Documentação Atlântica ![](https://readthedocs.org/projects/documentacao-atlantica/badge/?version=latest)

Plataforma de Documentação da Atlântica

Esta plataforma encontra-se em https://docs.uatlantica.pt/


### Instalar o Projeto
Antes de instalar o projeto, garantir que o seguinte está instalado e a funcionar:

- Python
- Git
- pip
	
Após as dependências estarem instaladas, clonar o projeto para uma área local do computador.

Para concluir a configuração, construir o ambiente:

```
pip install -r requirements.txt
pip install sphinx-autobuild
make html (Windows)
./Makefile html (Linux/MacOS)
```

### Enviar atualizações

Utilizar o Git para enviar alterações.

```
git add --all
git commit -a -m "Descrição das alterações"
git push
```

### Testar localmente

Para testar localmente basta fazer uma build local utilizando o Sphinx

```
make html
```

Será adicionada a pasta _build (ignorada por este reposítorio), com a página em html construída.