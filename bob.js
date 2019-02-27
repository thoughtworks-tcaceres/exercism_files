export const hey = (message) => {
  var newMsg = message.replace(/\s/g,"");

  if(newMsg === "")
    return "Fine. Be that way!";
  else if(newMsg.charAt(newMsg.length-1) === "?" && newMsg.toUpperCase() === newMsg && newMsg.toLowerCase() !== newMsg)
    return "Calm down, I know what I'm doing!";
  else if(newMsg.charAt(newMsg.length-1) === "?")
    return "Sure.";
  else if(newMsg.charAt(newMsg.length-1) === "!" || (newMsg.toUpperCase() === newMsg && (/[a-zA-z]/g).test(newMsg)))
    return "Whoa, chill out!";  
  else
    return "Whatever.";

  // ? => Sure.
  // ! => Whoa, chill out!
  // caps + ? => Calm down, I know what I'm doing!
  // (blank) => Fine. Be that way!
  // else => Whatever.
}

