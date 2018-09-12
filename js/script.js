const  votes       = document.getElementsByClassName('vote__button');
const  dislikes    = document.getElementsByClassName('vote__dislike'); 
const  likes       = document.getElementsByClassName('vote__like');
const  result      = document.getElementsByClassName('candidate__result--dislike'); 
const  result_like = document.getElementsByClassName('result__like');
const  result_dislike = document.getElementsByClassName('result__dislike');
const  candidate   = document.getElementsByClassName('candidate');
const  candidate_vote = document.getElementsByClassName('candidate_vote');
const message = document.getElementsByClassName('vote__message');
let    data;
let like = null;
let dislike =null;

function load(){
    data = JSON.parse(localStorage.getItem('votes'));
    console.log('data '+data[0].like);
    dataVotes=[
        {
            likes: data == undefined ? 0 : data[0].likes,
            dislikes: data == undefined ? 0 : data[0].dislikes
          },
          {
            likes: data == undefined ? 0 : data[1].likes,
            dislikes: data == undefined ? 0 : data[1].dislikes
          },
          {
            likes: data == undefined ? 0 : data[2].likes,
            dislikes: data == undefined ? 0 : data[2].dislikes
          },
          {
            likes: data == undefined ? 0 : data[3].likes,
            dislikes: data == undefined ? 0 : data[3].dislikes
          }
    ]   
}  

function save(){   
    localStorage.setItem('votes',JSON.stringify(dataVotes));     
    
}

function vote(p_element,p_like,p_dislike){   
    let candidate_likes     = dataVotes[p_element].likes;
    let candidate_dislikes  = dataVotes[p_element].dislikes;    

    candidate_likes     = candidate_likes + p_like;
    candidate_dislikes  = candidate_dislikes + p_dislike;
    dataVotes[p_element].likes = candidate_likes;
    dataVotes[p_element].dislikes = candidate_dislikes;    
    save();  
}

function paint(i_result){
    let candidate_likes     = dataVotes[i_result].likes;
    let candidate_dislikes  = dataVotes[i_result].dislikes;
    let total = candidate_likes + candidate_dislikes;
   console.log('10. '+candidate_likes);
    if(total > 0){
        let perc_like = Math.round((candidate_likes / total) * 100);
        let perc_dislike = Math.round((candidate_dislikes / total) * 100);
        result_like[i_result].innerHTML = `${perc_like}%`;
        result_dislike[i_result].innerHTML = `${perc_dislike}%`; 
        result[i_result].style.width = `${perc_like}%`;
    }    
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
            paint(i_votes);  
            candidate_vote[i_votes].classList.toggle('none');
            message[i_votes].classList.toggle('none');
            like=null;
            
        }else if(i_votes===dislike){
            vote(i_votes,0,1)
            paint(i_votes); 
            candidate_vote[i_votes].classList.toggle('none');
            message[i_votes].classList.toggle('none');
            dislike = null;
        }
    });
}

 for (let i_message = 0;i_message < message.length;i_message++){
        message[i_message].addEventListener('click',function(){
        candidate_vote[i_message].classList.toggle('none');
        message[i_message].classList.toggle('none');
    });
 }

window.addEventListener('load', function(e) {
    load();     
    for (let i_candidate=0;i_candidate<candidate.length;i_candidate++){
        paint(i_candidate); 
    }        
})