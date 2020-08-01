import RandomData from '../../support/core/RandomData'
import CadastroPage from '../../support/page/CadastroPage'

const data = new RandomData
const cadastro = new CadastroPage


context('Testes na tela de cadastro', () => {
  beforeEach(() => {
    cadastro.acessarSite();
  })

  describe('Cadastro com sucesso', () => {

    it('Realizar cadastro', () => {

      cadastro.informarNome(data.nome());
      cadastro.informarSobrenome(data.sobrenome());
      cadastro.informarNomeLoja(data.company());
      cadastro.informarCelular(data.cpf());
      cadastro.informarCPF(data.cpf());
      cadastro.informarDtNascimento('05/05/1990');
      cadastro.informarOndeVende('Market');
      cadastro.informarMediaMensal('Ainda não');
      cadastro.informarEmail(data.email());
      cadastro.informarConfirmaEmail(data.email());
      cadastro.informarSenha('lucas-porto1');
      cadastro.informarConfirmaSenha('lucas-porto1');
      cadastro.checkTermos();
      cadastro.confirmaCadastro();


      cadastro.informarCep('01025010');
      cadastro.informarNumero('200');
      cadastro.confirmaCadastro();
      cadastro.verificaCadastro('cadastro realizado com sucesso!');


    })
  })

  describe('Falha ao se cadastrar', () => {

    it('Email repetido e CPF já cadastrado', () => {

      cadastro.informarNome(data.nome());
      cadastro.informarSobrenome(data.sobrenome());
      cadastro.informarNomeLoja(data.company());
      cadastro.informarCelular('81062338049');
      cadastro.informarCPF('81062338049');
      cadastro.informarDtNascimento('05/05/1990');
      cadastro.informarOndeVende('Market');
      cadastro.informarMediaMensal('Ainda não');
      cadastro.informarEmail('dannie_kub8237@hotmail.com');
      cadastro.informarConfirmaEmail('dannie_kub8237@hotmail.com');
      cadastro.informarSenha('lucas-porto1');
      cadastro.informarConfirmaSenha('lucas-porto1');
      cadastro.checkTermos();
      cadastro.confirmaCadastro();
      
      cadastro.verificaCadastro('Email já cadastrado')
      cadastro.verificaCadastro('CPF já cadastrado')


    })
  })
})