

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

exports.postRegister = (req, res) =>{

    const {username, email, password, repass} = req.body;
    
    res.redirect('/');
}