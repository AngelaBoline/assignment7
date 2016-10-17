//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  donatePrompt = window.prompt('How much would you like to donate?');


  if(donatePrompt < 100){
  	var heading = document.createElement('h3');
  	var text = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  	heading.appendChild(text);
  	document.getElementById('SideNav').appendChild(heading);
  } else if (donatePrompt >= 100) {
  	var heading = document.createElement('h3');
  	var text = document.createTextNode('Thank you for your very generous donation!');
  	heading.appendChild(text);
  	document.getElementById('SideNav').appendChild(heading);

  	var articleElements = document.getElementsByTagName("article");
  		for (var i = 0; i < articleElements.length; i +=1) {
  			articleElements[i].className = 'generous-donation';
  		}

 // 	heading.style.color = "#DB152C";

  }

});


document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  document.getElementById("ConsoleDisplay").innerHTML = ('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '<br><br>');
  //console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
  	document.getElementById("ConsoleDisplay").innerHTML += ('This speech took place before the common era.' + '<br><br>');
    //console.log('This speech took place before the common era.');
  }else{
  	document.getElementById("ConsoleDisplay").innerHTML += ('This speech took place during the common era.' + '<br><br>')
    //console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.getElementById("ConsoleDisplay").innerHTML = ('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[0].year + '<br><br>');
  //console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    document.getElementById("ConsoleDisplay").innerHTML += ('This speech took place before the common era.' + '<br><br>');
    //console.log('This speech took place before the common era.');
  }else{
  	document.getElementById("ConsoleDisplay").innerHTML += ('This speech took place during the common era.' + '<br><br>')
    //console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    document.getElementById("ConsoleDisplay").innerHTML += ('This is the oldest speech on the page.');
    //console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    document.getElementById("ConsoleDisplay").innerHTML += ('This is the most recent speech on the page.');
    //console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  document.getElementById("ConsoleDisplay").innerHTML = ('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[0].year + '<br><br>');
  //console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[2].yearIsBCE === true){
    document.getElementById("ConsoleDisplay").innerHTML += ('This speech took place before the common era.' + '<br><br>');
    //console.log('This speech took place before the common era.');
  }else{
  	document.getElementById("ConsoleDisplay").innerHTML += ('This speech took place during the common era.' + '<br><br>')
    //console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    document.getElementById("ConsoleDisplay").innerHTML += ('This is the oldest speech on the page.');
    //console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    document.getElementById("ConsoleDisplay").innerHTML += ('This is the oldest speech on the page.');
    //console.log('This is the most recent speech on the page.');
  }
});


/*replacing the console.log statements we used to display data in the console when the user clicks 
on a nav button with code that accesses the DOM. You can use the document.getElementById() method 
and the innerHTML property to do this.
 
When the user clicks a nav button, display in the element with an ID of “ConsoleDisplay” the text that 
we were previously displaying in the console.
 
Keep in mind that setting the innerHTML property of a DOM node to a string value using a single equals 
sign (=) will overwrite any text and HTML elements that previously existed. You can add string values 
to the existing innerHTML by using a plus/equals (+=).
 
Also keep in mind that when adding text to an element with innerHTML, you may want to include text 
formatting HTML elements like <br> to your string values so it is easy for the user to read your data. 

2. 
When the user clicks the “Donate” button, display a prompt that asks this question:
 
How much would you like to donate?
 
Check the value the user enters with a conditional. If it is less than 100, we’re going to display a message with the 
value in the side nav. If the value is greater than or equal to 100, we’re going to show a different message and change 
some styles on the page.
 
In both cases, we’ll need to create an H3 element and a text node using the DOM methods createElement and createTextNode. 
We’ll want to add the text node to the H3 element we created and we’ll want to add the H3 element we created to the element 
in the DOM with an ID value of “SideNav” using the appendChild method.
 
If the returned value is less than 100, display a message like this in the H3: Thank you for your donation of $45
 
If the returned value is greater than or equal to 100, display the following message in the H3 and then make the text 
red in color using setAttribute:
 
Thank you for your very generous donation!
 
Then, use getElementsByTagName to get all of the ARTICLE elements on the page and use a loop to add the 
css class “generous-donation” to each of the ARTICLE elements. This will make the speech titles red in color to match 
our donation message.

*/