interface Carro {
  transmision: String;
}

class Vehiculo implements Carro {
  transmision: String;
  marca: String;
  fecha_creacion: String;
  color: String;
  puertas: Number;
  kilometraje: Number = 0;

  // prettier-ignore
  constructor(transmision_:String, marca_:String, fecha_creacion__:String, color_:String, puertas_:Number ) {
    this.transmision = transmision_;
    this.marca = marca_;
    this.fecha_creacion = fecha_creacion__;
    this.color = color_;
    this.puertas = puertas_;
  }

  /**
   * turnOn
   */
  private turnOn() {
    console.log(`el carro con marca ${this.marca} es vendido`);
  }

  /**
   * This method is a getter fot get a acces to the methos private
   */
  public getter() {
    this.turnOn();
  }
}

class Mazda extends Vehiculo {
  /**
   * getOtherMethod
   */
  public getOtherMethod() {
    this.getter();
  }
}

const resultado = new Vehiculo("Standar", "Mazda", "17/03/20", "Rojo", 4);
resultado.getter();

const inherance = new Mazda("Auto", "Rio", "17/03/22", "White", 5);
inherance.getOtherMethod();
