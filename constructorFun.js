let post = new Post("t","a","b");
console.log(post);

function Post(title,author,body){
    this.author = author;
    this.title = title;
    this.body = body;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}