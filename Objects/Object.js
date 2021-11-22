const user = {
  name: 'VasuSingh',
  user_name: 'vasucp1207',
  password: '!@#$%^&*',
  login: function(user_name, password){

    // in an object method, this refers to the owner of the method
    if(user_name === this.user_name && password === this.password)
      console.log('login successfully....')
    else
      console.log('login failed....')
  },
};

user.login('vasucp1207', '!@#$%^&*')
