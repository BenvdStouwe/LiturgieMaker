export class Bijbelboek {
    private static _id = 1;
    public id: number;
    public naam: string;

    public constructor(naam: string) {
        Bijbelboek._id++;
        this.id = Bijbelboek._id;
        this.naam = naam;
    }
}
