1: Liste 5 portas de entradas de um sistema e explique como ela está trancada.

Tela de Login: exige autenticação com usuário e senha (e, em alguns casos, autenticação em dois fatores). Apenas usuários cadastrados conseguem entrar.
API: requer um token de autenticação (como JWT ou chave de API). Sem um token válido, as requisições são recusadas.
Painel Administrativo: além do login, verifica o nível de permissão do usuário. Somente administradores podem acessar suas funções. 
Banco de Dados: permite conexão apenas para usuários autorizados, mediante nome de usuário, senha e permissões específicas de acesso aos dados. 
Servidor da Aplicação: utiliza configurações de firewall, portas controladas e, geralmente, conexões seguras (HTTPS/TLS), permitindo apenas acessos autorizados e protegendo a comunicação contra interceptação.

--------------------------------------------------

2: Estudo de caso curto: um sistema vazou dados porque o dev não validou input no back-end, só no front. Isso é falha do dev, do time de QA, ou do "sistema" de forma abstrata? Justifique.

A responsabilidade é do desenvolvedor. Ele é o principal responsável por validar os dados no back-end, pois a validação no front-end pode ser facilmente contornada por um invasor. 

--------------------------------------------------

3: Dado um cenário fictício (empresa com 50 mil usuários, vazamento de CPF e e-mail), liste quais tipos de custo essa empresa provavelmente vai enfrentar dê um exemplo concreto de cada um nesse cenário específico.

Financeiro: Gastos com investigação do incidente, contratação de especialistas em segurança e possíveis multas por descumprimento da LGPD.
Jurídico: Custos com advogados e possíveis processos movidos por clientes que tiveram seus dados vazados.
Operacional: Interrupção das atividades para corrigir a falha, atualizar o sistema e reforçar a segurança.
Reputação: Perda de confiança dos clientes, fazendo com que muitos deixem de usar os serviços da empresa.
Atendimento ao cliente: Aumento no número de chamados, necessidade de contratar mais atendentes e enviar comunicados aos 50 mil usuários afetados.
Tecnologia: Investimento em novos sistemas de segurança, criptografia, monitoramento e auditorias para evitar novos vazamentos.

--------------------------------------------------

4: Explique, com suas palavras, por que "o usuário nunca vai perguntar se a senha dele está com hash" é um argumento a favor do desenvolvedor pensar em segurança por conta própria, mesmo sem ninguém pedir.

O usuário normalmente não conhece detalhes técnicos, como hash de senha, criptografia ou validação. Se o desenvolvedor não pensar em segurança por conta própria, podem surgir vulnerabilidades que coloquem em risco os dados dos usuários.

--------------------------------------------------

5: Durante a aula, vimos um ataque de SQL Injection funcionando ao vivo, só editando a URL. Depois de ver isso na prática, o que mudou na sua forma de pensar sobre "só um campo de formulário simples"?

Até um campo de formulário ou um parâmetro na URL pode representar um risco. As vezes um pequeno detalhe pode ser uma porta para uma invasão que pode dar um grande prejuízo.

--------------------------------------------------

6: Vimos dois exemplos reais de empresas atacadas por ransomware que tomaram decisões diferentes (uma pagou o resgate, outra não). Se você fosse o desenvolvedor responsável pelo sistema atacado, não quem decide se paga ou não, mas quem construiu o sistema, o que dessa situação poderia ter sido evitado antes de o ataque acontecer?

Implementar boas práticas de segurança durante o desenvolvimento.
Manter o sistema e as bibliotecas sempre atualizados.
Controlar o acesso dos usuários, concedendo apenas as permissões necessárias.
Proteger senhas com criptografia e usar autenticação forte.

--------------------------------------------------

7: Por que armazenar chaves de API e senhas de banco de dados diretamente no código-fonte (em vez de em variáveis de ambiente) é considerado uma má prática de segurança, mesmo em um repositório privado?
Porque essas informações podem ser expostas por engano, como em vazamentos, compartilhamentos indevidos ou acesso não autorizado ao repositório. 

--------------------------------------------------

8: O que significa "nunca confiar no input do usuário"? Cite um exemplo prático de um campo de formulário comum (nome, e-mail, comentário) que pode virar um vetor de ataque se não for tratado corretamente.

Significa que nem tudo que o usuário inseriu no input é confiável. O campo de comentário pode virar um vetor de ataque se o texto que for inserido for malicioso e o comentário não for tratado da maneira correta.
