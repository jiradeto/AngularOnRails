## Angular2 Rails Example

Angular2 + Rails + Webpack CRUD examples.

### Install
```
  bundle install
  rake db:create && rake db:migrate && rake db:seed
  npm install
```

### How to run
```
  npm start
  bundle exec rails server
```


## Description 

### Angular directory
>[/frontend](https://github.com/jiradeto/AngularOnRails/tree/master/frontend)


### Webpack  
use for module bundler and compile TypeScript file to JavaScript
>[/webpack.config.js](https://github.com/jiradeto/AngularOnRails/blob/master/webpack.config.js)



### Separate each feature in directory (homepage, login, photo)
other code such as services, models, guards etc are placed in folders prefixed with an underscore to easily differentiate them and group them together at the top of the folder structure.
>[/frontend/src/app/homepage](https://github.com/jiradeto/AngularOnRails/tree/master/frontend/src/app/homepage) 

>[/frontend/src/app/photo](https://github.com/jiradeto/AngularOnRails/tree/master/frontend/src/app/photo)


### Connect Rails with Angular
implement helper function for load Angular in Rails
>[/app/helpers/application_helper.rb](https://github.com/jiradeto/AngularOnRails/blob/master/app/helpers/application_helper.rb)
```ruby
def webpack_script_for(bundle)
  path = Rails.root.join('frontend', 'webpack-assets.json')
  file = File.read(path)
  json = JSON.parse(file)
  content_tag(:script, '', src: json[bundle]['js'])
end
 ```

and then call helper function in layout file.
>[/app/views/layouts/application.html.erb](https://github.com/jiradeto/AngularOnRails/blob/master/app/views/layouts/application.html.erb)
 ```html
 <body>
    <%= yield %>
    <root-app> </root-app>
    <%= webpack_script_for("vendor") %>
    <%= webpack_script_for("app") %>
</body>
  ```


### Define Angular Routing
>[/frontend/src/app/app-routing.module.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/app-routing.module.ts)

### Using Guard for protecting routes (require login before access) [Ref.](https://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html)
>[/frontend/src/app/_guards/auth.guard.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/_guards/auth.guard.ts)


### Share data between 2 components ([ref.](http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject))
implement MessageService to share data (string) that send from AppComponent to HomeComponent
>[/frontend/src/app/_services/message.service.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/_services/message.service.ts)

>[/frontend/src/app/app.component.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/app.component.ts)

>[/frontend/src/app/homepage/homepage.component.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/homepage/homepage.component.ts)




### Angular service to call REST API 
- [frontend/src/app/_services/photo.service.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/_services/photo.service.ts)



### Access URL parameter in Angular
>[/frontend/src/app/photo/photo-edit.component.ts](https://github.com/jiradeto/AngularOnRails/blob/master/frontend/src/app/photo/photo-edit.component.ts)
```javascript
route.params.flatMap((params: Params) => 
    this.photoService.getPhoto(params['id']));
```



### Enable non-get method in Rails and Anguar [Ref.](http://stackoverflow.com/questions/14734243/rails-csrf-protection-angular-js-protect-from-forgery-makes-me-to-log-out-on)
> [/app/controller/application_controller](https://github.com/jiradeto/AngularOnRails/blob/master/app/controller/application_controller.rb)
```ruby
def set_csrf_cookie_for_ng
  cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
end

  protected
  # In Rails 4.2 and above
def verified_request?
  super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
end

```



### i18 locale from Rails 
1. render locale.yml with rails server in TranslateController [ URL ://api/translations/:locale ] <-- locale = en, ja
2. get json with library [@ngx-translate/core](https://www.npmjs.com/package/@ngx-translate/core)
3. extract and render in Angular component




