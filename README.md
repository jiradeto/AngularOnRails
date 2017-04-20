## Angular2 Rails Example

Angular2 + Rails + Webpack CRUD examples.

### Install
```
  bundle install
  bundle exec rake db:setup
  npm install
```

### How to run
```
  npm start
  bundle exec rails server
```


## Description 

### Angular directory
>- [/frontend](https://github.com/jiradeto/AngularOnRails/tree/master/frontend)


### basic setup 
>[/webpack.config.js](https://github.com/jiradeto/AngularOnRails/blob/master/webpack.config.js)
- Webpack - use for mobuld bundler and compile Tyscript file to JavaScript




### Setting TypeScript
- [/tsconfig.json](https://github.com/jiradeto/AngularOnRails/blob/master/tsconfig.json)


### Separate each feature in directory (homepage, login, photo)
other code such as services, models, guards etc are placed in folders prefixed with an underscore to easily differentiate them and group them together at the top of the folder structure.
- [/frontend/src/app/homepage](https://github.com/jiradeto/AngularOnRails/tree/master/frontend/src/app/homepage)
- [/frontend/src/app/photo](https://github.com/jiradeto/AngularOnRails/tree/master/frontend/src/app/photo)


### Reference every component in App Module
- [/frontend/src/app/app.module.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/app.module.ts)


### Connect Rails with Angular
implement helper function for load Angular in Rails
- [/app/helpers/application_helper.rb](https://github.com/jiradeto/AngularOnRails/blob/master/app/helpers/application_helper.rb)
```ruby
def webpack_script_for(bundle)
  path = Rails.root.join('frontend', 'webpack-assets.json')
  file = File.read(path)
  json = JSON.parse(file)
  content_tag(:script, '', src: json[bundle]['js'])
end
 ```

call helper function in layout file
- [/app/views/layouts/application.html.erb](https://github.com/jiradeto/AngularOnRails/blob/master/app/views/layouts/application.html.erb)
 ```html
 <body>
    <%= yield %>
    <root-app> </root-app>
    <%= webpack_script_for("vendor") %>
    <%= webpack_script_for("app") %>
</body>
  ```


### Define Angular Routing
- [/frontend/src/app/app-routing.module.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/app-routing.module.ts)

### Using Angular Guard for protecting routes (require login before access)
- [/frontend/src/app/_guards/auth.guard.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/_guards/auth.guard.ts)


reference
- [https://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html](https://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html)

### Angular Service ( call REST API )
- [/frontend/src/app/photo/photo.service.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/photo/photo.service.ts)


### Access URL parameter in Angular
- [/frontend/src/app/photo/photo-edit.component.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/photo/photo-edit.component.ts)
```javascript
route.params.flatMap((params: Params) => 
    this.photoService.getPhoto(params['id']));
```