



class TwitterController < ApplicationController
   
    def index
        @tweets = $twitter.search('trump')
        #   puts  tweet.text
        #     end
        @tweets = ["one", "two", ENV['TEST']]
        if params[:search] 
            puts 'got here'
            render "results"
        else 
            render 'index'
        end

    end

    def results 
    end

end
