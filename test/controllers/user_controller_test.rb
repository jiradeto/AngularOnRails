require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get authenticate" do
    get user_authenticate_url
    assert_response :success
  end

end
