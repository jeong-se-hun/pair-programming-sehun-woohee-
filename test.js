// 전

function processPost() {
  const posts = gotPosts();

  posts.forEach(post => {
    console.log(post);
  });
}

// 후

function logPost(posts2) {
  console.log(posts2);
}

function processPost2() {
  const posts2 = gotPosts();

  posts2.forEach(logPost);
}

// 전
const user = getUser();

if (user.authKey) {
}

// 후

const user2 = getUser();
const isLoggedIn = Boolean(user.authKey);

if (isLoggedIn) {
}
