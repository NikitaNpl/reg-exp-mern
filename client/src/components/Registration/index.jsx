import React from 'react';

function Registration() {
  return (
    <div className="registration">
      <div className="registration__title">
        <h2>Регистрация</h2>
      </div>
      <div className="registration__form">
        <form>
          <label htmlFor="userName">Логин</label>
          <input id="userName" required="required" type="text" placeholder="пароль" />
          <label htmlFor="password">Пароль</label>
          <input id="password" required="required" type="password" placeholder="пароль" />
          <input type="submit" value="Зарегистрироваться"></input>
        </form>
      </div>
    </div>
  )
}

export default Registration;