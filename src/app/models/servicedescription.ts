export interface ISelectItem {
    name: string,
    value: string,
    isEnabled: boolean

}

export interface IServiceDescription {
    price: number;
    inventory: number,
    capacity: number,
    extras: number,
    ammenities: string[],
    description: string,
    imageData: File[],
    serviceTypeId: string;
}