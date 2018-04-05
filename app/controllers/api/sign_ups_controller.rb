class Api::SignUpsController < Api::ApiController

    before_action :authenticate_user!, only: [ :index, :destroy ]

    def index
        render :json => SignUp.all
    end

    def show
        render :json => SignUp.find(params[:id])
    end

    def create
        sign_up = SignUp.new(create_params(params))

        if sign_up.save
            render :json => SignUp.find(sign_up.id)
        else
            render_errors(sign_up)
        end
    end

    def destroy
        sign_up = SignUp.find(params[:id])
        sign_up.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:email, :reason)
    end
  end
  