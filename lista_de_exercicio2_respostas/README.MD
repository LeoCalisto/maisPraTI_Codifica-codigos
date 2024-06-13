Para a execução correta dos arquivos é necessário realizar alguns passos.
1- Baixar e instalar o Node.js no computado para o que codigo sera reproduzido na máquina(PC)

2- Enviar o comando "npm install prompt-sync" no terminal do VScode(Editor de texto) fazendo assim os módulos necessários para a crição do leitor de dados de entrada serem instalados.

3- Para Reprodução do código pode ser instalado a extensão "Code runner" e nas configurações da extensão marcar a opção para executar no terminal OU ir diretamente no terminal e iniciar o arquivo manualme com o comando " node 'nomeDoArquivo'.js "

4-O enunciado de cada questão está como comentario dentro do código, salvo a questão 50 que se refere a um sistema de reservas em hotel que será descrito abaixo:

Desafio 50:
Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
  ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
  cidade, quartos totais e quartos disponiveis.
  ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
  nomeCliente.
  
2. Funcionalidades:
  ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
  ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
  disponíveis em uma cidade específica.
  ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
  deve diminuir o número de quartos disponiveis do hotel.
  ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
  aumentar o número de quartos disponiveis no hotel correspondente.
  ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
  cliente.
  
3. Regras de Negócio:
  ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
  ○ As reservas devem ser identificadas por um ID único e associadas a um
  único hotel.
  
4. Desafios Adicionais (Opcionais):
  ○ Implementar uma função de check-in e check-out que atualize a
  disponibilidade de quartos.
  ○ Gerar relatórios de ocupação para um hotel.
  ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
  avaliações dentro do objeto do hotel.
