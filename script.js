let price = prompt("Please input price in $")
price = price.replace("$", "");     //incase someone puts it at the end, but we should be able to remove other characters, space etc here as well.
price = price.replace(",", ".");    //Hummmm, then some people may use this as 800,900,320 (instead of space, so a bit iffy with free used input)
price = parseFloat(price);
price *= 0.9;                   
    //I have a feeling this can be shortened down to one or two strings
console.log(`$${price}`);