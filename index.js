class Veiculo { 
  constructor(marca, modelo){ 
    this.marca = marca; 
    this.modelo = modelo; 
  } 
  ligar(){ 
    console.log(`${this.marca} ${this.modelo} foi ligado.`); 
  } 
  desligar(){ 
    console.log(`${this.marca} ${this.modelo} foi desligado.`); 
  } 
} 

class Onibus extends Veiculo { 
  constructor(marca, modelo) { 
    super(marca, modelo); 
    this.quantidadePassageiros = 0; 
    this.limiteMaximo = 30; 
  } 
  embarcar(quantidade) { 
    let totalAposEmbarque = this.quantidadePassageiros + quantidade; 
    if (totalAposEmbarque > this.limiteMaximo) { 
      console.log(`Não pode embarcar. O limite é de 30 pessoas: ${totalAposEmbarque}`); 
    } else { 
      this.quantidadePassageiros = totalAposEmbarque; 
      console.log(`Embarque realizado! Passageiros a bordo: ${this.quantidadePassageiros}`); 
    } 
  } 
} 

const meuOnibus = new Onibus("Mercedes", "Marcopolo"); 
meuOnibus.ligar(); 
meuOnibus.embarcar(40); 
meuOnibus.desligar();