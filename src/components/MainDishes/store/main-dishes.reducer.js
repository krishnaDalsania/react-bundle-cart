const initialState = {
    mainDishesList: [
        {
            title: 'Family Bundle',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 20,
            image: 'bundle.jpeg'
        },
        {
            title: 'Meal Deal X1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 20,
            image: 'bundle.jpeg'
        },
        {
            title: 'Meal Deal X2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 20,
            image: 'bundle.jpeg'
        }
    ]
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_MAINDISHES_LIST':
            return {
                ...state,
                mainDishesList: payload,
            };
        default:
            return state;
    }
}
