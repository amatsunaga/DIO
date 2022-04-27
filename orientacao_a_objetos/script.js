class ContaBancaria {
  constructor(agencia, numero, tipo) {
    (this.agencia = agencia),
      (this.numero = numero),
      (this.tipo = tipo),
      (this._saldo = 0);
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(val) {
    this._saldo = val;
  }

  sacar(val) {
    if (val > 0 && val <= this._saldo) {
      this._saldo -= val;
      return this._saldo;
    } else {
      return "Operação negada. Valor inválido.";
    }
  }

  depositar(val) {
    if (val > 0) {
      this._saldo += val;
      return this._saldo;
    }else {
      return "Operação negada. Valor inválido.";
    }
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(val) {
    this._cartaoCredito = val;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }
  sacar(val) {
    if (val > 0 && val < 500 && val <= this._saldo) {
      this._saldo -= val;
      return this._saldo;
    } else return "Operação negada. Valor inválido.";
  }
}