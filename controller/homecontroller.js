//const db = require('./config/mongoose')
const TodoLists = require('../models/todo_list')
// function for redirecting to main home page
module.exports.home = function (req, res) {
    // fetching using mongoose
    TodoLists.find({}, function (err, todo) {
        if (err) {
            console.log('error in fetching data');
            return
        }

        return res.render('homePage', {
            title: "Todo App",
            todoList: todo

        })
    })
}
// function for new Data
function Datevalue(dueDate) {
    let monapp = '';
    // checking months 
    if (dueDate[1] == '01') {
        monapp = 'Jan';
    }
    else if (dueDate[1] == '02') {
        monapp = 'Feb';
    } else if (dueDate[1] == '03') {
        monapp = 'Mar';
    } else if (dueDate[1] == '04') {
        monapp = 'Apr';
    } else if (dueDate[1] == '05') {
        monapp = 'May';
    } else if (dueDate[1] == '06') {
        monapp = 'June';
    } else if (dueDate[1] == '07') {
        monapp ='July';
    } else if (dueDate[1] == '08') {
        monapp = 'Aug';
    } else if (dueDate[1] == '09') {
        monapp = 'Sept';
    } else if (dueDate[1] == '10') {
        monapp = 'Oct';
    } else if (dueDate[1] == '11') {
        monapp = 'Nov';
    } else if (dueDate[1] == '12') {
        monapp =  'Dec';
    }
    let newdate =  `${dueDate[2]}-${monapp}-${dueDate[0]}`// displaying date in dd-mm-yyyy formate
    return newdate;
}

// function for creating toto list
module.exports.createTodo = function (req, res) {
    let dueDate = req.body.dateValue.split('-'); // splitting date and taking montha value
    let newdate = Datevalue(dueDate);
    TodoLists.create({ // crating new todo and storing into DB
        desc: req.body.desc,
        category: req.body.category,
        dueDate: newdate
    }, function (err, newArr) {
        if (err) {
            console.log('Oops error occoured');
            return;
        }
        return res.redirect('/')
    })
}
// function for deleting todo list
module.exports.deleteTodo = function (req, res) {
    let id = req.params.id; // getting the id from ui
    TodoLists.findByIdAndDelete(id, (err) => {
        if (err) { throw err };
        res.redirect('/');
    })
}
