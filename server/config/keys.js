const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "MM7jtnkeAeaAQT3FTKQciRhDy",
  TWITTER_CONSUMER_SECRET: "3mdUaag56gmYd0cqf1TaYZiveh6KxFcghgxewLyM4x6nDS7T00",
  TWITTER_ACCESS_TOKEN: "111325243-kcUsCTesGziQGvqJxTNgzqehjRhTWG1bZUL9QEON",
  TWITTER_TOKEN_SECRET: "43aceTkT6eGxQIb0QwddboZ0zwcGr3BaJgPBfkztkCrYt"
};

const MONGODB = {
  MONGODB_URI:
    "mongodb+srv://admin:Admin@123@cluster0-2uwtn.mongodb.net/test?retryWrites=true&w=majority"
};
const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;
