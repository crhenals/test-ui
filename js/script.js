const  votes       = document.getElementsByClassName('vote__button');
const  dislikes    = document.getElementsByClassName('vote__dislike'); 
const  likes       = document.getElementsByClassName('vote__like');
const  result      = document.getElementsByClassName('candidate__result--dislike'); 
const  result_like = document.getElementsByClassName('result__like');
const  candidate   = document.getElementsByClassName('vote__message');

let like = null;
let dislike = null;

for(let i_likes=0; i_likes<likes.length;i_likes++){
    likes[i_likes].addEventListener('click',function(){
        like = i_likes;
        dislike = null;
    });
}

for(let i_dislikes=0; i_dislikes<dislikes.length;i_dislikes++){
    dislikes[i_dislikes].addEventListener('click',function(){
        like = null;
        dislike = i_dislikes;
    });
}

for(let i_votes=0; i_votes<votes.length;i_votes++){
    votes[i_votes].addEventListener('click',function(){
        console.log(like+' '+dislike)
      
        if(i_votes===like){
            console.log('like');            
        }else if(i_votes===dislike){
           console.log('dislike');
        }
    });
}