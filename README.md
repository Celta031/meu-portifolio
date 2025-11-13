# Meu Portfólio - Engenheiro DevOps e Especialista em Cloud

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência como Engenheiro DevOps, com foco em Cloud, Infraestrutura e Automação.

## 📚 Seções

O portfólio está organizado nas seguintes seções:

* **Início:** Uma apresentação inicial com minhas principais qualificações.
* **Sobre:** Uma breve descrição sobre minha trajetória, paixão por automação e tecnologia.
* **Habilidades:** Detalhamento das minhas competências técnicas e ferramentas que utilizo.
* **Projetos:** Uma vitrine com alguns dos meus projetos de DevOps, Cloud e Automação.
* **Experiência:** Minha trajetória profissional na área de tecnologia.
* **Formação:** Minha formação acadêmica e certificações.
* **Contato:** Um formulário para contato e minhas redes sociais.

## ✨ Funcionalidades

* **Design Responsivo:** Totalmente adaptável para visualização em desktops, tablets e smartphones.
* **Tema Claro/Escuro:** Possibilidade de alternar entre os temas para uma melhor experiência de visualização.
* **Animações:** Utilização de `framer-motion` para animações suaves e interativas.
* **Componentes Reutilizáveis:** Construído com `Shadcn/ui`.
* **Formulário de Contato Funcional:** Envio de mensagens diretamente para o meu e-mail através do FormSubmit.

## 🛠️ Tecnologias Utilizadas

* **Next.js:** Framework React para geração de sites estáticos (SSG).
* **React:** Biblioteca para construção de interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **Tailwind CSS:** Framework CSS para estilização.
* **Shadcn/ui:** Coleção de componentes de UI reutilizáveis.
* **Framer Motion:** Para animações e transições.
* **Lucide React:** Biblioteca de ícones.

## 🚀 Implantação (Deploy) & Pipeline CI/CD

Este projeto possui um pipeline de **Integração e Entrega Contínua (CI/CD)** automatizado com **GitHub Actions**.

### Fluxo do Pipeline:

1.  **Trigger:** Um `push` na branch `main` inicia o workflow.
2.  **Build:** O GitHub Actions faz o checkout do código, faz login no Docker Hub e constrói a imagem Docker da aplicação (baseada no `Dockerfile` Nginx + build estático do Next.js).
3.  **Push:** A nova imagem é enviada para o **Docker Hub** com a tag `latest`.
4.  **Deploy:** O workflow se conecta via **SSH** à VPS (Ubuntu) na **Oracle Cloud Infrastructure (OCI)**.
5.  **Atualização:** Na VPS, o script de deploy:
    * Para o container antigo.
    * Remove o container antigo.
    * Puxa a nova imagem `latest` do Docker Hub.
    * Inicia um novo container com a imagem atualizada, expondo a aplicação na porta `8080`.

### Configuração do Nginx na OCI (Reverse Proxy)

Na VPS, o **Nginx** (instalado no host) atua como um reverse proxy, recebendo o tráfego público na porta 80 e redirecionando-o para o container Docker na porta `8080`.

Exemplo de configuração (`/etc/nginx/sites-available/default`):

```nginx
server {
    listen 80;
    server_name wrmartins.com; # Seu domínio

    location / {
        # Redireciona o tráfego para o container Docker
        proxy_pass http://localhost:8080; 
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}