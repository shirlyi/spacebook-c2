var posts = [], id = 1;

$('.add-post').on('click', function () {
    var postinput = $(this).siblings(".div-post").find("input").val();
    posts.push({ id: id, text: postinput, comments: [] });
    id++;
    console.log(posts)
    addposts();
});

function addComment() {
    var username = $(this).siblings(".add-comment").find(".uname").val();
    var ucomment = $(this).siblings(".add-comment").find(".comment").val();
    var id = this.id;
    posts[id].comments.push({ name: username, comment: ucomment });
    console.log(username, ucomment, this.id);
    addposts();
}

$(document).on('click', '.btn-comment',addComment );


function postcomments(comments,j) {
    // console.log(comments);
    for (var i = 0; i < comments.length; i++) {
        $('.posts').append('<li>' + comments[i].name + ':' + comments[i].comment + '<button onclick="removecomment('+i+','+j+')" type="button" class="btn btn-primary remove-comment">REMOVE</button></li>');
    }
}

function hello(this1, i) {
    console.log(this1, i);
}

function addposts() {
    $('.posts').empty();
    for (var i = 0; i < posts.length; i++) {
        $('.posts').append('<p class="post" data-id="' + posts[i].id + '" ><button onclick="remove(' + i + ')" type="button" class="btn btn-primary remove">REMOVE</button>' + posts[i].text + '</p><ul></ul>');
        postcomments(posts[i].comments,i);
        $('.posts').append('<form><div class="form-group add-comment"><input type="text" id="uname" class="uname" placeholder="user name"><input type="text" id="comment" class="comment" placeholder="write your comment here..."></div><button id=' + i + ' class="btn btn-primary btn-comment"  type="button">add comment</button></form></br>');
        //bindEvents();
    }
}

function remove(i) {
    posts.splice(i, 1);
    addposts();
}

function removecomment(i, j) {
    console.log(i+'-'+j,posts[j].comments[i])
    posts[j].comments.splice(i, 1);
    addposts();
}


 /* var bindEvents = function () {
    $('.remove').off(); 
    $('.remove').click(function () {
        content=$(this).closest('p').text();
        console.log(content);
        for(var i=0;i<posts.length;i++){
            if('REMOVE'+posts[i].text===content){
                posts.splice(i,1);
                break;
            }
        }
        $(this).closest('p').remove();
    });
  }*/

