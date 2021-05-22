// interface 接口
{

    interface IPriceData {
        id: number;
        m: string
    }

    type IPriceDataArray = IPriceData[]

    function getPriceData() {
        return new Promise<IPriceDataArray>((resolve, reject) => {
            fetch('url')
                .then(function (response) {
                    return response.json()
                })
                .then(function (myJson) {
                    const data: IPriceDataArray = [];
                    resolve(data)
                })
        })
    }


    getPriceData().then(data => {
        console.log(data[0].id)
    })

    interface ClockInterface {
        tick(): void;
    }

    interface ClockConstructor {
        new(hour: number, minute: number): ClockInterface
    }

    class DigitalClock implements ClockInterface {
        tick(): void {
            console.log('tick tick');
        }
    }

//
    class ElectronicClock implements ClockInterface {
        tick(): void {
            console.log('beep beep')
        }
    }

    function createClock(Clock: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new Clock(hour, minute)
    }

    const digitalClock = createClock(DigitalClock, 12, 3)

    digitalClock.tick()

    const electronic = createClock(ElectronicClock, 12, 21)

    electronic.tick();
}