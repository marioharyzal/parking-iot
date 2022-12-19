const parkingLot = (length) => {
    const parkArea = [];

    const park = (car) => {
        return new Promise((resolve, reject) => {
            if (parkArea.length == length) {
                resolve("Mohoh maaf parkir sudah penuh.");
            } else if (parkArea.includes(car)){
                resolve(`Mobil ${car.vehicleOwner} dengan Nopol ${car.vehiclePlate} sudah parkir sebelumnya.`);
            } else {
                setTimeout(() => {
                    parkArea.push(car);
                    resolve(`Mobil ${car.vehicleOwner} dengan Nopol ${car.vehiclePlate} berhasil parkir.`);
                }, 3000);
            }
        });
    };

    const leave = (car) => {
        return new Promise((resolve, reject) => {
            const checkCar = parkArea.includes(car)
            if (!checkCar) resolve(`Mobil dengan nopol ${car.vehiclePlate} tidak ada.`)
            parkArea.forEach((carOnPark, index) => {
                if (carOnPark.vehiclePlate == car.vehiclePlate) {
                    setTimeout(() => {
                        const test = parkArea.splice(index, 1)
                        resolve(`Mobil ${car.vehicleOwner} dengan Nopol ${car.vehiclePlate} sudah keluar.`)
                    }, 1500);
                }
            });
        })
    };

    const check = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const statusPark = {capacity: length, remaining : length - parkArea.length, parkedCars: parkArea}
                resolve(statusPark);
            }, 500);
        })

    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({park, leave, check});
            console.info(`Tempat parkir berhasil dibuat dengan kapasitas ${length} kendaraan`);
        }, 5000);
    });
};


const alexCar = {
    vehiclePlate: 20201,
    vehicleOwner: "Alex",
};

const blexCar = {
    vehiclePlate: 20202,
    vehicleOwner: "Blex",
};

const clexCar = {
    vehiclePlate: 20203,
    vehicleOwner: "Clex",
};

const dlexCar = {
    vehiclePlate: 20204,
    vehicleOwner: "Dlex",
};

const flexCar = {
    vehiclePlate: 20205,
    vehicleOwner: "Flex",
};

const glexCar = {
    vehiclePlate: 20206,
    vehicleOwner: "Glex",
};


const parkingEnigma = await parkingLot(3);

// check parkir
const checkParking1 = await parkingEnigma.check();
console.info(checkParking1)

// tambah mobil
const alex = await parkingEnigma.park(alexCar);
console.info(alex)
const blex = await parkingEnigma.park(blexCar);
console.info(blex)

// check parkir
const checkParking2 = await parkingEnigma.check();
console.info(checkParking2)

// exit parkir
const alexExit = await parkingEnigma.leave(alexCar);
console.info(alexExit) 

// check parkir
const checkParking3 = await parkingEnigma.check();
console.info(checkParking3)

// exit parkir
const flexExit = await parkingEnigma.leave(flexCar);
console.info(flexExit) 

// tambah mobil
const clex = await parkingEnigma.park(clexCar);
console.info(clex)
const clex2 = await parkingEnigma.park(clexCar);
console.info(clex2)
const dlex = await parkingEnigma.park(dlexCar);
console.info(dlex)

// ceck parkir
const checkParking4 = await parkingEnigma.check();
console.info(checkParking4)

// tambah mobil
const glex = await parkingEnigma.park(glexCar);
console.info(glex)

// ceck parkir
const checkParking5 = await parkingEnigma.check();
console.info(checkParking5)

