class Api::UserController < ApplicationController
  def authenticate
    if params[:username] == 'test' && params[:password] == 'test'
      render json: {
        token: 'FAKE-JWT-TOKEN'
      }
    end
  end
end
