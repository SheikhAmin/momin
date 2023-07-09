const data = {
    forstName: "Sheikh",
    lastName: "Amin"
};

const text = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    };

console.log(JSON.stringify(data));

const value = JSON.parse(text);

console.log(value);
