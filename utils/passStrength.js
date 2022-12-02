/*
Password Strength Algorithm:

Password Length:
    5 Points: Less than 4 characters
    10 Points: 5 to 7 characters
    25 Points: 8 or more

Letters:
    0 Points: No letters
    10 Points: Letters are all lower case
    20 Points: Letters are upper case and lower case

Numbers:
    0 Points: No numbers
    10 Points: 1 number
    20 Points: 3 or more numbers

Characters:
    0 Points: No characters
    10 Points: 1 character
    25 Points: More than 1 character

Bonus:
    2 Points: Letters and numbers
    3 Points: Letters, numbers, and characters
    5 Points: Mixed case letters, numbers, and characters

Password Text Range:
    >= 90: Very Secure
    >= 80: Secure
    >= 70: Very Strong
    >= 60: Strong
    >= 50: Average
    >= 25: Weak
    >= 0: Very Weak
*/







const m_strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const m_strLowerCase = "abcdefghijklmnopqrstuvwxyz";
const m_strNumber = "0123456789";
const m_strCharacters = "!@#$%^&*?_~"


function passStrength(strPassword){
    // Reset combination count
    let nScore = 0;

    // Password length
    // -- Less than 4 characters
    if (strPassword.length < 5)
    {
        nScore += 5;
    }
    // -- 5 to 7 characters
    else if (strPassword.length > 4 && strPassword.length < 8)
    {
        nScore += 10;
    }
    // -- 8 or more
    else if (strPassword.length > 7)
    {
        nScore += 25;
    }

    // Letters
    const nUpperCount = countContain(strPassword, m_strUpperCase);
    const nLowerCount = countContain(strPassword, m_strLowerCase);
    const nLowerUpperCount = nUpperCount + nLowerCount;
    // -- Letters are all lower case
    if (nUpperCount == 0 && nLowerCount != 0) 
    { 
        nScore += 10; 
    }
    // -- Letters are upper case and lower case
    else if (nUpperCount != 0 && nLowerCount != 0) 
    { 
        nScore += 20; 
    }

    // Numbers
    const nNumberCount = countContain(strPassword, m_strNumber);
    // -- 1 number
    if (nNumberCount == 1)
    {
        nScore += 10;
    }
    // -- 3 or more numbers
    if (nNumberCount >= 3)
    {
        nScore += 20;
    }

    // Characters
    const nCharacterCount = countContain(strPassword, m_strCharacters);
    // -- 1 character
    if (nCharacterCount == 1)
    {
        nScore += 10;
    }   
    // -- More than 1 character
    if (nCharacterCount > 1)
    {
        nScore += 25;
    }

    // Bonus
    // -- Letters and numbers
    if (nNumberCount != 0 && nLowerUpperCount != 0)
    {
        nScore += 2;
    }
    // -- Letters, numbers, and characters
    if (nNumberCount != 0 && nLowerUpperCount != 0 && nCharacterCount != 0)
    {
        nScore += 3;
    }
    // -- Mixed case letters, numbers, and characters
    if (nNumberCount != 0 && nUpperCount != 0 && nLowerCount != 0 && nCharacterCount != 0)
    {
        nScore += 5;
    }

    return nScore
}


// Checks a string for a list of characters
function countContain(strPassword, strCheck)
{ 
    // Declare variables
    let nCount = 0;

    for (let i = 0; i < strPassword.length; i++) 
    {
        if (strCheck.indexOf(strPassword.charAt(i)) > -1) 
        { 
                nCount++;
        } 
    } 

    return nCount; 
}