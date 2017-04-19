## Angular2 Rails Example

Angular2 + Rails + Webpack CRUD examples.

### Install
```
  bundle install
  bundle exec rake db:setup
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

 - [/app/views/layouts/application.html.erb](https://github.com/jiradeto/AngularOnRails/blob/master/app/views/layouts/application.html.erb)
 ```
 <body>
    <%= yield %>
    <root-app> </root-app>
    <%= webpack_script_for("vendor") %>
    <%= webpack_script_for("app") %>
</body>
  ```


Angular Routing
- [/frontend/src/app/app-routing.module.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/app-routing.module.ts)

Angular Service ( call REST API )
- [/frontend/src/app/photo/photo.service.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/photo/photo.service.ts)
