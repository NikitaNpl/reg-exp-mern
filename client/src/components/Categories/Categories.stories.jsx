import React from 'react';

import Categories from './';

import '../../scss/app.scss';

const MOCK_CATEGORIES = [{
    _id: 'test_1',
    name: "test_1",
    color: {
        name: "gray",
    },
}, {
    _id: 'test_2',
    name: "test_2",
    color: {
        name: "orange",
    },
}, {
    _id: 'test_3',
    name: "test_13",
    color: {
        name: "red",
    },
}, {
    _id: 'test_4',
    name: "test_4",
    color: {
        name: "yellow",
    },
}];

let refSelectedCategoryName = "test_1";

const onSelectCategories = (type) => {
    refSelectedCategoryName = type;
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/SearchBar',
  component: Categories,
};


const Template = (args) => <Categories {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    items: MOCK_CATEGORIES,
    isLoaded: true,
    selectedItem: refSelectedCategoryName,
    onSelectCategories, onWriteSearchBox: (value) => console.log(value),
}

