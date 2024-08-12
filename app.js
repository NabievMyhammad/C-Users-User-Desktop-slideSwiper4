





function submitFormV4() {
    // Получаем ввод и разбиваем его на строки
    let userInput = document.getElementById("userInput").value.trim();
    
    // Разделение на строки по новой строке
    const lines = userInput.split('\n').map(line => line.trim()).filter(Boolean);

    console.log("Lines:", lines);

    // Регулярное выражение для проверки номера телефона с 13 символами, включая +992
    const phoneRegex = /\+992\d{9}/;
    // Регулярное выражение для проверки email
    const emailRegex = /.+@.+/;

    // Проверка наличия номера телефона
    const hasPhone = lines.find(line => {
        const matches = line.match(phoneRegex);
        console.log("Phone Matches:", matches);
        return matches !== null;
    });

    // Проверка наличия email
    const hasEmail = lines.find(line => {
        const matches = line.match(emailRegex);
        console.log("Email Matches:", matches);
        return matches !== null;
    });

    console.log("Has phone:", hasPhone);
    console.log("Has email:", hasEmail);

    if (userInput === "") {
        alert("Please enter your request.");
    } else if (!hasPhone) {
        alert("Please enter at least one valid phone number starting with +992 and containing 13 characters.");
    } else if (!hasEmail) {
        alert("Please enter at least one valid email address containing '@'.");
    } else {
        document.getElementById("modalMessage").textContent = "Your request has been received.";
        document.getElementById("modal").style.display = "block";
    }
}









const numbers = [21, 24, 3, 42, 5];


numbers.forEach(function(sum){
  console.log(sum * sum);
});



const fruits = ['apple', 'banana', 'cherry'];

const regex = /a/;

const fruitsWithA = [];

fruits.forEach(function(fruit1){

if (regex.test(fruit1))

{
    fruitsWithA.push(fruit1);
}
});

console.log(fruitsWithA);



const employee= ['amir', 'muhammad',  'firdavs', 'olim', 'Davron', 'Parviz'];

const employee1 = /m|z|l/  ;

const employeeWith = [];

employee.forEach(function(employee){

if (employee1.test(employee))

{
    employeeWith.push(employee);
}
});

console.log(employeeWith);