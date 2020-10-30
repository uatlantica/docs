# Documentação Atlântica ![](https://readthedocs.org/projects/documentacao-atlantica/badge/?version=latest)

Plataforma de Documentação da Atlântica

Esta plataforma encontra-se em https://docs.uatlantica.pt/


### Instalar o Projeto
Antes de instalar o projeto, garantir que o seguinte está instalado e a funcionar:

- Python https://www.python.org/downloads/
- Git https://git-scm.com/downloads
- pip https://bootstrap.pypa.io/get-pip.py
	
Após as dependências estarem instaladas, clonar o projeto para uma área local do computador:
```
cd Pasta (Pasta local onde guardar o projeto)
git init
git remote add origin https://github.com/uatlantica/docs.git
git pull main origin
```

Para concluir a configuração, construir o ambiente:

```
pip install -r requirements.txt
pip install sphinx-autobuild
make html (Windows)
./Makefile html (Linux/MacOS)
```

### Atualizar repositório antes de fazer alterações
```
git pull main origin
```

### Enviar atualizações

Utilizar o Git para enviar alterações.

```
make html
git add --all
git commit -a -m "Descrição das alterações"
git push origin main
```

### Testar localmente

Para testar localmente basta fazer uma build local utilizando o Sphinx

```
make html
```

Será adicionada a pasta _build (ignorada por este reposítorio), com a página em html construída.