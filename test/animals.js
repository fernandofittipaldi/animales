const assert = require('assert')
const chai = require('chai')
const spies = require('chai-spies')
const { expect } = chai

chai.use(spies)

const lista = {
  animales: [
    {
      nombre: 1,
      tipo: "Perro"
    },
    {
      nombre: 2,
      tipo: "Gato"
    },
    {
      nombre: 3,
      tipo: "Mono"
    },
  ],

  perros: function() {
    return this.animales.filter(animal => animal.tipo === "Perro")
  },
  gatos: function() {
    return this.animales.filter(animal => animal.tipo === "Gato")
  },
  otros: function() {
    return this.animales.filter(animal => animal.tipo != "Gato" && animal.tipo != "Perro")
  },
}

describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })

 describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      const perros = lista.perros()
      expect(lista.perros()).to.eql(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      const gatos = lista.gatos()
      expect(lista.gatos()).to.eql(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      const otros = lista.otros()
      expect(lista.otros()).to.eql(otros)
    })
    
    it('determina los resultados utilizando Array.filter', () => {
      const otros = lista.animales
  
      chai.spy.on(otros, 'filter')
  
      lista.otros()
      expect(otros.filter).to.have.been.called()
    })
  })
})
