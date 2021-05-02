import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

import Cart from '../index';

import { render } from '@testing-library/react';

const items = {
  _id: "5fddf22ec0a636d64dc16927",
  title: "Никнейм",
  description: "Никнейм состоящий от 3 до 16 символов. Допускаются: буквы (a-zA-z), цифры, дефис и нижнее подчеркивание",
  pattern: "/^[a-zA-Z0-9_-]{3,16}$/",
  placeholder: "Nickname_",
  rating: {
    likes: 20,
    views: 0
  },
  additionalInfo: {
    _id: "5fde3f2fc0a636d64dc1692e",
    name: "Строки",
    colorId: "5fe8c0eed14a9e7eab184d25"
  },
  color: {
    _id: "5fe8c0eed14a9e7eab184d25",
    hex: "#eb5757",
    name: "red"
  }
}

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Cart component", () => {
  it("render without crashing", () => {
    render(<Provider store={store}><Cart items={items}></Cart></Provider>, container);
    const title = document.querySelector(".cart__header-title");
    const cartInfo = document.querySelector(".cart__header-info");
    const textBlock = document.querySelector(".textarea-info textarea");
    const inputBlock = document.querySelector(".input-area input");
    const likesBlock = document.querySelector(".cart__footer-like span");
    const viewsBlock = document.querySelector(".cart__footer-views span");

    expect(title.textContent).toBe(items.title);
    expect(cartInfo.dataset.name).toBe(items.description ? items.description : items.title);
    expect(textBlock.textContent).toBe(items.pattern);
    expect(inputBlock.placeholder).toBe(items.placeholder);
    expect(likesBlock.textContent).toBe(`${items.rating.likes}`);
    expect(viewsBlock.textContent).toBe(`${items.rating.views}`);
  });

  it("coppy check", () => {
    document.execCommand = jest.fn();
    render(<Provider store={store}><Cart items={items}></Cart></Provider>, container);
    const button = document.querySelector(".textarea-info textarea");
    const textArea = document.querySelector(".textarea-info");
    expect(textArea.dataset.name).toBe("Скопировать");

    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(textArea.dataset.name).toBe("Скопировано");

    button.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    expect(textArea.dataset.name).toBe("Скопировать");
  });
});