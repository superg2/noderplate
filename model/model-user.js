exports.init = function(noderplate) {

  var userSchema = noderplate.modules.mongoose.Schema({
    username: String,
    fullName: String,
    provider: String,
    image: String,
    role: {
      type: String,
      default: 'user'
    },
    email: String,
    registerDate: {
      type: Date,
      default: Date.now
    },
    accountState: {
      type: String,
      default: 'waiting'
    },
    pass: String,
    salt: String
  });

  var User = noderplate.modules.mongoose.model('user', userSchema);

  return User;
};