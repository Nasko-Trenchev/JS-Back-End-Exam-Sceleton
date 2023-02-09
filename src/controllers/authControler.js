const authService = require('../services/authService');

exports.getLogin = (req, res) =>{

    res.render('login');
}

exports.postLogin = async (req, res) =>{

    const {email, password} = req.body;
    try {
     const token = await authService.login(email, password);
     res.cookie('auth', token);
    }
    catch(err) {
        //Error handling
        //return res.render('login', {error: err})
    }
    res.redirect('/');
}

exports.getRegister = (req, res) =>{

    res.render('register')
}

exports.postRegister = async (req, res) =>{

    const {username, email, password, repass} = req.body;

    const existingUser = authService.findByUsername(username);

    if(existingUser){

        throw "This user exists!";
    }

    if(password !== repass){

        throw "Password missmatch!";
    }
    
    const user = await authService.register({username, email, password, repass});

    res.redirect('/');
}