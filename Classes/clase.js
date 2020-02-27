var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    // prettier-ignore
    function Vehiculo(transmision_, marca_, fecha_creacion__, color_, puertas_) {
        this.kilometraje = 0;
        this.transmision = transmision_;
        this.marca = marca_;
        this.fecha_creacion = fecha_creacion__;
        this.color = color_;
        this.puertas = puertas_;
    }
    /**
     * turnOn
     */
    Vehiculo.prototype.turnOn = function () {
        console.log("el carro con marca " + this.marca + " es vendido");
    };
    /**
     * This method is a getter fot get a acces to the methos private
     */
    Vehiculo.prototype.getter = function () {
        this.turnOn();
    };
    return Vehiculo;
}());
var Mazda = /** @class */ (function (_super) {
    __extends(Mazda, _super);
    function Mazda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * getOtherMethod
     */
    Mazda.prototype.getOtherMethod = function () {
        this.getter();
    };
    return Mazda;
}(Vehiculo));
var resultado = new Vehiculo("Standar", "Mazda", "17/03/20", "Rojo", 4);
resultado.getter();
var inherance = new Mazda("Auto", "Rio", "17/03/22", "White", 5);
inherance.getOtherMethod();
