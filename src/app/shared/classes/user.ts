export class User {
  private id: string;
  private username: string;
  private password: string;
  constructor() {
    this.id = this.uniqueId();
    this.username = '';
    this.password = '';
  }
  /*
  * Setters y Getters de la clase
  */
  // tslint:disable-next-line: typedef
  public setUsername(username: string) {
    this.username = username;
  }
   // tslint:disable-next-line: typedef
  public setPassword(password: string) {
    this.password = password;
  }
   // tslint:disable-next-line: typedef
  public getId() {
    return this.id;
  }
   // tslint:disable-next-line: typedef
  public getUsername() {
    return this.username;
  }
   // tslint:disable-next-line: typedef
  public getPassword() {
    return this.password;
  }
   // tslint:disable-next-line: typedef
  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
}
