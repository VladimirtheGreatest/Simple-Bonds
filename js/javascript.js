//I will utilize Simple Bonds API by using these fetching methods


    //BROWSE ALL AVAILABLE BONDS
  //fetching method for getting all bonds, bonds will be displayed on the home page
  fetch('http://165.227.229.49:8000/bonds', {
    method: 'GET',
    "timeout": 0,
    headers: {
        "Accept": "application/json",
        "Authorization": "4ee6VsMCJLVjPwpsRSEy5K3WzQqkO6cL"
    },
  }).then(response => response.json())
  .then(object => {
      //this is the array of bonds which we are getting from the object that is returned as a promise, invidividual bond is stored as an object inside of the array
      const bonds = object.data;
      console.log(bonds)
    });


    //BROWSE ALL KNOWNS INVESTORS
     //fetching method to get all investors, we will display investors in a separate route, every investors needs to have unique investor.id so we can use this id as a parameter for different route
  fetch('http://165.227.229.49:8000/investors', {
    method: 'GET',
    "timeout": 0,
    headers: {
        "Accept": "application/json",
        "Authorization": "4ee6VsMCJLVjPwpsRSEy5K3WzQqkO6cL"
    },
  }).then(response => response.json())
  .then(object => {
      //this is the array of investors which we are getting from the object that is returned as a promise, invidividual investor is stored as an object inside of the array
      const investors = object.data;
      console.log(investors)
    });


    //VIEW INVIDIVIDUAL BONDS AND THEIR INVESTMENTS
  //fetching method to get all investments for the individual bond  bonds/1/investments brings all investments for the first bond
  fetch('http://165.227.229.49:8000/bonds/1/investments', {
    method: 'GET',
    "timeout": 0,
    headers: {
        "Accept": "application/json",
        "Authorization": "4ee6VsMCJLVjPwpsRSEy5K3WzQqkO6cL"
    },
  }).then(response => response.json())
  .then(object => {
      //this is the array of  bond`s investments which we are getting from the object that is returned as a promise, invidividual investment is stored as an object inside of the array
      const bondsInvestments = object.data;
      console.log(bondsInvestments)
    });


    //VIEW AN INVESTORS`S PORTFOLIO OF INVESTMENTS
  //fetching method to get all investments of the chosen investor, we will need to use investor.id in order to get all of his investments

  fetch('http://165.227.229.49:8000/investors/1/investments', {
    method: 'GET',
    "timeout": 0,
    headers: {
        "Accept": "application/json",
        "Authorization": "4ee6VsMCJLVjPwpsRSEy5K3WzQqkO6cL"
    },
  }).then(response => response.json())
  .then(object => {
      //this is the array of investor`s investments which we are getting from the object that is returned as a promise, invidividual investment is stored as an object inside of the array
      const investorsInvestment = object.data;
      console.log(investorsInvestment)
    });

    ////MAKE AN INVESTMENT METHOD INTO A BOND AS A SPECIFICED INVESTOR
  //make an investment, make a button for each individual investor and probably separate invest component
  (async () => {
    const rawResponse = await fetch('http://165.227.229.49:8000/investors/1/investments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "4ee6VsMCJLVjPwpsRSEy5K3WzQqkO6cL"
      },
      body: JSON.stringify({'bond_id': '4', 'type': 'maturity', 'amount' : 150000}),
          //we will get this data from the user input which will be probably stored as a state instead of hard-coding that
     // "data": "{\n\t\"bond_id\": \"4\",\n\t\"type\": \"maturity\",\n\t\"amount\": 150000\n}",
    });
    const content = await rawResponse.json();
    console.log(content);
  })();

 
  //DELETE INVESTMENT METHOD (CANCEL A PENDING INVESTMENT)
  // make a component investors investments and place a button delete next to his active investments that will allow him to cancel
  // make an alert component which will fire off in case of not being able to cancel due to cooling off bond period

  (async () => {
    const rawResponse = await fetch('http://165.227.229.49:8000/investors/1/investments/1', {
    "method": "DELETE",
      headers: {
        'Accept': 'application/json',
        "Authorization": "4ee6VsMCJLVjPwpsRSEy5K3WzQqkO6cL"
      },
    });
    const content = await rawResponse.json();
    console.log(content);
  })();

  //RETURN FORMULA
