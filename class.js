class Family {
    constructor (options) {
        this.name = options.name;
        this.gender = options.gender;
        this.age = options.age;
        this.hairColor = options.hairColor;

    }
}

class Mum extends Family {
    constructor (options) {
        super(options);

        this.car = options.car;
    }
}

class Dad extends Family {
    constructor (options) {
        super(options);

        this.car = options.car;
        this.beard = options.beard;
    }
}

class Brother1 extends Family {
    constructor (options) {
        super(options);

        this.sanity = options.sanity;
    }
}

class Brother2 extends Family {
    constructor (options) {
        super(options);

        this.sanity = options.sanity;
    }
}

const family = [
    new Mum({
        name: 'Svetlana',
        age: '38',
        gender: 'f',
        hairColor: 'brown',
        car: 'true'
    }),
    new Dad({
        name: 'Sergey',
        age: '47',
        gender: 'm',
        hairColor: 'black',
        car: 'true',
        beard: 'false'
    }),
    new Brother1({
        name: 'Ilya',
        age: '14',
        gender: 'm',
        hairColor: 'brown',
        sanity: 'abit'
    }),
    new Brother2({
        name: 'Pasha',
        age: '9',
        gender: 'm',
        hairColor: 'xz',
        sanity: 'false'
    })
]

console.log(family);



prompt('sdfvdsf');


/*

class Engene {
    constructor (options) {
        this.isV8 = options.isV8;
    }
}

class CarPrice {
    constructor (options) {
        this.rub = options.rub;
    }
}

class Car {
    constructor (options) {
        this.engene = new Engene({});
        this.price = new CarPrice({});

        this.color = options.color;
        this.brand = options.brand;
        this.model = options.model;
        this.cuzovType = options.cuzovType;
        this.privod = options.privod;
        this.gazType = options.gazType;
        this.karobka = options.karobka;
        this.horsePower = options.horsePower;
    }

    getBrand () {
        alert(this.brand);
    }

    static cuzovTypes = {
        sendan: 'Седан',
        hetch: 'хетчбек',
        universal: 'Универсал'
    }
}

class BMW extends Car {
    constructor (options) {
        super(options);

        this.autoPilot = options.autoPilot;
    }
}

class Mersedes extends Car {
    constructor (options) {
        super(options);

        this.music = options.music;
    }
}

class Audi extends Car {
    constructor (options) {
        super(options);

        this.sirena = options.sirena;
    }
}

const products = [
    new Audi({
        model: 'RS6',
        cuzovType: Car.cuzovTypes.universal
    }),
    new Audi({}),
    new Mersedes({}),
    new Mersedes({}),
    new Mersedes({}),
    new BMW({})
];

const audi = new Audi({
    brand: 'Audi',
    model: 'RS6',
    cuzovType: Car.cuzovTypes.universal
});

const mersedes = new Mersedes({
    brand: 'Mersedes',
    model: 'GLS',
    cuzovType: Car.cuzovTypes.universal
});

console.log(audi);

*/