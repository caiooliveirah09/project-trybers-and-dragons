import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static RacesInstancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.RacesInstancesCreated += 1;
  }

  static createdRacesInstances(): number {
    return this.RacesInstancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}