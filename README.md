wechat-simsimi
---

Build for fun.

[Simsimi](http://www.simsimi.com/) is a chatting robot which is quite popular in all platforms(Android, iOS and so on).

qrcode for this wechat simsimi account:

![qrcode](https://dl-web.dropbox.com/get/Private/qrcode_for_gh_788dd46929ac_258.jpg?w=AAD4I9dPIHa8JNhWXz5XzR0klkVJut6zuUFAH1K1mD3C2g "qrcode")

## Dependencies

### Node.js

* wechat
* connect
* get

### Simsimi

* [Trail API](http://developer.simsimi.com/)

A trail API can only be called *100* times per day.

You can also purchase one [here](http://developer.simsimi.com/pricing).

## Build your own

Step by step:

* Create a Node.js APP in [Appfog.com](https://www.appfog.com)

* Create account in [Simsimi](http://developer.simsimi.com/) and create an APP

* Clone the repository for your own

```
git clone git@github.com:SFantasy/wechat-simsimi.git [custom name]
```

* Install 

You should have Node :)

```
npm install
```

* Create config.js file

```
exports.token = "wechat token";
exports.simsimiKey = "simsimi API key";
```

* Update APP

```
// install af-cli
gem install af
// login your af account
af login
// update the APP
af update AF_APP_NAME
```

## License

The MIT License
