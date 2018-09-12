const  votes       = document.getElementsByClassName('vote__button');
const  dislikes    = document.getElementsByClassName('vote__dislike'); 
const  likes       = document.getElementsByClassName('vote__like');
const  result      = document.getElementsByClassName('candidate__result--dislike'); 
const  result_like = document.getElementsByClassName('result__like');
const  candidate   = document.getElementsByClassName('vote__message');
const  data        = JSON.parse(localStorage.getItem('votes'));

    let dataVotes=[
        {
            likes: data == undefined ? 0 : data[0].like,
            dislikes: data == undefined ? 0 : data[0].dislike
          },
          {
            likes: data == undefined ? 0 : data[1].like,
            dislikes: data == undefined ? 0 : data[1].dislike
          },
          {
            likes: data == undefined ? 0 : data[2].like,
            dislikes: data == undefined ? 0 : data[2].dislike
          },
          {
            likes: data == undefined ? 0 : data[3].like,
            dislikes: data == undefined ? 0 : data[3].dislike
          }
        ]

console.log(dataVotes);
function save(){   
    localStorage.setItem('votes',JSON.stringify(dataVotes));     
}


function vote(p_element,p_like,p_dislike){
   
    let candidate_likes     = dataVotes[p_element].likes;
    let candidate_dislikes  = dataVotes[p_element].dislikes;
    let total = candidate_likes + candidate_dislikes;

    console.log(candidate_likes+' '+candidate_dislikes)

    candidate_likes     = candidate_likes + p_like;
    candidate_dislikes  = candidate_dislikes + p_dislike;

    dataVotes[p_element].likes = candidate_likes;
    dataVotes[p_element].dislikes = candidate_dislikes;
    
   save();




}






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
              
        if(i_votes===like){
            vote(i_votes,1,0)      
        }else if(i_votes===dislike){
            vote(i_votes,0,1)
        }
    });
}