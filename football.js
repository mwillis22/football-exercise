// add the event listener for the onload event

window.onload = function() {
    let teams = [{code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX"},
                {code: "DEN", name: "Denver Broncos", plays: "Denver, CO"},
                {code: "HOU", name: "Houston Texans", plays: "Houston, TX"},
                {code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO"}];
    //create an array of teams
    //declare da html elements dat i need
    let selectMenu = document.getElementById('teams');
    console.log(`the select menu is ${selectMenu}`);
    let moreInfoBtn = document.getElementById('moreInfo');
    console.log(moreInfoBtn);

    let numberOfTeams = teams.length;
    console.log(`number of teams: ${numberOfTeams}`);
    for (let i = 0; i < numberOfTeams; i ++) {
        let theOption = new Option(teams[i].name, teams[i].code);
        selectMenu.appendChild(theOption);
        console.log();
    }

    //add an event listener to button
    moreInfoBtn.addEventListener('click', getTeamName);

    //add an event handler to handle the evenet on the button
    function getTeamName() {
        console.log('button works');
        let teamCode = selectMenu.value;
        console.log(teamCode);
        //This sets a variable
        let teamName = selectMenu.options[selectMenu.selectedIndex].text;
        console.log(selectMenu.options[selectMenu.selectedIndex]);
        // alert(`You selected ${teamName} with code ${teamCode}`);
    }


    // automatically select a team in the dropdown
    // selectMenu.value = "KAN";
    // selectMenu.value = null;
    

    //remove an option from the list(array)

    let myToDoList = ['learn python', 'eat breakfast'];
    let lastToDo = myToDoList[1];


    let itemToDelete = "DAL";
    let numberOfOptionTags = selectMenu.options.length;
    for(let i = 0; i < numberOfOptionTags; i ++) {
        if(selectMenu.options[i].value == itemToDelete) {
            selectMenu.remove(i);
            break;
        }
    }
    //event listener --- on
    selectMenu.onchange = onTeamChanged;

    //event handler
    function onTeamChanged() {
        console.log('change event handler works');
        let selectedTeam = selectMenu.value;
        console.log(`you changed your team to ${selectedTeam}`);
    }
}