class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        puts user
        puts params[:username]
        session[:user_id] = user.id
        render json: user
      end
      

      def destroy
        session.delete :user_id
        head :no_content
      end
end
