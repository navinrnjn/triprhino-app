export interface IAmmenities {
    name: string,
    icon: string,
    isPresent: boolean
}

export class Ammenities {

    public ammenities: IAmmenities[] = [];

    constructor() {
        var gym = { name: "GYM", icon: "fitness_center", isPresent: false };
        this.ammenities.push(gym);
        var roomService = { name: "Room Service", icon: "room_service", isPresent: false };
        this.ammenities.push(roomService);
        var spa = { name: "SPA", icon: "spa", isPresent: false };
        this.ammenities.push(spa);
        var restaurant = { name: "Restaurant", icon: "restaurant", isPresent: false };
        this.ammenities.push(restaurant);
        var bar = { name: "Bar", icon: "local_bar", isPresent: false };
        this.ammenities.push(bar);
        var powerSupply = { name: "Power Supply", icon: "power", isPresent: false };
        this.ammenities.push(powerSupply);
        var laundry = { name: "Laundry", icon: "local_laundry_service", isPresent: false };
        this.ammenities.push(laundry);
        var cab = { name: "Cab", icon: "local_taxi", isPresent: false };
        this.ammenities.push(cab);
        var swimmingPool = { name: "Swimming Pool", icon: "pool", isPresent: false };
        this.ammenities.push(swimmingPool);
        var wifi = { name: "Wi Fi", icon: "network_wifi", isPresent: false };
        this.ammenities.push(wifi);
    }

    public getAmenities(): IAmmenities[] {
        return this.ammenities;
    }
}