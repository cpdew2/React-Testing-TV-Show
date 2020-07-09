import React from 'react';
import Episodes from './Episodes';
import {render} from '@testing-library/react';

test('re-render correctly with the list of episodes', () => {
    const {rerender, queryAllByTestId, getAllByTestId} = render(<Episodes episodes = {[]} />);
    const initialEpisode = queryAllByTestId(/episode/i);
    expect(initialEpisode).toHaveLength(0);
    expect(initialEpisode).toStrictEqual([]);

    rerender(<Episodes episodes={data} />);
    const episodes = getAllByTestId(/episode/i);

    expect(episodes).toHaveLength(2);
})

//Test Data
const data = [
    {
        
    }
]