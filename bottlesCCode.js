var word = "bottles";
var count = 99;
while (count > 0);
{
	console.log(count + " " + word + " of pop on the wall");
	console.log(count + " " + word + " of pop,");
	console.log("Take one down, pass it around,");
	count = count - 1;
	if (count > 0);
	{
		console.log(count + " " + word + " of pop on the wall.");
		<break>
	} 
		else
		{
			console.log("No more " + word + " of pop on the wall.");
		}
}
