let feet = 2600;
function scuberGreetingForFeet(feet){
  if (feet <= 400){
    let greeting = 'This one is on me!';
    return greeting;
  } else if (feet > 400 && feet < 2000){
    let greeting = 'That will be twenty bucks.';
    return greeting;
  } else if (feet > 2000 && feet < 2500){
    let greeting = 'I will gladly take your thirty bucks.';
    return greeting;
  } else if (feet >= 2500){
    let greeting = 'No can do.';
    return greeting;
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return'Thank you.';
    default:
      return 'Bye.';
  }
}

greeting;


