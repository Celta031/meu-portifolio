# Meu Portfólio - Cientista de Dados e Desenvolvedor de ML

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência como Cientista de Dados e Desenvolvedor de Machine Learning.

## 📚 Seções

O portfólio está organizado nas seguintes seções:

* **Início:** Uma apresentação inicial com minhas principais qualificações.
* **Sobre:** Uma breve descrição sobre minha trajetória, paixão por dados e tecnologia.
* **Habilidades:** Detalhamento das minhas competências técnicas e ferramentas que utilizo.
* **Projetos:** Uma vitrine com alguns dos meus trabalhos em Dashboards, Análise de Dados, Software e IA.
* **Experiência:** Minha trajetória profissional na área de tecnologia.
* **Formação:** Minha formação acadêmica e certificações.
* **Contato:** Um formulário para contato e minhas redes sociais.

## ✨ Funcionalidades

* **Design Responsivo:** Totalmente adaptável para visualização em desktops, tablets e smartphones.
* **Tema Claro/Escuro:** Possibilidade de alternar entre os temas para uma melhor experiência de visualização.
* **Animações:** Utilização de `framer-motion` para animações suaves e interativas.
* **Componentes Reutilizáveis:** Construído com componentes modulares para fácil manutenção e escalabilidade.
* **Formulário de Contato Funcional:** Envio de mensagens diretamente para o meu e-mail através do FormSubmit.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **Next.js:** Framework React para renderização no lado do servidor e geração de sites estáticos.
* **React:** Biblioteca para construção de interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **Tailwind CSS:** Framework CSS para estilização rápida e customizável.
* **Shadcn/ui:** Coleção de componentes de UI reutilizáveis.
* **Framer Motion:** Para animações e transições.
* **Lucide React:** Biblioteca de ícones.

## 🚀 Implantação (Deploy)

Este projeto está hospedado em uma máquina virtual (VPS) Ubuntu na **Oracle Cloud Infrastructure (OCI)**, utilizando **Nginx** como servidor web reverso.

### Configuração do Nginx

Abaixo, um exemplo básico de configuração do Nginx para servir uma aplicação Next.js:

```nginx
server {
    listen 80;
    server_name seu_dominio.com; # Substitua pelo seu domínio

    location / {
        proxy_pass http://localhost:3000; # A porta onde sua aplicação Next.js está rodando
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
