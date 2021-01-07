import React from 'react';

function Authorization() {
  return (
    <div className="authorization">
      <div className="authorization__title">
        <h2>Авторизация</h2>
      </div>
      <div className="authorization__form">
        <form>
          <label htmlFor="userName">Логин</label>
          <input id="userName" required="required" type="text" placeholder="пароль" />
          <label htmlFor="password">Пароль</label>
          <input id="password" required="required" type="password" placeholder="пароль" />
          <input type="submit" value="Войти"></input>
        </form>
      </div>
    </div>
  )
}

export default Authorization;
