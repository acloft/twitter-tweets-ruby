



class TwitterController < ApplicationController
   
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
