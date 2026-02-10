const myName = "Kartik"
const repoCount = 50

// Old way (concatenation)
console.log(myName + repoCount + " Value");          // Kartik50 Value

// Modern & cleaner way (template literal - recommended)
console.log(`Hello, my name is ${myName} and my repo count is ${repoCount}`);
// Output: Hello, my name is Kartik and my repo count is 50


const githubUsername = new String('kartik-coder-007')

console.log(githubUsername.charAt(2));     // r
console.log(githubUsername.indexOf('t'));  // 3

const firstPart = githubUsername.substring(0, 4)
console.log(firstPart);                     // kart

// slice() can take negative indices (counts from the end)
const slicedPart = githubUsername.slice(-8, 4)
console.log(slicedPart);                    // "" (empty string in this case)

const usernameWithSpaces = "  kartik  "
console.log(usernameWithSpaces);            //   kartik  
console.log(usernameWithSpaces.trim());     // kartik

const profileUrl = "https://github.com/ItsKartik%20";
console.log(profileUrl.replace('%20', '12'))
// https://github.com/kartik-coder

console.log(profileUrl.includes('sundar'));   // false
console.log(profileUrl.includes('kartik'));   // true

// Split into array using '-' as separator
console.log(githubUsername.split('-'));
// Output: [ 'kartik', 'coder', '007' ]