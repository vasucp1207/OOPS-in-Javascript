class user{

  #password
  constructor(name, userName, password){

    this.name = name
    this.userName = userName
    this.#password = password
  }

  login(userName, password){

    if(userName === this.userName && password === this.#password){
      console.log('login successfully....')
    }
    else{
      console.log('login failed....');
    }
  }

  setPassword(newPassword){
    this.#password = newPassword
  }
};

const A = new user('VasuSingh', 'vasucp1207', '!@#$%^&*')
const B = new user('Javascript', 'js', '*&^%$#@!')

A.login('vasucp1207', '!@#$%^&*')             // login successfully....
B.login('Javascript', '*&^%$#@!')             // login failed....

console.log(A.name)           // VasuSingh
console.log(A.password)       // undefined
console.log(A.#password)      // syntax error

A.setPassword('qwerty')
A.login('vasucp1207', '!@#$%^&*')              // login failed....
