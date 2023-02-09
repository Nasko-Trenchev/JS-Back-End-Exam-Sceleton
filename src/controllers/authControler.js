const authService = require('../services/authService');

exports.getLogin = (req, res) =>{

    res.render('login');
}

exports.postLogin = (req, res) =>{

    const {email, password} = req.body;
    res.redirect('/');
}

exports.getRegister = (req, res) =>{

    res.render('register')
}

exports.postRegister = async (req, res) =>{

    const {username, email, password, repass} = req.body;

    if(password !== repass){

        throw "Password missmatch!";
    }
    
    const user = await authService.register({username, email, password, repass});

    res.redirect('/');
}