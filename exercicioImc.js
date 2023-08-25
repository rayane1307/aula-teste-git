class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }


    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc  =  this.calcularImc();
        if(imc < 18.5){
            return('Abaixo do  peso');
        }else if(imc >= 18.5 && imc < 25){
            return('peso normal');
        }else if(imc >= 25 && imc < 30){
            return('acima do peso');
        }else if(imc >= 30 && imc < 40){
            return('obeso');
        }else{
            return('obsidade grave');
        }
    }
}

const joao = new Pessoa('joao', 70, 1.70);
console.log(joao.nome);
console.log(joao.classificarImc());

const miguel = new Pessoa('miguel', 45, 1.70);
console.log(miguel.nome);
console.log(miguel.classificarImc());

for (let i = 0; i < miguel.nome.length; i++) {
    const element = miguel.nome[i];
    console.log(element);
    
}