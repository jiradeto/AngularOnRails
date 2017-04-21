class Api::TranslatesController < ApplicationController
  # layout false
  # layout 'application', except: :view

  def show
    locale = params[:locale].to_sym
    @translations = I18n.with_locale(locale) do
      I18n.backend.send(:translations)[locale]
    end

    p @translations
    render json: @translations
  end
end
