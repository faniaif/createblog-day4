let data = [];
function addData(event) {
  event.preventDefault();
  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  img = URL.createObjectURL(image[0]);

  let blog = {
    title,
    content,
    img,
    postAt: "19 November 2022",
    author: "Fania",
  };
  data.push(blog);
  renderBlog();
}

//exclude function of start date, end date, and tecnologies.
function renderBlog() {
  document.getElementById("contents").innerHTML = ``;
  for (let index = 0; index < data.length; index++) {
    document.getElementById("contents").innerHTML += `  <div class="container">
    <div class="blog-card" id="contents" class="blog-list">
    <div class="blog-list-item">
     <div class="blog-image">
      <img src=""${data[index].img}" alt="" />
      </div>
            <div class="blog-content">
              <h2>
                <a href="#" target="_blank">${data[index].title}</a>
              </h2>
              <div class="detail-blog-content">${data[index].postAt} | ${data[index].author} | duration 3 hours
              </div>
              <p>${data[index].content}</p>
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
        <div>
    </div>`;
  }
}
