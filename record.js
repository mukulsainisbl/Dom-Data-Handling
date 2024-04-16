let form = document.querySelector('form');
let name = document.getElementById('name');
let empid = document.getElementById('employeeID');
let dep = document.getElementById('department');
let exp = document.getElementById('exp');
let email = document.getElementById('email');
let mobile = document.getElementById('mbl');
let tbody = document.querySelector('tbody');
let alldata = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = {
        name: name.value,
        employeid: empid.value,
        department: dep.value,
        experiene: exp.value,
        email: email.value,
        mobile: mobile.value
    };

    let role = '';
    let experience = parseFloat(data.experiene);
   
   if(experience > 5) {
        role = 'Senior';
    } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
    } else {
        role = 'Fresher';
    }
    data.role = role;

    alldata.push(data);
    tbody.innerHTML = '';

    alldata.forEach((ele, i) => {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let delbutton = document.createElement('button');

        td1.innerText = ele.name;
        td2.innerText = ele.employeid;
        td3.innerText = ele.department;
        td4.innerText = ele.experiene;
        td5.innerText = ele.email;
        td6.innerText = ele.mobile;
        td7.innerText = ele.role;
        delbutton.innerText = 'Delete';
        delbutton.classList.add('Delbutton');
        delbutton.addEventListener('click', function () {
            alldata.splice(i, 1);
            tbody.removeChild(row);
        });

        row.append(td1, td2, td3, td4, td5, td6, td7, delbutton);
        tbody.append(row);
    });
});
