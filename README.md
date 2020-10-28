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

Antes de enviar atualizações para o repositório, construir a versão HTML com "make html"

```
make html
git add --all
git commit -a -m "Descrição das alterações"
git push
```