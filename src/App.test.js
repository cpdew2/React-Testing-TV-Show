const { waitFor } = require("@testing-library/react");


test('App fetches episode data and renders it', async() => {

    //Render app- should show 'select a season drop down'
    mockFetchShow.mockResolvedValueOnce(episodeData);
    const {getAllByTestId, findByText} = render(<App />);

    const dropDown = await findByText(/select a season/i);
    // Click on the select a season drop down
    //fetching message is rendered
    //API call is initiated
    userEvent.click(dropDown);
    await findByText(/Fetching data.../i)

    const season1 = await findByText(/season 1/i);
    userEvent.click(season1);
})

//Component waits for API, then renders data that is returned
//use the waitFor funtion to wait for the API call to resolve
await waitFor(() => {
    
}
