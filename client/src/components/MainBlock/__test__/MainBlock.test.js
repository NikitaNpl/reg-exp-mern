import React from 'react';
import ReactDOM from 'react-dom';

import MainBlock from '../index';

import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const items = [
  {
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
];

describe('MainBlock component', () => {
  test('должен отрендерить компонент Cart, если isLoaded=true и items = [...]', () => {
    const isLoaded = true;
    const wrapper = shallow(<MainBlock items={items} isLoaded={isLoaded}></MainBlock>);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Cart').props().items).toBe(items[0]);
  });

  test('должен отрендерить компонент CartLoadingBlock, если isLoaded=false и items = []', () => {
    const isLoaded = false;
    const items = [];
    const wrapper = shallow(<MainBlock items={items} isLoaded={isLoaded}></MainBlock>);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  test('должен отобразить надпись "Не удалось найти", если isLoaded=true и items = []', () => {
    const isLoaded = true;
    const items = [];
    const wrapper = shallow(<MainBlock items={items} isLoaded={isLoaded}></MainBlock>);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});