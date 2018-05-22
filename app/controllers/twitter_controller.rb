



class TwitterController < ApplicationController
    http_basic_authenticate_with name: "admin", password: "supersecure", except: [:index]
   
    def index
    end

    def results 
        @handle = params[:search]
        if @handle && @handle.length > 0
            begin
                @tweets = $twitter.user_timeline(@handle)
            rescue => exception
                @tweets = []
        else
                
            end
            
        else
            render 'index'
            
        end
    end

end
