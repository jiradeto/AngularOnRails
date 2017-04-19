## Angular2 Rails Example

Angular2 + Rails + Webpack CRUD examples.

### Install
```
  bundle install
  bundle exec rake db:create db:migrate db:seed
  npm install
  tsd install
```

### How to run
```
  npm start
  bundle exec rails server
```


## Description 

Angular directory
- [/frontend](https://github.com/jiradeto/AngularOnRails/tree/master/frontend)

Setting web pack 
- [/webpack.config.js](https://github.com/jiradeto/AngularOnRails/blob/master/webpack.config.js)

Setting TypeScript
- [/tsconfig.json](https://github.com/jiradeto/AngularOnRails/blob/master/tsconfig.json)

Seperate each function per each directory (has service, template, component)
- [/frontend/src/app/homepage](https://github.com/jiradeto/AngularOnRails/tree/master/frontend/src/app/homepage)
- [/frontend/src/app/photo](https://github.com/jiradeto/AngularOnRails/tree/master/frontend/src/app/photo)

Reference every component in App Module
- [/frontend/src/app/app.module.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/app.module.ts)

Connect Rails with Angular
- [/app/helpers/application_helper.rb](https://github.com/jiradeto/AngularOnRails/blob/master/app/helpers/application_helper.rb)
```
def webpack_script_for(bundle)
    path = Rails.root.join('frontend', 'webpack-assets.json')
    file = File.read(path)
    json = JSON.parse(file)
    content_tag(:script, '', src: json[bundle]['js'])
 end
 ```

Angular Routing
- [/frontend/src/app/app-routing.module.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/app-routing.module.ts)

Angular Service ( call REST API )
- [/frontend/src/app/photo/photo.service.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/photo/photo.service.ts)
