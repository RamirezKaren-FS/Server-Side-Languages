
//  Testing for the selection 

pm.test("testing for the selected", () => {
    const responseJson = pm.response.json();
    const data = responseJson.data
    pm.expect(data).to.not.have.property("name");

});
pm.test("testing for the selected", () => {
    const responseJson = pm.response.json();
    const data = responseJson.data
    pm.expect(data).to.not.have.property("birthYear");

// testing for page and limit 


    pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
    });
    pm.test("testing for the id selected", () => {
        pm.expect("page").to.have.property("1");
    });
    pm.test("testing for the id selected", () => {
        pm.expect("limit").to.have.property("2");
    });

// sorting


 // found this but wouldnt work on Post
    expect(data).toBeSortedBy('name', {
        descending: true,
    });

    expect(data).toBeSortedBy('name', {
        descending: false,
    });

    //  what I had written for when descending 

    pm.test("testing for page", () => {
        pm.expect("sort").to.have.property(-name);
    });

    pm.test("testing for page", () => {
        pm.expect("sort").to.have.property(name);
    });