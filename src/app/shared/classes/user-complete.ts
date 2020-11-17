export class User {
  private id: string;
  private realname: string;
  private username: string;
  private password: string;
  private singingUpDate: string;
  private email: string;
  private continent: string;
  private gender: string;
  private upTo18: boolean;
  constructor() {
    this.id = this.uniqueId();
    this.realname = '';
    this.username = '';
    this.password = '';
    this.singingUpDate = this.getActualDate();
    this.email = '';
    this.continent = '';
    this.gender = '';
    this.upTo18 = true;
  }
  /*
 * Setters de la clase
 */
  public set Realname(realname) {
    this.realname = realname;
  }
  public set Username(username) {
    this.username = username;
  }
  public set Password(password) {
    this.password = password;
  }
  public set Email(email) {
    this.email = email;
  }
  public set Continent(continent) {
    this.continent = continent;
  }
  public set Gender(gender) {
    this.gender = gender;
  }
  public set UpTo18(upTo18) {
    this.upTo18 = upTo18;
  }
  /*
  * Getters de la clase
  */
  public get Id(): string  {
    return this.id;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public get Realname(): string  {
    return this.realname;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public get Username(): string  {
    return this.username;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public get Password(): string  {
    return this.password;
  }
  public get SingingUpDate(): string  {
    return this.singingUpDate;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public get Email(): string  {
    return this.email;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public get Continent(): string  {
    return this.continent;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public get Gender(): string {
    return this.gender;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public get UpTo18(): boolean {
    return this.upTo18;
  }
  /*
  * Generador de id único
  */
  private uniqueId(): string {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
  /*
  * Obtiene la fecha actual
  */
  private getActualDate(): string {
    const actualDate = new Date();
    let actualDay = actualDate.getDate().toString();
    if (actualDay.length < 2) { actualDay = '0' + actualDay; }
    let actualMonth = actualDate.getMonth().toString();
    if (actualMonth.length < 2) { actualMonth = '0' + actualMonth; }
    const actualYear = actualDate.getFullYear().toString();
    const finalDate = actualDay + '-' + actualMonth + '-' + actualYear;
    return finalDate;
  }
}
