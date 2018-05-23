



class TwitterController < ApplicationController
    http_basic_authenticate_with name: "admin", password: "supersecure", except: [:index]
   
    def index
    end

    def results 
        @handle = params[:search].sub(/@/, "").sub(/:/, "")
        if @handle && @handle.length > 0
            begin
                @user = $twitter.user(@handle)
                @tweets = $twitter.user_timeline(@handle)
            rescue => exception
                @tweets = []
        end
    end
    end

end
