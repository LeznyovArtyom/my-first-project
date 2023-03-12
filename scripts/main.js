var myImage = document.querySelector('img');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/corgi.jpg')
    {
        myImage.setAttribute ('src', 'images/corgi2.jpg');
    }
    else
    {
        myImage.setAttribute ('src', 'images/corgi.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    var myName = prompt('Как бы вы назвали своего пушистика?');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Коооооооорги, ' + myName;
}

if (!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Коооооооорги, ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}