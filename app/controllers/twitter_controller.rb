



class TwitterController < ApplicationController
   
    def index
        
        #   puts  tweet.text
        #     end
        @tweets = ["one", "two", ENV['TEST']]
        if params[:search] 
            @tweets = $twitter.search(params[:search])
            render "index"
        else 
            render 'index'
        end

    end

    def results 
        @tweets = $twitter.user_timeline(params[:search] )
    end

end
