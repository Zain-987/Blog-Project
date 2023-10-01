class USERDTO {
    constructor(user){
        this.id = user._id
        this.username = user.username
        this.email = user.email
        this.photo = user.photo
    }
}

module.exports = USERDTO