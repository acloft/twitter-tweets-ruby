



class TwitterController < ApplicationController

    http_basic_authenticate_with name: ENV["USERNAME"], password: ENV["PASSWORD"], except: [:index]
   
    def index
        surpriseAccount = ["reactjs", "rate_dog", "angular", "jk_rowling", "potus", "chrissyteigen", "SoCalEq", "MongoDB", "gem", "nodejs", "github", "Jira", "JavaScript", "dan_abramov", "UCIrvine", "nytimes", "lodgebreadco"]
        randomNum = rand(0..surpriseAccount.length)
        @surprise = surpriseAccount[randomNum]
    end

    def results 
        if  params[:search] &&  params[:search].length >0 
            @handle = params[:search].sub(/@/, "").sub(/:/, "")
                begin
                    @user = $twitter.user(@handle)
                    @tweets = $twitter.user_timeline(@handle)
                rescue => exception
                    @tweets = []
                end
            
        end
    end
end
