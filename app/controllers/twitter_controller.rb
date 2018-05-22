



class TwitterController < ApplicationController
    layout false
    def index
       @client = Twitter::REST::Client.new do |config|
            config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
            config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
          end
          puts @client.bearer_token
        
        @tweets = ["one", "two", ENV['TEST']]
        if params[:search] 
            @tweets = ["three", "four"]
            render "results"
        else 
        end

    end

    def results 
        @tweets
    end

end
